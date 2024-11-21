let globalArray;
let cartItems = JSON.parse(localStorage.getItem('cart'));
if (cartItems === null) {
    globalArray = [];
} else {
    globalArray = [...cartItems];
}

const div = document.querySelector("#contain");
const totalAm = document.querySelector("#total-amount");



function render() {
    div.innerHTML = ''; 
    let total = 0;

    globalArray.map((item, index) => {
        total += item.price * item.quantity; 
        div.innerHTML +=` <div id = "cards" class="card border border-white p-5 rounded w-25 " >
        <img width = "100%" src="${item.imageUrl}" alt="${item.name}" class="card-image" />
                <h1 class="text-primary text-center fs-2 mt-2 "> ${item.name}</h1>
                <p class= "fs-4 mt-2 fw-bold text-center">BRAND: ${item.brand}</p>
                <h1 class="text-danger text-center" > $${item.price * item.quantity}</h1>
                <p class = "fs-5 fw-bold mt-2 text-center">QUANTITY:
                    <button class="btn btn-primary" onclick="decBtn(${index})">-</button>
                    ${item.quantity}
                    <button class="btn btn-primary" onclick="incBtn(${index})">+</button>
                </p>
                
  

                <button class="mx-5 btn btn-danger mt-3" onclick="deleteItem(${index})">Delete</button>
            </div>`
    });
    totalAm.innerHTML = `Total Amount: $${total}`;
}

render();

function incBtn(index) {
    globalArray[index].quantity += 1; 
    render()
}

function decBtn(index) {
    if (globalArray[index].quantity <= 1) {
        globalArray.splice(index, 1); 
    } else {
        globalArray[index].quantity -= 1;
    }
    render();
}

$('.order').click(function (e) {

    let button = $(this);
  
    if (!button.hasClass('animate')) {
      button.addClass('animate');
      setTimeout(() => {
        button.removeClass('animate');
      }, 10000);
    }
  
  });

function deleteItem(index) {
    globalArray.splice(index, 1); 
    render();
}



  