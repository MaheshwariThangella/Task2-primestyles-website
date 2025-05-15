const products = [
  { name: "T-Shirt", price: "Rs 1500", image: "images/tshirt .jpg" },
  { name: "Shoes", price: "Rs 8000", image: "images/shoe.jpg" },
  { name: "Watch", price: "Rs 9500", image: "images/watches.jpg" },
  { name: "Backpack", price: "Rs 5500", image: "images/backpack .jpg" }
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button>Add to Cart</button>
  `;
  
  productList.appendChild(div);
}); 