## Step 8

### Summary

In this step, we will use `express.static` to serve up our `index.html` file. `express.static` takes an argument that is the folder location you want to serve when the server URL is hit in a browser. Our front-end was made using `create-react-app` which has a production ready build. We'll want to server the entire `public/build` folder.

### Instructions

* Call the `use` method on app and pass in `express.static( __dirname + '/../public/build')`.
* Add some books to your collection using Postman.
* Open up `http://localhost:3000` in your browser.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const bc = require( __dirname + '/controllers/books_controller');

const app = express();

app.use( bodyParser.json() );
app.use( express.static( __dirname + "/../public/build") );

const baseURL = "/api/books";
app.post(baseURL, bc.create);
app.get(baseURL, bc.read);
app.put(`${baseURL}/:id`, bc.update);
app.delete(`${baseURL}/:id`, bc.delete);

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

</details>

<br />

<img src="https://github.com/DevMountain/node-introduction/blob/solution/readme-assets/5g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
