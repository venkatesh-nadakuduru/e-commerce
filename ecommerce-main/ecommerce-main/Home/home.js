let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        console.log(products);
        return products;

    } catch (error) {
        console.log("data does not fetch");
    }
}

async function displayProduct() {
    const product_page = document.getElementById("product_page");
    const products = await fetchProducts();
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product_grid";
        productElement.innerHTML = `
        <div class="product-card">
            <img src="${product.image}" alt="Product 1">
            <h3>${product.title}</h3>
            <p>Rs.${product.price}</p>
            <button onclick="buyBtn('${product.title}','${product.image}','${product.price}','${product.id}')">Add to Cart</button>
        </div>
        `;
        product_page.appendChild(productElement);
    });
}

function buyBtn(title, image, price, id) {
    console.log(title, image, price, id);

    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
        existingItem.quality += 1;
    } else {
        const purchasedItem = {
            id: id,
            title: title,
            image: image,
            price: price,
            quality: 1
        };
        cartItems.push(purchasedItem);
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
}

document.querySelector('.fa-shopping-cart').addEventListener('click', function() {
    window.location.href = '/cart/cart.html';
});

displayProduct();


document.querySelector('.btn').addEventListener('click', function() {
    // Clear local storage
    localStorage.removeItem('cartItems');
    // Redirect to signup.html
    window.location.href = '/signup/index.html';
});
