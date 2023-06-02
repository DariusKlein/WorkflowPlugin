/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const test = new Action('com.darius.workflow.test.action');

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
});

test.onKeyUp(({ action, context, device, event, payload }) => {
	console.log('Your key code goes here!');
});

test.onDialRotate(({ action, context, device, event, payload }) => {
	console.log('Your dial code goes here!');
});