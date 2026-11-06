"""Inline src/ into one self-contained HTML file.
Outputs:
  dist/index.html          -> open directly on a PC
  docs/index.html          -> GitHub Pages (microphone recording works here)
  apps-script/Index.html   -> paste into Google Apps Script
"""
from pathlib import Path

root = Path(__file__).parent
src = root / "src"
JS = ["data.js", "exams.js", "edusynch.js", "speaking.js", "app.js", "prep.js", "speak.js", "remind.js"]
js = "\n;\n".join((src / f).read_text(encoding="utf-8") for f in JS) + "\n;APP.start();\n"
assert "</script" not in js.lower(), "a JS file contains </script>"
out = ((src / "shell.html").read_text(encoding="utf-8")
       .replace("/*CSS*/", (src / "styles.css").read_text(encoding="utf-8"))
       .replace("/*JS*/", js))

for p in (root / "dist" / "index.html", root / "docs" / "index.html", root / "apps-script" / "Index.html"):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(out, encoding="utf-8")
    print(f"wrote {p.relative_to(root)}  ({len(out.encode('utf-8'))/1024:.1f} KB)")
(root / "docs" / ".nojekyll").write_text("", encoding="utf-8")

import shutil
for f in (src / "pwa").iterdir():
    shutil.copy(f, root / "docs" / f.name)
    print("copied pwa/" + f.name)
