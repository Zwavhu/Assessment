'use strict'
const PRODUCT_API_LINK = 'http://gendacproficiencytest.azurewebsites.net/API/ProductsAPI'

const editProduct = async function  (){
    const getId = window.location.href.split("/")
    //TODO: Remember to remove paging
    const response = await fetch(PRODUCT_API_LINK + "/" + getId[getId.length-1])
    const data = await response.json() //extract JSON from the http response
    console.log(data)
    document.getElementById('product-Id').value = data.Id
    document.getElementById('product-name').value = data.Name
    document.getElementById('product-category').value = data.Category
    document.getElementById('product-price').value = data.Price
}

const update = function () {
    const getId = window.location.href.split("/")
    const id =  getId[getId.length-1]
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


window.onload = editProduct