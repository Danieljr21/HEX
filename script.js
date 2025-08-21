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
 const closeBtn =document.querySelector('.close-btn');

  cartIcon.addEventListener('click', ()=> cartTab.classlist.add('cart-tab-active'));
// my cart icon click is not working.
closeBtn.addEventListener('click', () => cartTab.classList.remove('cart-tab-active'));

let productList =[];


const initApp = () =>{
 fetch('product.json').then
 (response => response.json()).then
 (data =>{
    productList = data;
 })
}

initApp();