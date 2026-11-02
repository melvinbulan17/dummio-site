const repo = "https://github.com/melvinbulan17/dummio";

export const siteName = "Dummio";
export const siteTitle = "Dummio | Test Data Generator";
export const siteDescription =
  "A free Chrome and Firefox extension for QA testers and web developers. Fill any form with realistic fake data in one click, with Philippine and US data built in.";

export const links = {
  repo,
  chromeZip: `${repo}/releases/latest/download/dummio-chrome.zip`,
  firefoxZip: `${repo}/releases/latest/download/dummio-firefox.zip`,
  releases: `${repo}/releases/latest`,
  extensionPrivacy: `${repo}/blob/main/PRIVACY.md`,
  reportProblem: `${repo}/issues/new/choose`,
  credits: `${repo}#credits`,
  support: "https://ko-fi.com/mbulandev",
};

export const pageLinks = [
  { href: "/#how", label: "How it works" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/#faq", label: "FAQ" },
];

export const formatExamples = [
  { field: "Birthday", clue: 'type="date"', value: "1994-03-18" },
  {
    field: "Birthday",
    prefix: "Placeholder ",
    clue: "DD/MM/YYYY",
    value: "18/03/1994",
  },
  { field: "Mobile", clue: 'maxlength="11"', value: "09174821093" },
  {
    field: "Mobile",
    clue: "+63",
    suffix: " beside the field",
    value: "9174821093",
  },
  { field: "ZIP", clue: 'maxlength="4"', value: "1605" },
];

export const permissions = [
  { name: "activeTab", purpose: "Fill the page you're on, after you ask" },
  { name: "scripting", purpose: "Run the filler on that page" },
  {
    name: "contextMenus",
    purpose: 'Add "Fill this field" to the right-click menu',
  },
  { name: "storage", purpose: "Save your settings and site presets" },
];

export const faqs = [
  {
    question: "Alt+Shift+F does nothing",
    answer:
      "Another extension may already use that shortcut, so the browser left it blank. Set your own keys on the browser's extension shortcuts page.",
  },
  {
    question: "Why can't it fill this page?",
    answer:
      "Browsers keep extensions off their own pages, like settings, new tabs and the extension store. Try it on a regular website.",
  },
  {
    question: "A field got the wrong kind of value",
    answer:
      "Open an issue on GitHub with the page and the field. A public test page and a screenshot make it much quicker to fix.",
  },
  {
    question: "Could a live form text the number?",
    answer:
      "Philippine mobile numbers use real prefixes, so one could belong to someone. Emails use reserved example domains and US numbers use the fictional 555-01XX range, so those never reach a real person.",
  },
];
