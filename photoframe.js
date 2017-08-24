// ==UserScript==
// @name        google photos slower slideshow
// @namespace   piframe
// @include     https://photos.google.com/search/*
// @version     1
// @grant       none
// ==/UserScript==

var url = ["https://photos.google.com/search/_cAF1QipNdTBE~u0jDwUuI6~uEt3UL6kJ7abnQFLtKY_Bill%20Gates/photo/AF1QipMKd7PJbsjmL5GPBWfIg3ZcpSf4UgLKHOrHAIut", "https://photos.google.com/search/_cAF1QipOOtpY9A91keTjZeMVL8KZgl4~uqSJh3Ffw_Jeff%20Bezos/photo/AF1QipOd0Zg0D-Ov0KMS942KOrbgBG-5eOTU_nTdgljw", "https://photos.google.com/search/_cAF1QipPJt3Cka4zwGbjWpcZqyIpRo3I6-WZHH2Y_Mark%20Zuckerberg/photo/AF1QipOUeOWIGGG6wyNuPlvGIYT_ydodoY4nwldI5vym"];
var url1 = ["https://photos.google.com/search/_cAF1QipNdTBE~u0jDwUuI6~uEt3UL6kJ7abnQFLtKY_Bill%20Gates/photo/AF1QipOBo-GegkFOoMhUiCUoR5w1wAJtjfiwQe-z-yw9", "https://photos.google.com/search/_cAF1QipOOtpY9A91keTjZeMVL8KZgl4~uqSJh3Ffw_Jeff%20Bezos/photo/AF1QipMW7_6dgrlfKNZEIFRSy3eQx8BgaUeUujxnFT51", "https://photos.google.com/search/_cAF1QipPJt3Cka4zwGbjWpcZqyIpRo3I6-WZHH2Y_Mark%20Zuckerberg/photo/AF1QipO2fnOzv_M3o66NsaLPH2Wt0_7M41WJqCB_FC78"];
function next_or_prev() {
  window.direction = window.direction || 'forward';
  var next_el = document.getElementsByClassName("oJhm5 gMFQN")[0];
  var prev_el = document.getElementsByClassName("oJhm5 KUdGif")[0];

  if (direction == 'forward') {
    var css_display = window.getComputedStyle(next_el).getPropertyValue('display');
    if (css_display == 'block') {
      next_el.click();
    } else if (css_display == 'none') {
        var content_location = window.location.href;
        for (var i = 0; i < url.length; i++){
           if(url1[i] == content_location && i != url.length-1){
             window.location.replace(url[i+1]);
           }else if (i == url.length-1 && url1[i] == content_location){
            window.location.replace(url[0]);
          }
       }
    }
  } else if (direction == 'backward') {
    var css_display = window.getComputedStyle(prev_el).getPropertyValue('display');
    if (css_display == 'block') {
      prev_el.click();
    } else if (css_display == 'none') {
      var content_location = window.location.href;
        for (var i = url.length-1; i >= 0; i--){
           if(url[i] == content_location && i != 0){
             alert("yes"+i);
             window.location.replace(url[i-1]);
           }else if (i == url.length ){
            window.direction = 'forward';
            next_or_prev();
          }
       }
    }
  }
}
window.setInterval(function(){next_or_prev();}, 1000);
