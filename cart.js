// Add functionality to each btn accross nine files - one by one
for(let i = 1; i <= 9; i++){
    let btn = document.querySelector(`#btn-${i}`);
    if(btn){
        btn.addEventListener("click", function(){
            alert("Added to cart");

            let product = {
                name: document.querySelector(`#btn-${i}`).getAttribute("data-name"),
                price: parseInt(document.querySelector(`#btn-${i}`).getAttribute("data-price")),
                quantity: 1
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            let existingProduct = cart.find(item => item.name === product.name);
            if(existingProduct){
                existingProduct.quantity += 1;
            }
            else{
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    }
};

// Create function to update cart items
function renderCart(){
    let myCart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsCont = document.querySelector("#cart-items");
    let totalPriceEle = document.querySelector("#total-price");

    cartItemsCont.innerHTML = "";

    let totalPrice = 0;

    myCart.forEach((item, index) => {
        totalPrice += item.price * item.quantity;

        let itemEle = document.createElement("div");
        itemEle.classList.add("cart-item");
        itemEle.innerHTML = `<div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>Price: ₹${item.price}</p>
                        <p>Quantity: ${item.quantity}</p>
                    </div>
                    <div class="cart-item-actions">
                    <button class="remove-item-btn" data-index="${index}">Remove</button>
                    <button class="place-order-btn" data-index="${index}">Place Order</button>
                    </div>`

        cartItemsCont.appendChild(itemEle);

        // Add event listener to "Place Order" button to open checkout.html
        let placeOrderBtn = itemEle.querySelector(".place-order-btn");
        placeOrderBtn.addEventListener("click", function(){
        window.location.href = "checkout.html";
    });

    });

    totalPriceEle.textContent = totalPrice;
};

// Handle removing of an item from cart
let removeItem = document.querySelector("#cart-items")
removeItem.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove-item-btn")){
        let index = e.target.dataset.index;
        let myCart = JSON.parse(localStorage.getItem("cart")) || [];
        myCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(myCart));
        renderCart();
    }
});

// Removing all items from the cart
let clearItems = document.querySelector("#clear-cart")
clearItems.addEventListener("click", () => {
    localStorage.removeItem("cart");
    renderCart();
});

renderCart();