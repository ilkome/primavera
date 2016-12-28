/* global $, document, window, google */
import $ from 'jquery'

const scrollTo = (element) => {
  $('html, body').stop().animate({
    scrollTop: $($(element).attr('href')).offset().top
  }, 600)
}

const $parentBlock = $('.contacts-pop')
const $thanksBlock = $('.js-contacts-thanks')
const $formBlock = $('.js-contacts-form')
const $showForm = $('.js-show-contacts-form')
const $showThanks = $('.js-show-contacts-thanks')
const $closeForm = $('.js-close-contacts')

// open contacts form
$showForm.on('click', function Open(e) {
  e.preventDefault()
  $parentBlock.show()
  $formBlock.show()
  scrollTo(this)
})

// open contacts thanks
$showThanks.on('click', (e) => {
  e.preventDefault()
  $parentBlock.height($parentBlock.height())
  $formBlock.fadeOut()
  $thanksBlock.fadeIn()
})

$closeForm.on('click', (e) => {
  e.preventDefault()
  $parentBlock.slideUp()
  $thanksBlock.fadeOut()
  $formBlock.hide()
})
