(function () {
    'use strict';
    var controllerId = 'blog';
    angular.module('app').controller(controllerId, ['common', blog]);

    function blog(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Blog';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Blog View'); });
        }
    }
})();