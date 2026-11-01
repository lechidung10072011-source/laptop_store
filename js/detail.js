

const API_URL = "https://raw.githubusercontent.com/lechidung10072011-source/laptop/refs/heads/main/fake_api";

async function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    if (!productId) return;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const laptop = data.laptops.find(item => item.id === productId);

        if (!laptop) return;

        const nameElement = document.getElementById("laptop-name") || document.getElementById("detail-name");
        const priceElement = document.getElementById("laptop-price") || document.getElementById("detail-price");

        if (nameElement) nameElement.innerText = laptop.name;
        if (priceElement) priceElement.innerText = Number(laptop.price).toLocaleString("vi-VN") + " VNĐ";

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", loadProductDetail);
