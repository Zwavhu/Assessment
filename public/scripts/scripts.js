console.log('Hello')

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

console.log("Hi")
request.open('GET', 'http://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    data.forEach((product) => {
        // Log each movie's title
        console.log('Hello world')
        console.log(product.Name)
    })
}

// Send request
request.send()