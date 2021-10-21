var _ = require('lodash')
var $ = require('jquery')
var arr = ['hello','webpack']
console.log(_.join(arr, ' '))

$('button').click(function(){
  $('.box').css('background-color', 'red')
})
