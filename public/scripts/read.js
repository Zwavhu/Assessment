'use strict'
const PRODUCT_API_LINK = 'http://gendacproficiencytest.azurewebsites.net/API/ProductsAPI'

const readProduct = async function  (){
    const getId = window.location.href.split("/")
    //TODO: Remember to remove paging
    const response = await fetch(PRODUCT_API_LINK + "/" + getId[getId.length-1])
    const data = await response.json() //extract JSON from the http response
    console.log(data)

}

window.onload = readProduct
