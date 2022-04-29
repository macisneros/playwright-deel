import {devices, PlaywrightTestConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
let config: PlaywrightTestConfig;

// @ts-ignore
config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  fullyParallel: true,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 5 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'],
    ['experimental-allure-playwright']
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    baseURL: "https://app.deel.training/login**",
    actionTimeout: 0,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          args: ['--start-maximized']
        },
        ...devices['Desktop Chrome'],
        storageState: {
          "cookies": [
            {
              "sameSite": "None",
              "name": "_GRECAPTCHA",
              "value": "09ACztih74TuVUj5jEaAXhCgbgPrsGuHi8YhoZe-d8DwFg84jR09JosD23OF6hesBGS_YdlcBOd8jc35qSpVWXBvc",
              "domain": "www.google.com",
              "path": "/recaptcha",
              "expires": 1666665427.452823,
              "httpOnly": true,
              "secure": true
            },
            {
              "sameSite": "Lax",
              "name": "_gcl_au",
              "value": "1.1.391653200.1651113423",
              "domain": ".deel.training",
              "path": "/",
              "expires": 1658889422,
              "httpOnly": false,
              "secure": false
            },
            {
              "sameSite": "None",
              "name": "m",
              "value": "851930e3-174d-46a6-bcf1-a87e525f19c2a1caba",
              "domain": "m.stripe.com",
              "path": "/",
              "expires": 1714185441.678591,
              "httpOnly": true,
              "secure": true
            },
            {
              "sameSite": "Strict",
              "name": "__stripe_mid",
              "value": "025ebce7-1fe8-4f8e-a7ad-06f52734c116ff4177",
              "domain": ".app.deel.training",
              "path": "/",
              "expires": 1682649438,
              "httpOnly": false,
              "secure": true
            },
            {
              "sameSite": "Strict",
              "name": "__stripe_sid",
              "value": "c67028bc-f022-47c2-911b-9ccd877f565abbece1",
              "domain": ".app.deel.training",
              "path": "/",
              "expires": 1651115238,
              "httpOnly": false,
              "secure": true
            },
            {
              "sameSite": "None",
              "name": "IDE",
              "value": "AHWqTUkEQDTGk0llqxpiyoP6NK1fQ7AKoYcF6LAG04K0xlJ5mrewutwnbLNQtCF4",
              "domain": ".doubleclick.net",
              "path": "/",
              "expires": 1714185438.381526,
              "httpOnly": true,
              "secure": true
            },
            {
              "sameSite": "Lax",
              "name": "CookieConsent",
              "value": "{stamp:%27JwOvnkVYwkSVa4ou3zitvgtJv85MF0hN8PSpG2HJWeeTqIxkvPDytQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cver:1%2Cutc:1651113440384%2Cregion:%27pe%27}",
              "domain": "app.deel.training",
              "path": "/",
              "expires": 1682649440,
              "httpOnly": false,
              "secure": true
            },
            {
              "sameSite": "Lax",
              "name": "_fbp",
              "value": "fb.1.1651113440790.1180949705",
              "domain": ".deel.training",
              "path": "/",
              "expires": 1658889443,
              "httpOnly": false,
              "secure": false
            },
            {
              "sameSite": "None",
              "name": "fr",
              "value": "0ch3dDmBgFPRa8tQF..Biaf3h...1.0.Biaf3h.",
              "domain": ".facebook.com",
              "path": "/",
              "expires": 1658889440.818566,
              "httpOnly": true,
              "secure": true
            },
            {
              "sameSite": "Lax",
              "name": "_hp2_id.3676226387",
              "value": "%7B%22userId%22%3A%222190830562250798%22%2C%22pageviewId%22%3A%227169342284233491%22%2C%22sessionId%22%3A%222101177350368118%22%2C%22identity%22%3A%22macisneros2%40pucp.edu.pe%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D",
              "domain": ".deel.training",
              "path": "/",
              "expires": 1685191043,
              "httpOnly": false,
              "secure": false
            },
            {
              "sameSite": "Lax",
              "name": "_hp2_ses_props.3676226387",
              "value": "%7B%22r%22%3A%22https%3A%2F%2Fapp.deel.training%2Flogin**%22%2C%22ts%22%3A1651113443620%2C%22d%22%3A%22app.deel.training%22%2C%22h%22%3A%22%2Fcreate%22%7D",
              "domain": ".deel.training",
              "path": "/",
              "expires": 1651115243,
              "httpOnly": false,
              "secure": false
            }
          ],
          "origins": [
            {
              "origin": "https://app.deel.training",
              "localStorage": [
                {
                  "name": "announcement_create_contract",
                  "value": "true"
                },
                {
                  "name": "user_type",
                  "value": "client"
                },
                {
                  "name": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFnZSI6ImRldiIsInByb2ZpbGUiOjQ0MzQ2MSwidGVhbSI6MTQyODgyLCJvcmdhbml6YXRpb25JZCI6bnVsbCwidGltZXN0YW1wIjoxNjUxMTEzNDM5NzQxLCJpZCI6NDE3MDM0LCJleHAiOjE2NTM3MDU0Mzl9.cjPzQWhQRSx6D6Xqz0uU3xWouVTjIYiiHjvGJMcCvRE"
                }
              ]
            },
            {
              "origin": "https://consentcdn.cookiebot.com",
              "localStorage": [
                {
                  "name": "CookieConsentBulkSetting-decb9c8d-7652-487b-a139-70b6303db42b",
                  "value": "{\"resetdomains\":[\"app.letsdeel.com\",\"get.letsdeel.com\",\"help.letsdeel.com\",\"reddit.deel.team\",\"social.deel.network\",\"www.letsdeel.com\"],\"bulkconsent\":{\"ticket\":\"JwOvnkVYwkSVa4ou3zitvgtJv85MF0hN8PSpG2HJWeeTqIxkvPDytQ==\",\"utc\":1651113440384,\"expireMonths\":12,\"preferences\":true,\"statistics\":true,\"marketing\":true},\"expireMonths\":12,\"serial\":\"decb9c8d-7652-487b-a139-70b6303db42b\"}"
                }
              ]
            },
            {
              "origin": "https://www.google.com",
              "localStorage": [
                {
                  "name": "rc::a",
                  "value": "MWZ5MnhramlkaXZveQ=="
                }
              ]
            }
          ]
        }
        }
      }
  ],
};

export default config;
