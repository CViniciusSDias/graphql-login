# Freshcells trial task

## Instructions

In order to execute this project you will need `node` (and `npm`) installed.

### See in the browser

Open a terminal and navigate to the project folder. Inside the folder, run `npm start`.
That will start an HTTP server and make the application available via your browser at `http://localhost:3000`.

### Run tests

This application also has some tests. In order to run them, also inside the project's folder, run `npm test`.
That will show you which tests were executed and their results.

## Technologies used

Besides the mandatory stack (React), a few other libraries were also installed. They are:

### react-router-dom

This allows an SPA navigation, i.e, navigation between components without reloading the screen.

### @apollo/client

This is a GraphQL client that allows us to execute queries and mutations.

### @chakra-ui/react

UI library used for creating the interface of the application

### i18next

Internationalization library that allows us to have multiple languages. The project is configured to detect the browser's language and display the text in that language. The following translations are available:
- English
- Portuguese

### react-cookie

This library was used to store the token as a secure cookie.

## Application architecture

The project's code lives in the `src` folder which is divided into the following folders:

- common
    - Contains the files that are shared between pages and/or components. That includes configuration, internationalization, access to the GraphQL server and contexts.
- components
    - Contains the components that can be reused in multiple pages
    - Here we also have the `DefaultPage` and `ProtectedRoute` components that were used to make the application more extensible. The first makes sure every page has the theme switcher and the default container. The last one provides a simple verification if the token cookie exists. If that cookie does not exist, the user cannot access the route and is redirected to the login page.
    - Here also lives the project's error boundary, which catches any unknown errors, logs them to the console and displays a generic message (that does not use any third-party since the error could come from there).
- pages
    - Contains the application pages. Those pages use the shared components, contexts and configurations.
    - Here is also the file that contains the tests for the Login page.