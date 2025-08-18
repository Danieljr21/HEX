var database = [
{
    username: "Daniel" ,
    password: "Ella123"
},
];
var newsFeed = [
{
    username: "Godzilla22",
    timeline: "Happy sunday people of God"
},
{
    username: "EllaDan",
    timeline: "life is a crazy journey you have to discover"
},
{
    username:"Prince23",
    timeline: "Welcome to italy"
}
];
var usernameprompt = prompt("What is your username?"); 
var passwordprompt = prompt("What is your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    }
    else {
        alert("sorry, wrong username and password");
    }
}
signIn(usernameprompt, passwordprompt);

