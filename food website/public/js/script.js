let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

const firebaseConfig = {
  apiKey: "AIzaSyBNAWRHKWo7qQE23uWSG_0TtC8qDioNJVA",
  authDomain: "database-c34c0.firebaseapp.com",
  databaseURL: "https://database-c34c0-default-rtdb.firebaseio.com",
  projectId: "database-c34c0",
  storageBucket: "database-c34c0.appspot.com",
  messagingSenderId: "458955027538",
  appId: "1:458955027538:web:f3918c762d467046f99b8b"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);
//reference to database
var orderformDB=firebase.database().ref('orderform');
document.getElementById('orderform').addEventListener("submit",submitform);


function  submitform(e)
{
  e.preventDefault();
  var name=getElementVal('name');
  var num=getElementVal('num');
  var ord=getElementVal('ord');
  var food=getElementVal('food');
  var bal=getElementVal('bal');
  var add=getElementVal('add');
  var msg=getElementVal('msg');
  console.log(name,num,ord,food,bal,add,msg);
  saveMessage(name,num,ord,food,bal,add,msg);
  //enable alert
  document.querySelector('.alert').style.display='block';
  //remove alert
  setTimeout(()=>{
      document.querySelector('.alert').style.display='none';
  },3000);
}
const saveMessage=(name,num,ord,food,bal,add,msg)=>{
  var neworderform=orderformDB.push();
  neworderform.set({
      name:name,
      num:num,
      ord:ord,
      food:food,
      bal:bal,
      add:add,
      msg:msg,
  });
};


const getElementVal=(id)=>{
     return document.getElementById(id).value;

}