const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.get('/sanity/recipes/:ingredient', function (request, response) {
    let ingredient = request.params.ingredient
    axios.get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`).then(function (apiResponse) {
        let recipes = apiResponse.data.results

        const recipesInfo = recipes.map(recipe => ({
            "ingredients": recipe.ingredients,
            "title": recipe.title,
            "thumbnail": recipe.thumbnail,
            "href": recipe.href
        }))
        response.send(recipesInfo)
    })
        .catch((error) => response.send(error))
})

const port = 3002
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

