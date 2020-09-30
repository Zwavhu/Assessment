'use strict'

const PRODUCT_API_LINK = 'https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI'

const displayProduct = async function  (){
    const getId = window.location.href.split("/")
    const response = await fetch(PRODUCT_API_LINK + "/" + getId[getId.length-1])
    const data = await response.json() //extract JSON from the http response

    document.getElementById('product-Id').value = data.Id
    document.getElementById('product-name').value = data.Name
    document.getElementById('product-category').value = data.Category
    document.getElementById('product-price').value = data.Price
}

const update = function () {
    const getId = window.location.href.split("/")
    const id =  getId[getId.length-1] // gets the exact product Id
    const name =  document.getElementById('product-name').value
    const category =  document.getElementById('product-category').value
    const price =  document.getElementById('product-price').value

    fetch( PRODUCT_API_LINK + "/" + id, {
        method: 'PUT',
        body: JSON.stringify({
            Id: id,
            Name: name,
            Category: category,
            Price: price
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(res => res.text())
        .then(res => console.log(res))
}


window.onload = displayProduct