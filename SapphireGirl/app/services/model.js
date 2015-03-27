(function () {

    'use strict';

    var serviceId = 'model';

    angular.module('app').factory(serviceId, model);

    function model() {

        var entityNames = {
            resume: 'Resume',
            recruiter: 'Recruiter',
            staffingCompany: 'StaffingCompany',
            skillset: 'Skillset',
            job: 'Job',
            
        };

        var service = {
            configureMetadataStore: configureMetadataStore,
            entityNames: entityNames
        };

        return service;

        function configureMetadataStore(metadataStore) {
            registerResume(metadataStore);
            registerRecruiter(metadataStore);
            registerStaffingCompany(metadataStore);
            registerSkillset(metadataStore);
            registerJob(metadataStore);

        }

        function registerResume(metadataStore) {

            metadataStore.registerEntityTypeCtor('Resume', Resume);

            function Resume(metadataStore) {
                this.isCurrent = true;
            }


            Object.defineProperty(Resume.prototype, 'fullName', {
                get: function() {
                    var fn = 'Justine';
                    var ln = 'Alires';
                    return fn + ' ' + ln;
                }
            });
        }

        function registerRecruiter(metadataStore) {

            metadataStore.registerEntityTypeCtor('Recruiter', Recruiter);

            function Recruiter() {
                console.log('In Recruiter');
            }
        }

        function registerStaffingCompany(metadataStore) {

            metadataStore.registerEntityTypeCtor('StaffingCompany', StaffingCompany);
            function StaffingCompany() {
                console.log('In StaffingCompany');
            }
        }

        function registerSkillset(metadataStore) {

            metadataStore.registerEntityTypeCtor('Skillset', Skillset);
            function Skillset() {
                console.log('In Skillset');
            }
        }

        function registerJob(metadataStore) {

            metadataStore.registerEntityTypeCtor('Job', Job);
            function Job() {
                console.log('In Job');
            }
        }

    }
})();