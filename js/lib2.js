const products = [
    {
        name: "Hoa Tulip",
        price: "50.000đ",
        image: "../assets/images/tulip.jpg",
        info: "Hoa Tulip là loài hoa kiêu sa, biểu tượng của tình yêu trọn vẹn, niềm vui và sự thanh lịch, thích hợp để trang trí hoặc làm quà tặng ý nghĩa.",
        link: "#"
    },
    {
        name: "Hoa Linh Lan",
        price: "55.000đ",
        image: "../assets/images/linhlan.jpg",
        info: "Hoa Linh Lan hay còn gọi là hoa chuông trắng có hình dáng như những chiếc chuông xinh đẹp lại thêm hương thơm ngọt ngào và quyến rũ,hoa Linh Lan được nhiều người ưa chuộng.",
        link: "#"
    },
    {
        name: "Hoa Mẫu Đơn",
        price: "65.000đ",
        image: "../assets/images/maudon.jpg",
        info: "Hoa mẫu đơn biểu trưng cho sự phú quý và hạnh phúc trong văn hóa Á Đông. Hoa mẫu đơn còn được xem là biểu tượng của sự quyến rũ và vẻ đẹp, là loài hoa được rất nhiều người ưa chuộng.",
        link: "#"
    },
    {
        name: "Hoa Oải Hương",
        price: "60.000đ",
        image: "../assets/images/oaihuong.jpg",
        info: ">Hoa oải hương có màu tím dịu dàng và hương thơm hấp dẫn, mang lại cảm giác dễ chịu và thư thái. Đây là một trong các loài hoa lý tưởng để trồng trong vườn, giúp gia đình thư giãn.",
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