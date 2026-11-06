"""Inline src/ into one self-contained HTML file.
Outputs:
  dist/index.html          -> open directly on a PC / send to phone
  apps-script/Index.html   -> paste into Google Apps Script
"""
from pathlib import Path

root = Path(__file__).parent
src = root / "src"
shell = (src / "shell.html").read_text(encoding="utf-8")
out = (shell
       .replace("/*CSS*/", (src / "styles.css").read_text(encoding="utf-8"))
       .replace("/*DATA*/", (src / "data.js").read_text(encoding="utf-8"))
       .replace("/*APP*/", (src / "app.js").read_text(encoding="utf-8")))

for p in (root / "dist" / "index.html", root / "apps-script" / "Index.html"):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(out, encoding="utf-8")
    print(f"wrote {p.relative_to(root)}  ({len(out.encode('utf-8'))/1024:.1f} KB)")
