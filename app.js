// ==============================
// Seventeen Bazar - app.js
// ==============================

// Shopping Cart
let cart = [];

// Add Product to Cart
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCartCount();

    alert(name + " added to cart!");
}

// Update Cart Counter
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Search Products
const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(product => {

            let text = product.innerText.toLowerCase();

            if (text.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });
}

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

// Wishlist
let wishlist = [];

function addToWishlist(name) {
    wishlist.push(name);

    alert(name + " added to wishlist!");
}

// Buy Now
function buyNow(name) {
    alert("Proceeding to checkout for: " + name);
}

// Page Loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Seventeen Bazar Loaded Successfully");
});