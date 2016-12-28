/* global document */
import $ from 'jquery'
import ScrollMagic from 'scrollmagic'
// import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// DOM ready
$(document).ready(() => {
  const controller = new ScrollMagic.Controller()

  // fade-in animation
  $('.c-anim-fade-in').each((index, element) => {
    new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 0.9,
      reverse: false
    })
    .setClassToggle(element, 'c-anim-fade-in-complite')
    .addTo(controller)
  })

  // header
  new ScrollMagic.Scene({
    triggerElement: '.l-main',
    triggerHook: 0,
    reverse: true
  })
  // .addIndicators()
  .setClassToggle('.header-wrap', 'header-hide')
  .addTo(controller)

  new ScrollMagic.Scene({
    triggerElement: '.l-main',
    triggerHook: 0,
    offset: 10,
    reverse: true
  })
  // .addIndicators()
  .removeClassToggle(true)
  .setClassToggle('.header-wrap', 'header-fixed')
  .addTo(controller)
})
