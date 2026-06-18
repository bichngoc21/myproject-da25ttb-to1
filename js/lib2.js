const products = [
    {
        name: "Hoa Tulip",
        price: "50.000đ",
        image: "../assets/images/tulip.jpg",
        info: "Hoa Tulip là loài hoa kiêu sa, biểu tượng của tình yêu trọn vẹn, niềm vui và sự thanh lịch, thích hợp để trang trí hoặc làm quà tặng ý nghĩa.",
        link: "#"
    },
    {
        name: "Hoa",
        price: "55.000đ",
        image: "../assets/images/linhlan.jpg",
        info: "Hoa Linh Lan hay còn gọi là hoa chuông trắng có hình dáng như những chiếc chuông xinh đẹp lại thêm hương thơm ngọt ngào và quyến rũ,hoa Linh Lan được nhiều người ưa chuộng.",
        link: "#"
    },
    
]

function createItem(obj) {
    const productList = document.getElementById("product-list")
    productList.innerHTML += `
    <div class ="col product-item">
				<div class="card ">
					<div class=" ratio ratio-1x1 product-image">
						<img src= "${obj.image}" alt="${obj.name}" class="card-img-top object-fit-cover">
					</div>
					<!-- info product -->
					<div class="card-body product-info">
						<h4 class="card title">${obj.name}</h4>
						<h6 class="text-danger">${obj.price}</h6>
						<p>${obj.info}</p>
						<a href="${obj.link}" class="btn btn-primary">Còn hàng</a>
					</div>
	            </div>
    </div>`;
}

function AllItem (objArray) {
    let i = 0;
    while (i<objArray.length) {
        createItem(objArray[i]);
        i++;
    }
}