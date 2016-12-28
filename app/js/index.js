/* global document, window, google */
import Swiper from 'swiper'
import $ from 'jquery'
import lightbox from 'lightbox2'
import './parallax'
import './map'
import '../atoms/contacts/contacts'


$(document).ready(() => {
  const mySwiper = new Swiper('.js-slider', {
    autoHeight: true,
    direction: 'horizontal',
    loop: false,
    pagination: false,
    prevButton: '.js-prev',
    nextButton: '.js-next'
  })

  lightbox.option({
    showImageNumberLabel: false
  })
})

$(window).on('load', () => {
  $('.js-loader').fadeOut()
})
