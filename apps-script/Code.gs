/**
 * B2 Ready for Teachers — Google Apps Script web app entry point.
 * Deploy: Deploy ▸ New deployment ▸ Web app ▸ Execute as: Me ▸ Who has access: Anyone
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('B2 Ready for Teachers · เตรียมสอบ B2 สำหรับครู')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover');
}
