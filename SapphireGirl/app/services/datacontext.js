(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId,
        ['common', 'entityManagerFactory', 'model', datacontext]);

    function datacontext(common, emFactory, model) {
        var $q = common.$q;

        // Logger
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(serviceId);
        var logError = getLogFn(serviceId, 'error');
        var logSuccess = getLogFn(serviceId, 'success');

        var EntityQuery = breeze.EntityQuery;
       // alert(EntityQuery);
        var manager = emFactory.newManager();
        var initPromise;
        var $q = common.$q;
        var entityNames = model.entityNames;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getSkills: getSkills,
            initializeData: initializeData
        };

        return service;

        // Service Functions
        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
                { firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
                { firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }


        function getSkills() {
            var allSkills = [
                { Name: 'C#', NoOfYears_Months: '3 yrs' },
                { Name: 'MVC', NoOfYears_Months: '1 yrs' },
                { Name: 'Entity Framework', NoOfYears_Months: '2 yrs' },
                { Name: 'SQL', NoOfYears_Months: '3 yrs' },
                { Name: 'JavaScript', NoOfYears_Months: '1.5 yrs' },
                { Name: 'JQuery', NoOfYears_Months: '1 yrs' },
                { Name: 'CSS3', NoOfYears_Months: '2 yrs' },
                { Name: 'HTML5', NoOfYears_Months: '2 yrs' },
                { Name: 'TFS', NoOfYears_Months: '2 yrs' },
                { Name: 'Git', NoOfYears_Months: '6 months' },
                { Name: 'OOP', NoOfYears_Months: '7 yrs' },
                { Name: 'Agile', NoOfYears_Months: '1 yr' },
                { Name: 'Design Patterns/SOLID', NoOfYears_Months: '3 yrs' },


            ];
        }

        function getSkillsFromDB() {

            var orderBy = 'Name';

            // Using Breeze
            return EntityQuery.from('Skills')
                .select('Name, NoOfYears_Months')
                .toType('Skills')
                .using(manager)
                .execute()
                .then(querySucceeded, _queryFailed);  // changed from to$q
        }


        function initializeData() {
            // Use promises because we need to wait til the data comes back

        }
        function querySucceeded(data) {
            sessions = data.results;
            log('Retrieved [Session Partials] from remote data source', sessions.length, true);
            return sessions;
        }

        function _queryFailed(error) {
            var msg = config.appErrorPrefix + 'Error retrieving data' + error.message;
            logError(msg, error);
            throw error;
        }
    }
})();