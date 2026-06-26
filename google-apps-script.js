// =============================================================
// Google Apps Script — paste this into Extensions > Apps Script
// in your Google Sheet, then deploy as a web app.
// =============================================================
//
// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet
// 2. Go to Extensions > Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click Deploy > Manage deployments > Edit (pencil) > New version > Deploy
// =============================================================

function doGet(e) {
  if (e.parameter.email) {
    var sheet = SpreadsheetApp.openById('187c-MisRQpF_7IsQkBea5VEpqJ4ren-r5dFmoRAd4-o').getActiveSheet();
    var email = e.parameter.email;
    var date = e.parameter.date ? new Date(e.parameter.date) : new Date();
    sheet.appendRow([date, email]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.openById('187c-MisRQpF_7IsQkBea5VEpqJ4ren-r5dFmoRAd4-o').getActiveSheet();
  var email = e.parameter.email;
  var date = e.parameter.date ? new Date(e.parameter.date) : new Date();
  sheet.appendRow([date, email]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
