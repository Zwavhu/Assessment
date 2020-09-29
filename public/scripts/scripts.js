'use strict'

const PRODUCT_API_LINK = 'http://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/'

const displayButton = document.getElementById('display-list-btn')
const createButton = document.getElementById('create-product-btn')
const deleteButton = document.getElementById('delete-product-btn')

const read = async () => {
    const response = await fetch(PRODUCT_API_LINK)
    const data = await response.json() //extract JSON from the http response

    // Obtain all Json objects
    data.forEach((product) => {
        // Product attributes
        var productCategory = product.Category
        var productID = product.Id
        var productName = product.Name
        var productPrice = product.Price
        // console.log(productName)

        var node = document.createElement("LI");
        var textnode = document.createTextNode('Name: '+productName + ', Categ: '+productCategory
        +' Id: '+productID+' Price: '+ productPrice);
        node.appendChild(textnode);
        document.getElementById("product-list").appendChild(node);

    })

}

// const createProduct = async () => {
//
//      try{
//          let response = await fetch(PRODUCT_API_LINK, {
//              method: 'POST',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              body: {
//                  Id: 10004,
//                  Name: 'ProductXYZ',
//                  Category: 'CategoryA',
//                  Price: 200.0 ,
//              }
//          });
//          return await response.json();
//
//      }catch (err){
//          console.log(err)
//      }
//
//     // do something with myJson
// }


const createProduct = function (){

    const Id =  document.getElementById('product-Id').value
    const name =  document.getElementById('product-name').value
    const category =  document.getElementById('product-category').value
    const price =  document.getElementById('product-price').value
    // POST request using fetch()
    fetch(PRODUCT_API_LINK, {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            Id: Id,
            Name: name,
            Category: category,
            Price: price
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        // Displaying results to console
        .then(json => console.log(json));
}




displayButton.addEventListener('click', read)
createButton.addEventListener('click', createProduct)
deleteButton.addEventListener('click', deleteProduct)


// window.onload =  displayProductList()
