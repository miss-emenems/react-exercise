<h1>DOCUMENTATION</h1>

## What is this?
React application to find closest dealership in desired area.

## Contents
- [Installation](#installation)
- [Architecture](#architecture)
- [UX/UI Changes](#changes)



## Installation

To install all dependencies:
```bash
npm install
```

To launch a server:
```bash
yarn start
```

## Architecture

### React
Application is build in React 16.

### BEM
BEM is used as naming convention when creating components.

### Layout
Css Grid is used to create layout for this application.

### Media Queries
Sass-mq is used to manage media queries. Source: <a href="https://github.com/sass-mq/sass-mq">https://github.com/sass-mq/sass-mq</a>.



## Changes

List of UX/UI improvements

### Section: Contact details
Element: Checkboxes for "When do you plan to purchase your motorcycle?"
Change:
Checkboxes changed to radio buttons, as this should be single choice question.


### Section: Terms and conditions
Element: text "I have read and agree to the privacy policy"
Change:
Paragraph changed to checkbox due to recent changes in GDPR data protection policy.


### Section: Select Result & Contact Details form
Element: CTA buttons
Change:
Color for button (red) has been changed to teal, as red suggest dangerous/negative action. Even if now this button exists on it's own, it's better to change UI now, so end-users can used to this colour scheme and it won't have to be change if the app will scale up in the future.

### Section: Enter postcode
Element: "Search" button
Change:
Text for this button has been changed to "Use postcode", as end-user is performing search action when click in "Continue to the next step" button. "Search" button is an alternative to "Use my location" button. It might be worth to consider if this button is necessary as it adds 1 extra step ("Continue to the next step" perform desired action).

### Section: Contact details/Thank you
Element: Contact details from
Specification hasn't predicted "Thank you" message as the confirmation for successfully submitted form, but such feedback is vital for good UX. Additionally there should be also "Submission failed" message in case it wasn't successful.