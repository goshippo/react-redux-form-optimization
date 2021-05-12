# Demo Code for optimizing the react component re-rendering when using redux-form
[Insert  link to blogpost]

- Clone the repo
- npm install
- yarn start

In the Chrome browser make sure you have [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) installed.

- Open React Profiler in Chrome dev tools.
- Enable **Highlight updates when components render** in the _General_ React Profiler settings.

As you type in form fields of the Redux Form - you will see in the **Bad Parent Component** - Parent , Children and Redux form components are re-rendering.

But in the **Better Parent Component** only the redux form is re-rendering.