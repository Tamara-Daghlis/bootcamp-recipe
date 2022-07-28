const render = new Renderer()
const searchButton = $("#search")
const ingredientInput = $("#ingredient-input")
const recipesContainar = $(".recipes-container")

searchButton.on('click', function () {
    let ingredient = ingredientInput.val()
    $.get(`/sanity/recipes/${ingredient}`, function (recipesData) {
        render.render(recipesData)

        recipesContainar.on('click', '#recipe-image', function () {
            let src = $('#recipe-image').data().src
            for (let imageIndex in recipesData) {
                if (src == recipesData[imageIndex].thumbnail) {
                    alert(recipesData[imageIndex].ingredients[0])
                }
            }
        })
    })
})







