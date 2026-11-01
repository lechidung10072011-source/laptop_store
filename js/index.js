
const API_URL ="https://raw.githubusercontent.com/lechidung10072011-source/laptop/refs/heads/main/fake_api";

async function fetchProducts() {
    const container = document.getElementById("product-container");
    if (!container) return;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        container.innerHTML = "";

        data.laptops.forEach(function (laptop) {
            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img
                            src="${laptop.image}"
                            class="card-img-top"
                            alt="${laptop.name}"
                            style="height: 200px; object-fit: contain;"
                            onerror="this.onerror=null; this.src='https://placehold.co';"
                        >
                        <div class="card-body">
                            <h5 class="card-title">${laptop.name}</h5>
                            <p class="card-text">
                                ${Number(laptop.price).toLocaleString("vi-VN")} VNĐ
                            </p>
                            <a href="detail.html?id=${laptop.id}" class="btn btn-primary"> Xem giá</a>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.error("Lỗi tải laptop:", error);
        container.innerHTML = "<p>Không tải được danh sách laptop!</p>";
    }
}

fetchProducts();

