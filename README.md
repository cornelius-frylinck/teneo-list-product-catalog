# Run instructions

- Step 1: clone project
- Step 2: run `npm install` to install required packages - can be done in console or you can open the project in a code editor like VSCode
- Step 3: create .env.developemnt file with the following variables and assign the correct values
    - VITE_PRODUCT_API_BASE_URL
    - VITE_PRODUCT_API_API_KEY
- Step 4: run the project with `npm run dev`

# Caching & Pagination Choices

React Query was used for pagination (from the product catalog page, click on the filter icon in the top left and set your filters and pagination settings, and press 'save' to reload) and caching (a unique query key is created every time you make a query, and is then used to manage your server state) due to it's useful features and ease of implementation.

MobX and react-mobx-lite were used for local state management for similar reasons, easy to implement, easy to understand, but extremely powerful.

# Error Handling Choices

To reduce the amount of errors a user experiences, the server healthcheck is done in the `Home` page. When starting the application, you will see a spinner indicating that the healthcheck is being done, then you will either see a `sick` page, or get an indication that the server is `healthy` and be able to proceed to the product catalog.

If at any time errors occur during a request, Axios interceptors will catch them and route you to an appropriate error page, then you can just click on the title in the nav-bar to return to the `Home` page where the flow will restart.