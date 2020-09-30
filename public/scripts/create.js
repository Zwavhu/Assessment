'use strict'
const PRODUCT_API_LINK = 'http://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/'
const createButton = document.getElementById('create-product-btn')

const create = async () => {
    const name =  document.getElementById('product-name').value
    const category =  document.getElementById('product-category').value
    const price =  document.getElementById('product-price').value

    // POST request using fetch()
    fetch(PRODUCT_API_LINK, {

        // Adding method type
        method: "POST",
        // Adding contents to send
        body: JSON.stringify({
            Name: name,
            Category: category,
            Price: price
        }),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    alert('Product Successfully Created ')
        // Displaying results to console
        .then(json => console.log(json));
}

createButton.addEventListener('click', create)

