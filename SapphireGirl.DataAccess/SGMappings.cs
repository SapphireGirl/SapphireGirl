using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using SapphireGirl.Model;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SapphireGirl.DataAccess
{
    public class ResumeMappings : EntityTypeConfiguration<Resume>
    {
        public ResumeMappings()
        {
            // Resume has 1 Session, Sessions have many Attendance records
            HasRequired(a => a.Title);
            HasKey(a => a.Id);
            //    .With(s => s.Skills)
            //     .WillCascadeOnDelete(false);


            //.WithMany(s => s.AttendanceList)
            //    .HasForeignKey(a => a.SessionId)
            //    .WillCascadeOnDelete(false);

        }
         

    }

    public class RecruiterMappings : EntityTypeConfiguration<Recruiter>
    {
        public RecruiterMappings()
        {
            // Attendance has 1 Session, Sessions have many Attendance records
            //HasRequired(a => a.Session)
            //    .WithMany(s => s.AttendanceList)
            //    .HasForeignKey(a => a.SessionId)
            //    .WillCascadeOnDelete(false);

        }


    }

    public class StaffingCompanyMappings : EntityTypeConfiguration<StaffingCompany>
    {
        public StaffingCompanyMappings()
        {
            // Attendance has 1 Session, Sessions have many Attendance records
            //HasRequired(a => a.Session)
            //    .WithMany(s => s.AttendanceList)
            //    .HasForeignKey(a => a.SessionId)
            //    .WillCascadeOnDelete(false);

        }


    }

    public class SkillsetMappings : EntityTypeConfiguration<Skillset>
    {
        public SkillsetMappings()
        {
            // Attendance has 1 Session, Sessions have many Attendance records
            //HasRequired(a => a.Session)
            //    .WithMany(s => s.AttendanceList)
            //    .HasForeignKey(a => a.SessionId)
            //    .WillCascadeOnDelete(false);

        }


    }

    public class JobMappings : EntityTypeConfiguration<Job>
    {
        public JobMappings()
        {
            HasKey(k=>k.Id).
            HasRequired(a => a.Resume);
                
                //.HasForeignKey(a => a.ResumeId)
                //.WillCascadeOnDelete(false);

        }


    }
}
