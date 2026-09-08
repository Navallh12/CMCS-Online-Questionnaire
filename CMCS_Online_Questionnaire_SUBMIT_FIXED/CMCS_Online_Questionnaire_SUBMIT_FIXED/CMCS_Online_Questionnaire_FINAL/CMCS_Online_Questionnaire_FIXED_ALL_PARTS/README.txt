# CMCS Online Questionnaire

This package turns the uploaded CMCS questionnaire into a mobile-friendly website and connects responses to Google Sheets.

## Files
- `index.html` — the questionnaire website.
- `Code.gs` — Google Apps Script that receives and stores responses.
- `README.txt` — these instructions.

## Set up the response database

1. Open Google Sheets and create a blank spreadsheet, e.g. `CMCS Questionnaire Responses`.
2. Open **Extensions > Apps Script**.
3. Delete the sample code and paste everything from `Code.gs`.
4. Click **Deploy > New deployment**.
5. Select **Web app**.
6. Set **Execute as:** Me.
7. Set **Who has access:** Anyone.
8. Deploy and copy the Web App URL.
9. Open `index.html` in VS Code.
10. Find:
   `PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
11. Replace it with the Web App URL.
12. Save the file.
13. Open `index.html` in a browser and test one response.
14. The response should appear as a new row in the Google Sheet.

## Important
- The questionnaire uses the wording from the supplied document, including separate Student and Administrative Staff versions.
- No respondent name is requested.
- The website requires internet access when submitting because it sends the answers to Google Sheets.
- Before actual data collection, test at least one Student response and one Administrative Staff response and confirm that both appear correctly in the spreadsheet.
