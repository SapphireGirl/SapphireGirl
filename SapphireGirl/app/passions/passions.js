(function () {
    'use strict';
    var controllerId = 'passions';
    angular.module('app').controller(controllerId, ['common', passions]);

    function passions(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Passions';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Passions View'); });
        }
    }
})();