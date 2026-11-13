'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Pre-loader
-----------------------------------------------*/
$.holdReady(true);

// Release holdReady when first section images load, or after 2s max to prevent
// stalling on browsers (e.g. Firefox) where imagesLoaded may not fire.
var holdReleased = false;
function releaseHold() {
  if (!holdReleased) {
    holdReleased = true;
    $.holdReady(false);
  }
}
setTimeout(releaseHold, 2000);
$($('main section')[0]).imagesLoaded({ background: '.bg-holder' }, releaseHold);

spUtils.$document.ready(() => {
  const $preloader = $('#preloader');
  $preloader.addClass('loaded');
  setTimeout(() => {
    $preloader.remove();
  }, 800);
});
