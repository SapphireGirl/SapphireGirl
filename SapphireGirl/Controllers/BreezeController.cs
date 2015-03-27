using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.WebApi2;
using Microsoft.Practices.Unity;
using Newtonsoft.Json.Linq;
using SapphireGirl.DataAccess;
using SapphireGirl.Model;

namespace SapphireGirl.Controllers
{
    // TODO: Implement Container
    
    [BreezeController]
    public class BreezeController : ApiController
    {
        private readonly SGRepository _repository = new SGRepository();

        [HttpGet]
        public string Metadata()
        {
            return _repository.Metadata;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundleJObject)
        {
            return _repository.SaveChanges(saveBundleJObject);
        }
        [HttpGet]
        public IQueryable<Resume> Resumes()
        {
            return _repository.Resumes;
        }

        [HttpGet]
        public IQueryable<Job> Jobs()
        {
            return _repository.Jobs;
        }

        [HttpGet]
        public IQueryable<Recruiter> Recruiters()
        {
            return _repository.Recruiters;
        }

        [HttpGet]
        public IQueryable<Skillset> MySkills()
        {
            return _repository.Skills;
        }
        [HttpGet]
        public IQueryable<StaffingCompany> StaffingCompanies()
        {
            return _repository.Companies;
        }
        //[HttpGet]
        //public object Lookups()
        //{
        //    ////var rooms = _repository.Rooms;
        //    ////var tracks = _repository.Tracks;
        //    ////var timeslots = _repository.TimeSlots;
        //    ////return new { rooms, tracks, timeslots };
        //}

        // Diagnostic
        [HttpGet]
        public string Ping()
        {
            return "pong";
        }
    }
}