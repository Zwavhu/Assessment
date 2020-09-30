'use strict'

const PRODUCT_API_LINK = 'https://gendacproficiencytest.azurewebsites.net/API/ProductsAPI/'

const deleteButton = document.getElementById('delete-product-btn')

const readAll = async () => {
    const response = await fetch(PRODUCT_API_LINK)
    const data = await response.json() //extract JSON from the http response

    const productRows = document.getElementById('tableBody')
    productRows.innerHTML = ''
    // Obtain all Json objects
    data.forEach((product) => {
        // Product attributes
        var productCategory = product.Category
        var productID = product.Id
        var productName = product.Name
        var productPrice = product.Price

        const tr = document.createElement('tr')
        const th = document.createElement('th')
        th.scope = 'row'
        const Id = document.createTextNode(productID)
        th.appendChild(Id)
        tr.appendChild(th)

        // Appending Product Name
        const td3 = document.createElement('td')
        const name = document.createTextNode(productName)
        td3.appendChild(name)
        tr.appendChild(td3)

        // Appending product category
        const td1 = document.createElement('td')
        const category = document.createTextNode(productCategory)
        td1.appendChild(category)
        tr.appendChild(td1)

        // Appending product price
        const td2 = document.createElement('td')
        const price = document.createTextNode('R' + `${productPrice}`)
        td2.appendChild(price)
        tr.appendChild(td2)

        const form = document.createElement('form')

        // creating link for reading
        const td4 = document.createElement('td')
        const link = document.createElement('a')
        const bText = document.createTextNode('Read')
        link.appendChild(bText)
        link.href="/read/"+productID
        form.appendChild(link)

        // creating button for deleting products
        const td5 = document.createElement('td')
        const button2 = document.createElement('button')
        button2.class = 'btn'
        const bText2 = document.createTextNode('Delete')
        button2.appendChild(bText2)
        button2.onclick = function (){
            deleteProduct(productID)
        }
        form.appendChild(button2)

        // creating link for editing
        const td6 = document.createElement('td')
        // const button = document.createElement('button')
        // button.class = 'btn'
        const editLink = document.createElement('a')
        const bText4 = document.createTextNode('Edit')
        editLink.appendChild(bText4)
        editLink.href="/edit/"+productID
        form.appendChild(editLink)

        // Append form
        td6.appendChild(form)
        td5.appendChild(td6)
        td4.appendChild(td5)
        tr.appendChild(td4)
        // Append to debtRows
        productRows.appendChild(tr)

    })
}

const deleteProduct = function (id) {
    fetch( PRODUCT_API_LINK + id, {
        method: 'DELETE'
    })
    .then(res => res.text())
    .then(res => console.log(res))
    confirm("Are you sure you want to delete?")
}

window.onload = readAll
deleteButton.addEventListener('click', deleteProduct)
