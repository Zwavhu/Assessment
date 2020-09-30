'use strict'
const PRODUCT_API_LINK = 'https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI'

const readProduct = async function  (){
    const getId = window.location.href.split("/")
    const response = await fetch(PRODUCT_API_LINK + "/" + getId[getId.length-1])
    const data = await response.json() //extract JSON from the http response

    document.getElementById('product-Id').value = data.Id
    document.getElementById('product-name').value = data.Name
    document.getElementById('product-category').value = data.Category
    document.getElementById('product-price').value = data.Price
}

window.onload = readProduct
