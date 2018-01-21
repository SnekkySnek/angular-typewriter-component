(function () {

    angular.module('client')
        .component('typewriter', {
            templateUrl: 'client/components/typewriter/typewriter.html',
            controller: 'typeController as ctrl',
            bindings: {
                strings: '<',
                time: '<',

            }
        })

    angular.module('client')
        .controller('typeController', TypeController)

    TypeController.$inject = ['$log', '$scope', '$timeout']

    function TypeController($log, $scope, $timeout) {
        let vm = this
        vm.loopNum = 0
        vm.userTime
        vm.text
        vm.isDeleting
        vm.$onInit = init


        function init() {
            vm.userTime = parseInt(vm.time, 10) || 2000
            vm.text = ''
            typewriter()
        }

        vm.tick = function () {
            let i = vm.loopNum % vm.strings.length
            let userText = vm.strings[i]


            if (vm.isDeleting) {
                vm.text = userText.substring(0, vm.text.length - 1)
            } else {
                vm.text = userText.substring(0, vm.text.length + 1)
            }
            vm.typedText = vm.text

            let delta = 350 - Math.random() * 100


            if (vm.isDeleting) { delta /= 2 }
            if (!vm.isDeleting && vm.text === userText) {
                delta = vm.userTime
                vm.isDeleting = true
            } else if (vm.isDeleting && vm.text === '') {
                vm.isDeleting = false
                vm.loopNum++
                delta = 1500
            }

            $timeout(function () {
                vm.tick()
            }, delta)
            // setTimeout(function () {

            //     vm.tick()

            // }, delta)


        }





        function typewriter() {
            let strings = vm.strings
            for (let i = 0; i < strings.length; i++) {
                if (strings) {
                    vm.tick()
                    $log.log(i)
                }
            }
        }

    }

})()    