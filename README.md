A wee outdoor shop for Inclusive.

This repo uses:

-   React
-   TypeScript
-   Styled Componenents
-   Jest

Main page component is wrapped within App.tsx as 'ProductPage'. This can be found in 'Pages/Product/products.tsx'. This is where Json data has been imported. From here there is a Container component that wraps ProductList, where the list of products is stored, and CartDrawer where the cart items are stored once they are added. The cart can be opened with a button at the footer. Util folder contains two helper functions for getting the total price of cart and formatting the price into GBP. Models contains the models for Cart and Product. Components contains a custom styled button with props styles, Header, Footer, Cart: CartDrawer, CartList, CartItem, ProductList, ProductTile. Static contains the list of products as json stored as a variable. eslint and prettier are used for linting and formatting.

### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

runs jest

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
