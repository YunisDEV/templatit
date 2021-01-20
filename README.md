# Templatit

## Installation

Add Templatit to your HTML File:

```html
<script src="https://unpkg.com/templatit"></script>
```

## Usage

There is 2 ways to use Templatit:

-   Functional
-   Class based

### Functional

For using functional way, you have to use `template` tag and give it a unique id. For example,

```html
<template id="hello-template"> Hello {name}! </template>
```

To use this template,

```js
console.log(
    templatit("#alert-template", {
        name: "Yunis",
    })
);
// it will output rendered template.
// Hello Yunis!
```

You can also use `templatit` function without creating template tag. Like this one.

```js
templatit(
    null,
    {
        name: "Yunis",
    },
    "Hello {name}!"
);
// Hello Yunis!
```

This way of using `templatit` function is not recommended. There is better way to do it &mdash; class based templates.

### Class based

Class based templates is better for adding template string to your javascript code.

```js
var template = new Templatit("Hello {name}!");
template.render({
    data: {
        name: "Yunis",
    },
    callback: window.alert,
});
```

This will automatically render template and show it in alert box.
Also you can use `where` to render template to html element with specific selector.

```js
template.render({
    data: {
        name: "Yunis",
    },
    where: "#hello-box",
});
```

You can also pass array to `data` parameter. It will render all data inside array and join them. It is useful when fetching comments, any type of list or etc.

---

Both ways has its own usage scenario. You can use them in specific situations.

Thanks for reading README of this project. Feel free to create an issue if you found any bug. You can also contribute it. Have a good coding!!!
