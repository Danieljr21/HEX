// var database = [
// {
//     username: "Daniel" ,
//     password: "Ella123"
// },
// ];
// var newsFeed = [
// {
//     username: "Godzilla22",
//     timeline: "Happy sunday people of God"
// },
// {
//     username: "EllaDan",
//     timeline: "life is a crazy journey you have to discover"
// },
// {
//     username:"Prince23",
//     timeline: "Welcome to italy"
// }
// ];
// var usernameprompt = prompt("What is your username?"); 
// var passwordprompt = prompt("What is your password?");

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsFeed);
//     }
//     else {
//         alert("sorry, wrong username and password");
//     }
// }
// signIn(usernameprompt, passwordprompt);
// // dynamic year
// document.getElementById('year')?.append(new Date().getFullYear());

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});


const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');

cartIcon.addEventListener('click', () => 
    cartTab.classList.add('cart-tab-active')
);

closeBtn.addEventListener('click', () => 
    cartTab.classList.remove('cart-tab-active')
);






let productList = [];


const cardContainer = document.querySelector('.wrapper.p-top.flex.gap-3'); 

const showCards = () => {
  if (!cardContainer) return; 
  cardContainer.innerHTML = '';

  productList.forEach(product => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    orderCard.innerHTML = `
      <div class="card-image">
        <img src="asset/indomie.jpg">
      </div>
      <h4>double beef burger</h4>
      <h4 class="price">N5000</h4>
      <a href="#" class="btn">Add to cart</a>
    `;

    cardContainer.appendChild(orderCard);
  });
};

const initApp = () => {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      productList = data;
      showCards();
    });
};

initApp();



// let productList = [];

// const showCards = () =>{

//   productList.forEach(product =>{
   
//     const orderCard = document.createElement('div');
//     orderCard.classList.add('order-card');

//     orderCard.innerHTML ='
//     <div class="card-image">
//               <img src="asset/indomie.jpg">
//             </div>
//             <h4>double beef burger</h4>
//             <h4 class="price">N5000</h4>
//             <a href="#" class="btn">Add to cart</a>
          
//     '

//   })
// }

// const initApp = () => {
//     fetch('products.json')
//         .then(response => response.json())
//         .then(data => {
//             productList = data;
//             showCards();
//         });
// }

// initApp();
