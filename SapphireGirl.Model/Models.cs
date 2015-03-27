using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SapphireGirl.Model
{
    public class BaseEntity
    {
        public int Id { get; set; }
    }

    public class Resume : BaseEntity
    {
        public string Title { get; set; }
        public virtual ICollection<Skillset> Skills { get; set; } 
    }
    public class Recruiter : BaseEntity
    {
        public string Name { get; set; }
        public virtual StaffingCompany Company { get; set; }
    }

    public class StaffingCompany : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
    }
    public class Skillset : BaseEntity
    {
        public string Name { get; set; }
        public string NoOfYears_Months {get; set; }
    }

    public class Job : BaseEntity
    {
        public virtual Recruiter Recruiter { get; set; }
        public string Description { get; set; }
        public virtual Resume Resume { get; set; }
        public int ResumeId { get; set; }
        public string CoverLetter { get; set; }
        public DateTime DateApplied { get; set; }
        public Uri Url { get; set; }
    }

}
