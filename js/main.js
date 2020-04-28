function openNav() {
  document.getElementById("sidebar").style.width = "21%";
  document.getElementById("header").style.marginLeft = "21%";
  document.getElementById("open").style.visibility="hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.getElementById("open").style.visibility="visible";

}

function fcommitee()
{
  document.getElementById("fcom").style.display="block";
  document.getElementById("acouncil").style.display="none";

}
function accouncil(){
  document.getElementById("acouncil").style.display="block";
  document.getElementById("fcom").style.display="none";

}

function about()
{
  document.getElementById("load").style.display="block";
  document.getElementById("header").style.opacity="0.7";
  var delay = 2000; 
 setTimeout(function(){
  window.location = "about.html";
 },delay);
}

function home(){
  document.getElementById("load").style.display="block";
  document.getElementById("header").style.opacity="0.7";
  var delay = 2000; 
 setTimeout(function(){
  window.location = "index.html";
 },delay);
}

function contact()
{
  document.getElementById("load").style.display="block";
  document.getElementById("header").style.opacity="0.7";
  var delay=2000;
  setTimeout(function(){
    window.location="contact.html";
  },delay);
}

function academics(){
  document.getElementById("load").style.display="block";
  document.getElementById("header").style.opacity="0.7";
  var delay=2000;
  setTimeout(function(){
    window.location="academics.html";
  },delay);
}

function admin(){
  document.getElementById("load").style.display="block";
  document.getElementById("header").style.opacity="0.7";
  var delay=2000;
  setTimeout(function(){
    window.location="admin.html";
  },delay);
}