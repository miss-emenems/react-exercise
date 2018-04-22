<h1>DOCUMENTATION</h1>

## What is this?
React application to find closest dealership in desired area.

## Contents
- [Installation] (#installation)
- [Architecture] (#architecture)
- [UX/UI Changes] (#changes)



##Installation

To install all dependencies:
```bash
npm install
```

To launch a server:
```bash
yarn start
```

##Architecture

###BEM
BEM is used as naming convention when creating components.

###Layout
Css Grid is used to create layout for this application.

###Media Queries
Sass-mq is used to manage media queries. Source: <a href="https://github.com/sass-mq/sass-mq">https://github.com/sass-mq/sass-mq</a>.



###UX/UI Changes

##Section: Contact details
Element: Checkboxes for "When do you plan to purchase your motorcycle?"
Change:
Checkboxes changed to radio buttons, as this should be single choice question.


##Section: Terms and conditions
Element: text "I have read and agree to the privacy policy"
Change:
Paragraph changed to checkbox due to recent changes in GDPR data protection policy.


##Section: Select Result & Contact Details form
Element: CTA buttons
Change:
Color for button (red) change to teal, as red suggest dangerous/negative action. Even if now this button exists on it's own, it's better to change UI now, so users can used to this colour scheme and it won't have to be change if the app will scale up in the future.