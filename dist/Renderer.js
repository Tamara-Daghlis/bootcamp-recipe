class Renderer {

    render(recipesData) {
        const recipesTemplate = $("#recipes-template")
        const recipesContainar = $(".recipes-container")

        const source = recipesTemplate.html()
        const template = Handlebars.compile(source)
        const recipesInformation = template({ recipes: recipesData })
        recipesContainar.html(" ").append(recipesInformation)
    }

}