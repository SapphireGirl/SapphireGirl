(function () {
    'use strict';
    var controllerId = 'skillset';
    angular.module('app').controller(controllerId, ['common', skillset]);

    function skillset(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Skillset';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Skillset View'); });
        }
    }
})();