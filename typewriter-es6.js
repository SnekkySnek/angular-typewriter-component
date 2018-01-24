// (function () {

//     angular.module('client')
//         .component('typewriter', {
//             templateUrl: 'client/components/typewriter/typewriter.html',
//             controller: 'type2Controller as ctrl',
//             bindings: {
//                 strings: '<',
//                 time: '<',
//                 typings: '&' 

//             }
//         })

//     angular.module('client')
//         .controller('type2Controller', TypeController)

//     TypeController.$inject = ['$log', '$scope', '$timeout']

//     function TypeController($log, $scope, $timeout) {
//         let vm = this
//         vm.typedText
//         // vm.tick
//         // let loopNum
//         // let time
//         // let text
//         // let isDeleting
//         vm.$onInit = init


//         function init() {
//             // loopNum = 0
//             // time = parseInt(vm.time, 10) || 2000
//             // text = ''
//             // isDeleting = false
//             typewriter()
//         }

//         class TypeOut {
//             constructor(words, time) {
//                 this.words = words
//                 this.time = parseInt(time, 10) || 5000
//                 this.loopNum = 0
//                 this.text = ''
//                 this.tick()
//                 this.isDeleting = false
//             }

//             tick() {
//                 let i = this.loopNum % this.words.length
//                 let userText = this.words[i]


//                 if (this.isDeleting) {
//                     this.text = userText.substring(0, this.text.length - 1)
//                 } else {
//                     this.text = userText.substring(0, this.text.length + 1)
//                 }
//                 vm.typings = '<span class="wrap">' + this.text + '</span>'

//                 let delta = 500 - Math.random() * 100
//                 let that = this

//                 if (this.isDeleting) { delta /= 2 }
//                 if (!this.isDeleting && this.text === userText) {
//                     delta = this.time
//                     this.isDeleting = true
//                 } else if (this.isDeleting && this.text === '') {
//                     this.isDeleting = false
//                     this.loopNum++
//                     delta = 500
//                 }

//                 // $timeout(function () {
//                 //     that.tick()
//                 // }, delta)

//                 setTimeout(function () {
//                     $scope.$apply(function () {
//                         that.tick()
//                     })
//                 }, delta)



//             }
//         }






//         function typewriter() {
//             let strings = vm.strings
//             let time = vm.time
//             for (let i = 0; i < strings.length; i++) {
//                 if (strings) {
//                     new TypeOut(strings, time)
//                     $log.log(i)
//                 }
//             }
//         }

//     }

// })()