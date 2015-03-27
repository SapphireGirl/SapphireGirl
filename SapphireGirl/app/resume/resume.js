(function () {
    'use strict';
    var controllerId = 'resume';
    angular.module('app').controller(controllerId, ['common', resume]);

    function resume(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Resume';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Resume View'); });
        }
    }
})();