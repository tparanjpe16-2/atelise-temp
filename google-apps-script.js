// =============================================================
// Google Apps Script — paste this into Extensions > Apps Script
// in your Google Sheet, then deploy as a web app.
// =============================================================
//
// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/187c-MisRQpF_7IsQkBea5VEpqJ4ren-r5dFmoRAd4-o
// 2. Go to Extensions > Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click Deploy > New deployment
// 5. Select type: "Web app"
// 6. Set "Execute as": Me
// 7. Set "Who has access": Anyone
// 8. Click Deploy and authorize when prompted
// 9. Copy the web app URL and paste it into coming-soon.html
//    (replace YOUR_APPS_SCRIPT_URL_HERE)
// =============================================================

function doPost(e) {
  var sheet = SpreadsheetApp.openById('187c-MisRQpF_7IsQkBea5VEpqJ4ren-r5dFmoRAd4-o').getActiveSheet();

  var data = JSON.parse(e.postData.contents);
  var email = data.email;
  var date = new Date(data.date);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Email', 'Signup Date']);
  }

  sheet.appendRow([email, date]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Atelise waitlist endpoint' }))
    .setMimeType(ContentService.MimeType.JSON);
}
