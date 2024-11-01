const mobileBrands = [
    { id: 1, category: "Mobile", name: "iPhone 13", brand: "Apple", price: 1000, stock: 25, rating: 4.8, isAvailable: true, imageUrl: "https://images.priceoye.pk/apple-iphone-13-pakistan-priceoye-2nziq-500x500.webp" },
    { id: 2, category: "Mobile", name: "Galaxy S21", brand: "Samsung", price: 950, stock: 30, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/samsung-galaxy-s21-pakistan-priceoye-lce53-500x500.webp" },
    { id: 3, category: "Mobile", name: "OnePlus 9", brand: "OnePlus", price: 700, stock: 20, rating: 4.5, isAvailable: true, imageUrl: "https://images.priceoye.pk/oneplus-9-pakistan-priceoye-t782w-500x500.webp" },
    { id: 4, category: "Mobile", name: "Pixel 5", brand: "Google", price: 800, stock: 15, rating: 4.6, isAvailable: true, imageUrl: "https://images.priceoye.pk/google-pixel-5-pakistan-priceoye-vdylm-500x500.webp" },
    { id: 5, category: "Mobile", name: "Xperia 5", brand: "Sony", price: 750, stock: 18, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/sony-xperia-5-iii-pakistan-priceoye-3fipt-500x500.webp" },
    { id: 6, category: "Mobile", name: "Redmi Note 10", brand: "Xiaomi", price: 300, stock: 45, rating: 4.4, isAvailable: true, imageUrl: "https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-n6iba-500x500.webp" },
    { id: 7, category: "Mobile", name: "Nokia G20", brand: "Nokia", price: 250, stock: 40, rating: 4.2, isAvailable: true, imageUrl: "https://images.priceoye.pk/nokia-g20-pakistan-priceoye-pb8fu-500x500.webp" },
    { id: 8, category: "Mobile", name: "Oppo A54", brand: "Oppo", price: 300, stock: 35, rating: 4.3, isAvailable: true, imageUrl: "https://images.priceoye.pk/oppo-a54-pakistan-priceoye-mt05a-500x500.webp" },
    { id: 9, category: "Mobile", name: "Realme 8", brand: "Realme", price: 280, stock: 25, rating: 4.4, isAvailable: true, imageUrl: "https://images.priceoye.pk/realme-8-pakistan-priceoye-s8vn1-500x500.webp" },
    { id: 10, category: "Mobile", name: "Vivo Y20", brand: "Vivo", price: 230, stock: 40, rating: 4.1, isAvailable: true, imageUrl: "https://images.priceoye.pk/vivo-y20-pakistan-priceoye-5g136-500x500.webp" },
    { id: 11, category: "Mobile", name: "Huawei P30", brand: "Huawei", price: 600, stock: 10, rating: 4.5, isAvailable: true, imageUrl: "https://images.priceoye.pk/huawei-p30-pakistan-priceoye-0e8td-500x500.webp" },
    { id: 12, category: "Mobile", name: "Galaxy Z Flip", brand: "Samsung", price: 1200, stock: 12, rating: 4.8, isAvailable: true, imageUrl: "https://images.priceoye.pk/z-flip-6-pakistan-priceoye-7zv0s-500x500.webp" },
    { id: 13, category: "Mobile", name: "iPhone SE", brand: "Apple", price: 400, stock: 30, rating: 4.6, isAvailable: true, imageUrl: "https://images.priceoye.pk/apple-i-phone-se-pakistan-priceoye-7uws3-500x500.webp" },
    { id: 14, category: "Mobile", name: "Pixel 4a", brand: "Google", price: 350, stock: 20, rating: 4.5, isAvailable: true, imageUrl: "https://images.priceoye.pk/google-pixel-4a-pakistan-priceoye-wk91b-500x500.webp" },
    { id: 15, category: "Mobile", name: "Moto G Power", brand: "Motorola", price: 250, stock: 50, rating: 4.3, isAvailable: true, imageUrl: "https://images.priceoye.pk/motorola-moto-g-power-pakistan-priceoye-lr1ar-500x500.webp" },
    { id: 16, category: "Mobile", name: "Asus ROG Phone 5", brand: "Asus", price: 999, stock: 10, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/asus-rog-phone-5-pakistan-priceoye-eua96-500x500.webp" },
    { id: 17, category: "Mobile", name: "Galaxy Note 20", brand: "Samsung", price: 1000, stock: 8, rating: 4.6, isAvailable: true, imageUrl: "https://images.priceoye.pk/samsung-galaxy-note-20-pakistan-priceoye-zo3gz-500x500.webp" },
    { id: 18, category: "Mobile", name: "Xiaomi Mi 11", brand: "Xiaomi", price: 650, stock: 15, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/xiaomi-mi-11-pakistan-priceoye-qaog3-500x500.webp" },
    { id: 19, category: "Mobile", name: "LG Velvet", brand: "LG", price: 700, stock: 20, rating: 4.4, isAvailable: true, imageUrl: "https://images.priceoye.pk/velvet-5g-pakistan-priceoye-38ifx-500x500.webp" },
    { id: 20, category: "Mobile", name: "Nokia 7.2", brand: "Nokia", price: 300, stock: 22, rating: 4.3, isAvailable: true, imageUrl: "https://images.priceoye.pk/nokia-7-2-pakistan-priceoye-omacp-500x500.webp" },
    { id: 21, category: "Mobile", name: "Honor 20", brand: "Honor", price: 500, stock: 30, rating: 4.5, isAvailable: true, imageUrl: "https://images.priceoye.pk/huawei-honor-20-pakistan-priceoye-12wul-500x500.webp" },
    { id: 22, category: "Mobile", name: "OnePlus Nord", brand: "OnePlus", price: 450, stock: 25, rating: 4.6, isAvailable: true, imageUrl: "https://images.priceoye.pk/oneplus-nord-pakistan-priceoye-0jkll-500x500.webp" },
    { id: 23, category: "Mobile", name: "Sony Xperia 1 II", brand: "Sony", price: 1100, stock: 10, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/sony-xperia-1-ii-pakistan-priceoye-n8lqv-500x500.webp" },
    { id: 24, category: "Mobile", name: "Galaxy A52", brand: "Samsung", price: 500, stock: 40, rating: 4.6, isAvailable: true, imageUrl: "https://images.priceoye.pk/samsung-galaxy-a52-pakistan-priceoye-vfqkp-500x500.webp" },
    { id: 25, category: "Mobile", name: "Oppo Find X3", brand: "Oppo", price: 950, stock: 15, rating: 4.7, isAvailable: true, imageUrl: "https://images.priceoye.pk/oppo-find-x3-pro-5g-pakistan-priceoye-up2h6-500x500.webp" },
  ];
let cartItem;
const checkDataFromLocalStorage = JSON.parse(localStorage.getItem("cart"))
if(checkDataFromLocalStorage===null){
    cartItem = []
}
else{
    cartItem =[checkDataFromLocalStorage]
}

const div = document.querySelector("#container")


mobileBrands.map((item , index)=>{
    div.innerHTML +=` <div id = "cards" class="card border border-white p-5 rounded w-25 " >
    <img width = "100%" src="${item.imageUrl}" alt="${item.name}" class="card-image" />
            <h1 class="text-primary text-center fs-2 mt-2 "> ${item.name}</h1>
            <p class= "fs-4 mt-2 fw-bold text-center">BRAND: ${item.brand}</p>
            <h1 class="text-danger text-center" > $${item.price}</h1>
            <button class="btn btn-primary mt-2"onclick="addToCart(${index})">ADD TO CART</button>
        </div>`
})


function addToCart(index){
    const checkIndex = cartItem.indexOf(mobileBrands[index])
    if(checkIndex === -1){
        mobileBrands[index].quantity= 1;
        cartItem.push(mobileBrands[index])
    }
    else{
        cartItem[checkIndex].quantity +=1
    }
    console.log(cartItem);
    Swal.fire({
        title: "Good job!",
        text: "Item added to cart successfully!",
        icon: "success",
      });
    

}

function checkout(){
    console.log("checkout");
    const convertArrToStr = JSON.stringify(cartItem);
    localStorage.setItem("cart" , convertArrToStr);
    window.location = "cart.html"
    
}
