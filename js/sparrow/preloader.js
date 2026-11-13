'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Pre-loader
-----------------------------------------------*/
spUtils.$document.ready(() => {
  const $preloader = $('#preloader');
  $preloader.addClass('loaded');
  setTimeout(() => {
    $preloader.remove();
  }, 800);
});
