var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #fff";
    crsr.style.backgroundColor = "#fff";
  });
});
// Detect when the user scrolls to page 3
window.addEventListener('scroll', function() {
  var regulationsHeading = document.getElementById('regulations-heading');
  var rect = regulationsHeading.getBoundingClientRect();
  var isVisible = (rect.top >= 0 && rect.bottom <= window.innerHeight);
  
  if (isVisible) {
      gsap.to(regulationsHeading, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" });
  }
});

gsap.to("#nav", {
  backgroundColor:"black",
  duration: 0.5,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
 // Get the page 4 element
 var page4 = document.querySelector('.page3');

 // Add event listener to detect when page 4 is entered
 page4.addEventListener('mouseenter', function() {
     // Remove cursor and cursor blur styles
     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });



gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
var page5 = document.querySelector('.page4');
 page5.addEventListener('mouseenter', function() {

     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });

 var page5 = document.querySelector('.footer');

 page5.addEventListener('mouseenter', function() {
     document.getElementById('cursor').style.display = 'none';
     document.getElementById('cursor-blur').style.display = 'none';
 });

 var page1 = document.querySelector('.page1');
 var page2 = document.querySelector('.page2');
 
 // Add event listeners to detect when the mouse enters these pages
 page1.addEventListener('mouseenter', function() {
     document.getElementById('cursor').style.display = 'block';
     document.getElementById('cursor-blur').style.display = 'block';
 });
 
 page2.addEventListener('mouseenter', function() {
     document.getElementById('cursor').style.display = 'block';
     document.getElementById('cursor-blur').style.display = 'block';
 });