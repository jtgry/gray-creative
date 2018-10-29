function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
 
function addClass(ele,cls) {  
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}
 
function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {      
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
    ele.className=ele.className.replace(reg,' ');  
  }
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('page').className = "load";
  
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload",
    load_delay: 200
  });
  // Image Process
  var imgHires = document.getElementsByClassName('image-hires');
  for (var i=0; i<imgHires.length; i++) {
      if(imgHires[i].getAttribute('data-style')) {
         imgHires[i].setAttribute('style',imgHires[i].getAttribute('data-style'));
         imgHires[i].removeAttribute('data-style'); //use only if you need to remove data-src attribute after setting src
         addClass(imgHires[i], 'image-loaded');
      }
  }
  // Image Process

});