/*
 * Animation Library to check for a special tag attached to elements.
 *
 */

function scroll_animation_handler(){
   elems=document.querySelectorAll('[sah]');
   for(i=0;i<elems.length;i++){
      t=elems[i];
      func=t.getAttribute('sah');
      check_func='bottom_leftInViewport';
      if(t.getAttribute('sahop') == "anything")check_func = 'anypartelementInViewport';
      if(window[check_func](t)){
        if(!t.getAttribute('sahst')){  
            t.setAttribute('sahst',1);
        
            window[func](t); //Pass the element to the function.
        }
      }else{
          if(!anypartelementInViewport(t)){
            if(t.getAttribute('sahst')){
              t.removeAttribute('sahst');
          
                if(t.getAttribute('saho')){  //Handle the no longer in view port function.
                    func=t.getAttribute('saho');
                    
                    window[func](this);
                }
            }
          }
      }
   } 
}

function anypartelementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function bottom_leftInViewport(el){
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight)
  );
}

document.addEventListener('DOMContentLoaded', scroll_animation_handler )
window.onscroll=scroll_animation_handler;


