# Screen Reader Testing

We've done a lot of accessibility auditing and fixing so far, but until we test with a screen reader we can't be sure we've caught every issue.

In this section, we’ll improve markup for screen readers such as VoiceOver, NVDA, and JAWS.

Screen reader cheat sheets:

- https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts
- https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts
- https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts

## Exercise: Improve markup for assistive technology

Using the files in this directory as a reference, fix issues found on the homepage when navigating with a screen reader:

- `index.html`
- `about.html`

URL to view "fixed" files locally:

http://localhost:1234/exercise5-screenreader

URL to view a deployed version for this exercise:

https://workshop-manual-a11y-testing.testingaccessibility.com/exercise5-screenreader

Files you'll touch to make these improvements include:

- `index.html`
- `includes/_header.html`
- `menu.js`
- `scss/_header.scss`
- `scss/pages/_home.scss`
- `about/index.html`
