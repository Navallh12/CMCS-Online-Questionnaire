// CMCS Questionnaire - Google Apps Script backend
// 1. Create a Google Sheet.
// 2. Extensions > Apps Script.
// 3. Replace the default code with this file.
// 4. Deploy > New deployment > Web app.
//    Execute as: Me
//    Who has access: Anyone
// 5. Copy the Web App URL and paste it into index.html where instructed.

const SHEET_NAME = "Responses";

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  const p = e && e.parameter ? e.parameter : {};
  const headers = getHeaders_(p);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1,1,1,headers.length).setValues([headers]);
  } else {
    const existing = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
    const merged = Array.from(new Set(existing.concat(headers)));
    if (merged.length !== existing.length) {
      sheet.getRange(1,1,1,merged.length).setValues([merged]);
    }
  }

  const finalHeaders = sheet.getRange(1,1,1,sheet.getLastColumn()).getValues()[0];
  const row = finalHeaders.map(h => p[h] || "");
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({success:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

function getHeaders_(p) {
  const preferred = ["submittedAt","stratum","yearLevel","office","staffOffice","yearsService"];
  const keys = Object.keys(p);
  return preferred.concat(keys.filter(k => !preferred.includes(k)));
}
