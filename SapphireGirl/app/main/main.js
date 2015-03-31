(function () {
    'use strict';
    var controllerId = 'main';
    angular.module('app').controller(controllerId, ['common', main]);

    function main(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Main';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Main View'); });
        }
    }
})();