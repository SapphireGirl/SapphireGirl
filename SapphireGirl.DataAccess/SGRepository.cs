using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Newtonsoft.Json.Linq;
using SapphireGirl.Model;

namespace SapphireGirl.DataAccess
{
    public class SGRepository
    {
        private readonly EFContextProvider<SGContext> _contextProvider = new EFContextProvider<SGContext>();
        private SGContext Context { get { return _contextProvider.Context; } }

        public string Metadata
        {
            get { return _contextProvider.Metadata(); }
        }

        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }

        public IQueryable<Resume> Resumes
        {
            get { return Context.Resumes; }
        }

        public IQueryable<Job> Jobs
        {
            get { return Context.Jobs; }
        }
        public IQueryable<Skillset> Skills
        {
            get { return Context.Skills; }
        }
        public IQueryable<Recruiter> Recruiters
        {
            get { return Context.Recruiters; }
        }
        public IQueryable<StaffingCompany> Companies
        {
            get { return Context.StaffingCompanies; }
        }

    }
}
