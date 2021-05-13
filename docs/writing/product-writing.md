---
title: Product writing
status: ready
menuOrder: 6
---

Supportive and clear product writing can help our customers complete their tasks easily and efficiently. All of our user interface text aims to keep users informed about what is going on and what they can do.

Note: All spelling should be US spelling. For example, ‘organization’, not ‘organisation’.

## Writing error messages

All messages should include:

1. **What happened** (in plain language, precisely and specifically, in a concrete, vivid way), and
2. **What the user should do next** (in positive, active language, expanding their options, and providing single-click solutions).

Important considerations:

* Even if you have absolutely no idea what caused the error, you can write a more helpful message than “Something went wrong”. For example, “We couldn’t show your &lt;STUFF&gt;. We've been automatically notified and will fix this as soon as we can. Thanks for your patience.” and make sure error monitoring is hooked up.
* Preserve the visitor's existing work by saving their input and letting them correct it instead of retyping the entire body of text as well as the updated correction.
* Use user-centered language. Replace “we” with “your”. Only include relevant, timely, task focused details.
* Use the active (not passive) voice. For example, instead of “The email address field has not been filled out”, say “Enter your email address”.

### Use active language not passive language

Active language is often clearer and more succinct.

You can spot “passive” language by trying to finish the sentence with “by zombies”. For example, “The decision was made… by zombies.”

To make passive language active, figure out who or what is taking the action and change the verb. For example, “We made the decision.”

### Example error messages

* “That username already exists. Here are similar options that are available:” instead of “Can't use that username.”
* “There is no Internet connection. Check your connection and try again. [Refresh].”
* “There’s no network connection. You can still watch downloaded videos. [Retry].”
* “That lesson is missing. Here are some available lessons:” instead of “Lesson not found or doesn't exist. Sorry we couldn't find it.”
* “Your file is empty. Check for a header and data in your spreadsheet, and try again.”
* “An upgrade is available for this app.” instead of “This version is not supported”.
* “Your file didn't upload. We've been notified and will look into this as soon as possible. Thanks for your patience. If you need immediate assistance, [contact support].” instead of “We're not sure what went wrong. Let us know what happened. Sorry about that. Wait and do nothing.”
* “Enter your email address.” instead of “The email address field has not been filled out” or “Email field is required”
* “Use at least 24 characters. You can use letters, numbers, and symbols, except for: ~_,” instead of “Your password doesn't have enough characters. You can't use ~_”
* “That date is in the past.” instead of “Date is incorrect” for a Departure Date

### Words to avoid in error messages

Here are some of the most common words in error messages that can be replaced with clearer or more supportive language:

* 🚫 thing, something – replace these vague words with precise, concrete words ,e.g. “lesson”, “course”
* 🚫 error, failure, broken, wrong – this can make it seem worse than it already is. Try “We couldn’t load the data.”
* 🚫 persists – this is system language. Try “If this issue continues, …”
* 🚫 oops – particularly avoid this when the stakes are high, such as financial transactions or severe data loss
* 🚫 get, being – indicates passive voice
* 🚫 sorry – can often be restated more positively such as “thanks for your patience” instead of “sorry for the delay”
* 🚫 very, please – omit needless words
* 🚫 we/us/our – replace with user-centered language including you/your and the user's task

## States

* **Interaction:** default, hover, focus, active, disabled, read-only, dragging
* **Validation:** success, error, warning, info
* **Content:** filled, empty, on, off
* **UI states:** loading, partial, error, ideal, empty/first use, zero/deleted
* **Data states:** 0 items, 1 items, few items, many items, all items, over maximum, under minimum

### UI States

#### Loading states

Show loading skeletons or loading spinners as appropriate.

If nothing loads after an appropriate threshold (e.g. 30 sec), then show a loading error.

#### Error states

There are 3 main types of errors:

* System errors
* Validation and user errors
* Loading errors

##### System errors

**System errors** are unexpected problems in our system, including app-level (500 errors), page-level (404 page not found, no network connection), component level (modal broke), item level (1 item in a list broke).

Keep the error message as close to the source of the problem as possible. For example:

* Use error pages for app-level error
* Use global messages for page–level errors
* Use banners for component level errors
* Use notifications for item level errors

Provide specific errors for each type of failure. Don’t use a catch-all “something went wrong” for all types of failure. Tailor the message to each type.

Seriously, write separate messages for each specific kind of error instead of one generic message to catch all types of errors. They will likely require different actions from the user to recover. This will bring the biggest gains to improving an error message; copywriters may make other improvements to a precise message, but they cannot make a vague message more precise.

##### Validation and user errors

**Validation errors** are where users have provided information that does not meet our requirements e.g. email address missing an “@” symbol.

Keep the validation message as close to the source of the problem as possible. For example:

* Use component-specific error validation states

##### Loading errors

**Loading errors** are where loading data has failed. For example, there’s no network connection, we’ve tried to load something we don’t have permission for, or we tried to load the wrong kind of data.

Keep the error message as close to the source of the problem as possible. For example:

* When using a loading skeleton, after timeout, show an inline message.
* When using a loading spinner, use an inline Banner.
* When a single item in a list fails, use an inline message.
* When a list fails, use an inline Banner.
* When a page fails, use an Error Page.

##### Messaging components for errors

Use global messages for system-level errors where the page may still partially load.

Use error pages for system-level errors where the whole page fails

Use inline banners for specific sections of a page. For example, move down the failed section of content to show an inline banner above it, the full width of the content area.

Use inline messages for specific items failing to load.

## Localization

We translate our interface text into many languages.

* Use short, simple labels. Where a 2-word button might fit nicely in English, it may translate to 4 words in another language and wrap awkwardly.
* Use short, simple sentences. Aim to limit your sentences to 20 words or less. While a sentence in English may have 30 words, the same sentence in another language may take up 40 words.
* Consider how well colloquialisms and metaphors will translate into languages other than English. There may be more accessible phrases.

## Labels

### When to use a full stop (period)

The gist is:

> Sentences end with a full stop.

We have some examples to make that clearer.

Use a full stop in:

* error messages, including form validation messages,
* notifications,
* help text (e.g. form element help text), and
* introductory paragraphs.

Don't use a full stop in:

* headings,
* buttons, and
* form labels (e.g. text input, date picker, and radio group component labels).

