# bofa-1

Coding assessment for Bank of America

- Visit [Here](https://bankofamerica-1.herokuapp.com/) for a demo deployed to heroku.

# Getting Started

- Fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js, and Gulp installed on your machine.
- In your CLI, navigate to the cloned directory. `npm install` the dependencies and run `gulp` or `npm start`

- Once started, you are able to view the project on `http://localhost:8080/`

- 🎉Happy developing!🎉

# Linting
run `npm run lint` this will show if you have any ESLint errors or warnings. It is good practice to keep code consistent amongst developers.

<img src="https://thumbs.gfycat.com/FoolishImpracticalAfricanpiedkingfisher-size_restricted.gif" width="600" height="400" />

# About this project

- This project is a node.js application that uses gulp as a task runner to optimize its code. The gulp tasks concatenate and minify all of the client side javascripts, as well as convert all the scss into css, concatenate and minify all of those scss files into one file, allowing one css and one js file to be served into the application.

- The gulp task creates a `build` folder which holds all of the minified css and js files. This is regenerated everytime the scss or js files are saved when the server is running by the command `gulp`

- In this version, the grocery list data was saved within our file structure. Here we render the groceries.json data through a handlebars template, allowing us to not have to write any client side javascript as we are rendering the html template on the server side. See version bofa-2 for a client side javascript solution.

# Technology used
- node.js
- scss
- JavaScript
- html5
- handlebars
- gulp
- eslint
