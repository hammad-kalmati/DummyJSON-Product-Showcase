async function getProductData() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    console.log(data);
    renderCards(data.products);
}

getProductData();

function renderCards(products) {
    const productsContainer = document.getElementById('products-container');


    products.map((element) => {
        const { id, title, description, category, price, availabilityStatus,
            brand, discountPercentage, images, minimumOrderQuantity, rating,
            returnPolicy, reviews, shippingInformation, sku, stock, tags,
            thumbnail, warrantyInformation } = element;

        productsContainer.innerHTML += `
            <div class="card">
                <img src="${thumbnail}" alt="Thumbnail">

                <div class="card-content">
                   <div class="title">${title}</div>
                   <div class="brand">${brand}</div>
                   <div class="desc">${description}</div>
                   <div class="price">$${price}</div>
                   <div class="rating">⭐ ${rating}</div>
                </div>

                <button class="btn" onclick = "getSingleProduct(${id})">Add to Cart</button>
            </div>
      `;
    })
}

function getSingleProduct(id) {
    window.location.href = `./productDetails.html?id=${id}`;
}

