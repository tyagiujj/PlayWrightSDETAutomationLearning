# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SingleDownloadFile.spec.ts >> Single Download File
- Location: tests\SingleDownloadFile.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForEvent: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for event "download"
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Downloader" [level=3] [ref=e8]
      - link "report.pdf" [ref=e9] [cursor=pointer]:
        - /url: download/report.pdf
      - link "testfile.txt" [ref=e10] [cursor=pointer]:
        - /url: download/testfile.txt
      - link "cucumber-upload-f1e5ec65-c13e-4bae-aaae-bf7d842fbe26.txt" [ref=e11] [cursor=pointer]:
        - /url: download/cucumber-upload-f1e5ec65-c13e-4bae-aaae-bf7d842fbe26.txt
      - link "upload-6fef1c8c-1159-4ee1-8a11-2b8224e51237.txt" [ref=e12] [cursor=pointer]:
        - /url: download/upload-6fef1c8c-1159-4ee1-8a11-2b8224e51237.txt
      - link "Screenshot_20261011_024348.jpg" [ref=e13] [cursor=pointer]:
        - /url: download/Screenshot_20261011_024348.jpg
      - link "some-file.txt" [ref=e14] [cursor=pointer]:
        - /url: download/some-file.txt
      - link "Parent.ts" [ref=e15] [cursor=pointer]:
        - /url: download/Parent.ts
      - link "hitstory.jpg" [ref=e16] [cursor=pointer]:
        - /url: download/hitstory.jpg
      - link "sample.pdf" [ref=e17] [cursor=pointer]:
        - /url: download/sample.pdf
      - link "cucumber-upload-739b972c-ccbe-464b-89d9-d28da2b4b174.txt" [ref=e18] [cursor=pointer]:
        - /url: download/cucumber-upload-739b972c-ccbe-464b-89d9-d28da2b4b174.txt
      - link "cucumber-download-63663fbe-c8c2-4f93-9853-a78d38599224.txt" [ref=e19] [cursor=pointer]:
        - /url: download/cucumber-download-63663fbe-c8c2-4f93-9853-a78d38599224.txt
      - link "fictional-resume.pdf" [ref=e20] [cursor=pointer]:
        - /url: download/fictional-resume.pdf
      - link "SIGNATURE.pdf" [ref=e21] [cursor=pointer]:
        - /url: download/SIGNATURE.pdf
      - link "test-image.svg" [ref=e22] [cursor=pointer]:
        - /url: download/test-image.svg
      - link "download-54281b0b-93c0-4b96-89ee-f94f7d41b619.txt" [ref=e23] [cursor=pointer]:
        - /url: download/download-54281b0b-93c0-4b96-89ee-f94f7d41b619.txt
      - link "sample.txt" [ref=e24] [cursor=pointer]:
        - /url: download/sample.txt
      - link "9f24f6735000dcf15a59b56908b22e2f.txt" [ref=e25] [cursor=pointer]:
        - /url: download/9f24f6735000dcf15a59b56908b22e2f.txt
      - link "upload-bb966a7c-deac-43b9-ba09-146ebf08eaa6.txt" [ref=e26] [cursor=pointer]:
        - /url: download/upload-bb966a7c-deac-43b9-ba09-146ebf08eaa6.txt
      - link "history.jpg" [ref=e27] [cursor=pointer]:
        - /url: download/history.jpg
      - link "sample.csv" [ref=e28] [cursor=pointer]:
        - /url: download/sample.csv
      - link "upload-test.txt" [ref=e29] [cursor=pointer]:
        - /url: download/upload-test.txt
      - link "download-282b247c-08cf-4e3e-8d44-34459661c49d.txt" [ref=e30] [cursor=pointer]:
        - /url: download/download-282b247c-08cf-4e3e-8d44-34459661c49d.txt
      - link "download-6d927d8e-45e2-4d8e-a295-c437fbbde264.txt" [ref=e31] [cursor=pointer]:
        - /url: download/download-6d927d8e-45e2-4d8e-a295-c437fbbde264.txt
      - link "1000316924.jpg" [ref=e32] [cursor=pointer]:
        - /url: download/1000316924.jpg
      - link "1000316982.jpg" [ref=e33] [cursor=pointer]:
        - /url: download/1000316982.jpg
      - link "puppy.png" [ref=e34] [cursor=pointer]:
        - /url: download/puppy.png
      - link "dummy_test_file_genl_PMOLGeneralNelson_TestFile_new_txt_45031009_GENNEL04_20250617015141173_39873245_20250617015423052.xml" [ref=e35] [cursor=pointer]:
        - /url: download/dummy_test_file_genl_PMOLGeneralNelson_TestFile_new_txt_45031009_GENNEL04_20250617015141173_39873245_20250617015423052.xml
      - link "XML Path.txt" [ref=e36] [cursor=pointer]:
        - /url: download/XML Path.txt
      - link "Screenshot 2026-09-14 144401.png" [ref=e37] [cursor=pointer]:
        - /url: download/Screenshot 2026-09-14 144401.png
      - link "debug.png" [ref=e38] [cursor=pointer]:
        - /url: download/debug.png
      - link "test_file_upload.py" [ref=e39] [cursor=pointer]:
        - /url: download/test_file_upload.py
      - link "selenium-snapshot.png" [ref=e40] [cursor=pointer]:
        - /url: download/selenium-snapshot.png
      - link "image.png" [ref=e41] [cursor=pointer]:
        - /url: download/image.png
      - link "GitOpsFInal-DDCCourse.pdf" [ref=e42] [cursor=pointer]:
        - /url: download/GitOpsFInal-DDCCourse.pdf
      - link "file_upload_test_cases_playwright.csv" [ref=e43] [cursor=pointer]:
        - /url: download/file_upload_test_cases_playwright.csv
      - link "cucumber-download-a4c3efe7-a506-4c34-b09a-da9b5a01b236.txt" [ref=e44] [cursor=pointer]:
        - /url: download/cucumber-download-a4c3efe7-a506-4c34-b09a-da9b5a01b236.txt
      - link "Sep_2026_Bill.png" [ref=e45] [cursor=pointer]:
        - /url: download/Sep_2026_Bill.png
      - link "cucumber-upload-ee2d4118-2c38-47a0-83cb-663dcf6847a0.txt" [ref=e46] [cursor=pointer]:
        - /url: download/cucumber-upload-ee2d4118-2c38-47a0-83cb-663dcf6847a0.txt
      - link "logo.txt" [ref=e47] [cursor=pointer]:
        - /url: download/logo.txt
      - link "sample.json" [ref=e48] [cursor=pointer]:
        - /url: download/sample.json
      - link "upload-044fc25e-e6a0-4d2f-8186-9f133284ba7d.txt" [ref=e49] [cursor=pointer]:
        - /url: download/upload-044fc25e-e6a0-4d2f-8186-9f133284ba7d.txt
      - link "sampleSeleniumFile.txt" [ref=e50] [cursor=pointer]:
        - /url: download/sampleSeleniumFile.txt
      - link "valid-upload.pdf" [ref=e51] [cursor=pointer]:
        - /url: download/valid-upload.pdf
      - link "valid-upload.png" [ref=e52] [cursor=pointer]:
        - /url: download/valid-upload.png
      - link "valid-upload.txt" [ref=e53] [cursor=pointer]:
        - /url: download/valid-upload.txt
      - link "checkup-1791695194-362x.txt" [ref=e54] [cursor=pointer]:
        - /url: download/checkup-1791695194-362x.txt
      - link "cucumber-download-adfa5eb5-c0c3-4f99-a9fd-30c8ed146f1c.txt" [ref=e55] [cursor=pointer]:
        - /url: download/cucumber-download-adfa5eb5-c0c3-4f99-a9fd-30c8ed146f1c.txt
      - link "Textdatei.txt" [ref=e56] [cursor=pointer]:
        - /url: download/Textdatei.txt
      - link "Images.txt" [ref=e57] [cursor=pointer]:
        - /url: download/Images.txt
  - generic [ref=e59]:
    - separator [ref=e60]
    - generic [ref=e61]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e62] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Single Download File', async ({ page }) => {
  4  |     test.setTimeout(60000); 
  5  |   await page.goto('https://the-internet.herokuapp.com/download');
  6  | 
  7  |   // Start waiting for the download BEFORE clicking
> 8  |   const downloadPromise = page.waitForEvent('download');
     |                                ^ Error: page.waitForEvent: Test timeout of 60000ms exceeded.
  9  |   await page.getByRole('link', { name: 'SkodeQA_Sharmatania_sharmatania384@gmail.com.pdf' }).click();
  10 |   const download = await downloadPromise;
  11 | 
  12 |   // Verify the download succeeded (failure() returns null on success)
  13 |   expect(await download.failure()).toBeNull();
  14 | 
  15 |   // Verify the file name
  16 |   expect(download.suggestedFilename()).toBe('SkodeQA_Sharmatania_sharmatania384@gmail.com.pdf');
  17 | 
  18 |   // Save the file into a downloads folder
  19 |   await download.saveAs('downloads/' + download.suggestedFilename());
  20 | });
```