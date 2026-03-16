const products = [

{
id:1,
name:"Smart Watch",
price:199
},

{
id:2,
name:"Wireless Headphones",
price:149
},

{
id:3,
name:"Gaming Mouse",
price:59
}

]

const productList = document.getElementById("product-list")

if(productList){

products.forEach(p=>{

const div = document.createElement("div")

div.innerHTML = `

<h3>${p.name}</h3>

<p>$${p.price}</p >

<button onclick="addToCart(${p.id})">
Add to Cart
</button>

`

productList.appendChild(div)

})

}

function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push(id)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}