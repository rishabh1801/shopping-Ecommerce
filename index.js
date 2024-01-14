let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");




function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}


function blog() {

   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display="none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 

function showCard(img){
   let newImg = document.getElementById("cartImg");
   newImg.src=img.src;
   document.querySelector(".fullPage").style.display="flex";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

 



}
 
function addToCart(){
   alert("Added To Cart");
   location.reload();
}

document.getElementById("home").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      home();
      console.log("in")
   }
})

document.getElementById("shop").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      shop();
      console.log("in")
   }
})

document.getElementById("blog").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      blog();
      console.log("in")
   }
})

document.getElementById("about").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      about();
      console.log("in")
   }
})

document.getElementById("contact").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      contact();
      console.log("in")
   }
})

document.getElementById("item1").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      add(item1);
      console.log("in")
   }
})

document.getElementById("item2").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      showCard(this);
      console.log("in")
   }
})

document.getElementById("item1").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      showCard(this);
      console.log("in")
   }
})

document.getElementById("girl1").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      showCard(this);
      console.log("in")
   }
})

document.getElementById("girl2").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      showCard(this);
      console.log("in")
   }
})

document.getElementById("girl3").addEventListener("keydown",function(event){
   console.log("dfhfthjxftxfthxft")
   if (event.key=="Enter"){
      showCard(this);
      console.log("in")
   }
})