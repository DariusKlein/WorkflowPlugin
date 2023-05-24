
# Workflow plugin

The `Workflow plugin` is een plugin gemaakt voor mijn persoonlijke workflow.

## Description

`Workflow plugin` is een plugin gemaakt om mijn workflow te verbeteren en mijn taken bij te houden.

## Features

- code written in Javascript
- snel notities maken
- Notities voegen automatiche datetime stamp toe
- Communiceert informatie met server

## Quick Start Guide

Tutorial voor het opzetten van de dev environment

### Clone the repo

```git clone https://github.com/DariusKlein/WorkflowPlugin```

### Create symlink
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! hier verder gaan
Rename the folder as well as any references.

`com.elgato.template` with `my.domain.plugin-name`

### Get the latest library

You can either clone the javascript library or add it as a submodule to your repository.

#### Clone

```git clone https://github.com/elgatosf/streamdeck-javascript-sdk src/my.domain.plugin-name/libs```

#### Add Submodule

```git submodule add https://github.com/elgatosf/streamdeck-javascript-sdk src/my.domain.plugin-name/libs```

### Start Coding

You can get started in app.js!

```javascript
const myAction = new Action('com.elgato.template.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
  console.log('Stream Deck connected!');
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
  console.log('Your key code goes here!');
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
  console.log('Your dial code goes here!');
});
```
