import { injectGlobal } from "emotion";
import { load as loadWebFont } from "webfontloader";
import { type } from "./index";

export function globalCSS() {
  fontCSS();
  resetCSS();
}

export function fontCSS(config = {}) {
  loadWebFont({
    google: {
      families: ["Muli:400,400i,600,700"],
    },
    ...config,
  });
}

export function resetCSS() {
  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
:root {
  line-height: 1;
  font-family: ${type.family.sansSerif};
  font-style: normal;
  font-weight: normal;
  text-align: left;
  text-decoration: none;
  vertical-align: baseline;
  box-sizing: border-box;
  font-size: 100%;
  list-style: none;
  text-transform: none;
  background-repeat: no-repeat;
}

/* Reset */

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  font-size: inherit;
  color: inherit;
  background-repeat: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  line-height: inherit;
  text-align: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  outline: 0;
  list-style: inherit;
  vertical-align: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
}

*,
*:before,
*:after {
  border: 0;
  background: none;
  background-color: transparent;
}

/**
 * Prevent adjustments of font size after orientation changes in IE and iOS.
 */

/* Document
   ========================================================================== */

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

/* Display definitions
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 * 2. Add the correct display in IE.
 */

article,
aside,
details, /* 1 */
figcaption,
figure,
footer,
header,
main, /* 2 */
menu,
nav,
section,
summary { /* 1 */
	display: block;
}

/**
 * Add the correct display in IE 9-.
 */

audio,
canvas,
progress,
video {
	display: inline-block;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
	display: none;
	height: 0;
}

/**
 * Add the correct display in IE 10-.
 * 1. Add the correct display in IE.
 */

template, /* 1 */
[hidden] {
	display: none;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
  border-top: 1px solid;
}

/* Grouping content (https://www.w3.org/TR/html5/grouping-content.html)
   ========================================================================== */

/**
 * Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-size: 1em;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  -webkit-text-decoration-skip: objects; /* 2 */
}

s {
  text-decoration: line-through;
}

/**
 * Change the positioning on superscript and subscript elements
 * in all browsers.
 * 1. Correct the font size in all browsers.
 */

sub,
sup {
  font-size: 83.3333%; /* 1 */
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
 * Remove the text shadow on text selections.
 * 1. Restore the coloring undone by defining the text shadow.
 */

::-moz-selection {
	background-color: #78D6FC; /* 1 */
	color: currentColor; /* 1 */
	text-shadow: none;
}

::selection {
	background-color: #78D6FC; /* 1 */
	color: currentColor; /* 1 */
	text-shadow: none;
}

/* Embedded content
   ========================================================================== */

/*
* Change the alignment on media elements in all browers.
*/

audio,
canvas,
iframe,
img,
svg,
video {
	vertical-align: middle;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/**
 * Stop images overflowwing by default
 */

img {
  max-width: 100%;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

svg {
  fill: currentColor;
}

iframe {
  max-width: 100%;
  overflow: auto;
}

/* Links (https://www.w3.org/TR/html5/links.html#links)
   ========================================================================== */

/**
 * Remove the gaps in underlines in iOS 8+ and Safari 8+.
 */

a {
	-webkit-text-decoration-skip: objects; /* 2 */
}

/* Forms
   ========================================================================== */

/**
 * Ensure height stays to the default line height
 */

label {
  display: inline-block;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

button:disabled,
select:disabled,
input:disabled {
  opacity: .7;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Reset buttons
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Remove focus styles in Firefox
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: none;
}

/**
 * Correct the text wrapping in Edge and IE.
 */

legend {
  display: table;
  max-width: 100%;
  white-space: normal;
}

/**
 * 1. Remove the default vertical scrollbar in IE.
 * 2. Remove rounded corners on iOS
 */

textarea {
  overflow: auto; /* 1 */
  border-radius: 0; /* 2 */
}

/**
 * Remove increment and decrement buttons for number inputs.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  display: none;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button,
::-moz-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/**
 * Reset all placeholders to use inherited color with opacity
 */

::-webkit-input-placeholder {
  color: inherit;
  opacity: .7;
}

::-moz-placeholder {
  color: inherit;
  opacity: .7;
}

:-ms-input-placeholder {
  color: inherit;
  opacity: .7;
}

:-moz-placeholder {
  color: inherit;
  opacity: .7;
}

:placeholder {
  color: inherit;
  opacity: .7;
}

/* WAI-ARIA (https://www.w3.org/TR/html5/dom.html#wai-aria)
   ========================================================================== */

/**
 * Change the cursor on busy elements.
 */

[aria-busy="true"] {
	cursor: progress;
}

/*
 * Change the cursor on control elements.
 */

[aria-controls] {
	cursor: pointer;
}

/*
 * Change the cursor on disabled, not-editable, or otherwise
 * inoperable elements.
 */

[aria-disabled] {
	cursor: default;
}

/* User interaction (https://www.w3.org/TR/html5/editing.html)
   ========================================================================== */

/*
 * Remove the tapping delay on clickable elements.
 * 1. Remove the tapping delay in IE 10.
 */

a,
area,
button,
input,
label,
select,
textarea,
[tabindex] {
	-ms-touch-action: manipulation; /* 1 */
	touch-action: manipulation;
}

/*
 * Change the display on visually hidden accessible elements.
 */

[hidden][aria-hidden="false"] {
	clip: rect(0, 0, 0, 0);
	display: inherit;
	position: absolute;
}

[hidden][aria-hidden="false"]:focus {
	clip: auto;
}
    `;
}
