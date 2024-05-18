let cartItems = JSON.parse(localStorage.getItem('cartItems'));
console.log(cartItems);


const updateCart = ()=>{
    let cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = ``;
    cartItems.forEach( items =>{
        let div = document.createElement('div');
        div.className = "cartItems";
        div.innerHTML = `
        <p id="item">${items.title}</p>
        <img src="${items.image}" alt="">
        <div id="qty">
                <button onclick="decQty(${items.id})">-</button>
                <span id=qtyValue>${items.quality}</span>
                <button onclick="incQty(${items.id})">+</button>
            </div>
            <p>${items.quality * items.price}</p>
            <button class="btn1" onclick="buy()">Buy Now</button>
            <button class="btn1" onclick="deleteCart(${items.id})">Remove</button>
        `
        cartContainer.appendChild(div);
    })
}
updateCart();

   
function deleteCart(id){
    let updatedCartItems = [];
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id != id) {
            updatedCartItems.push(cartItems[i]);
        }
    }    
    cartItems = updatedCartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCart();
}
function buy(){
    alert("your product is delivery very soon");
}


function incQty(id) {
    cartItems.map((items) => {
        if (items.id == id) {
            items.quality = items.quality + 1;
        }
    })
    updateCart();
}

function decQty(id) {
    cartItems.map((items) => {
        if (items.id == id) {
            if(items.quality >1){
            items.quality = items.quality - 1;
            }
        }
    })
    updateCart();
}


document.querySelector('.navigate').addEventListener('click', function() {
    window.location.href = '/home/home.html'; // Change the URL to your cart page
});


document.querySelector('.btn').addEventListener('click', function() {
    // Clear local storage
    localStorage.removeItem('cartItems');
    // Redirect to signup.html
    window.location.href = '/signup/index.html';
});
