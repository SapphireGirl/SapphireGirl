using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using SapphireGirl.Model;

namespace SapphireGirl.DataAccess
{
    public class SGContext : DbContext
    {
        public DbSet<Resume> Resumes { get; set; }
        public DbSet<Skillset> Skills { get; set; }
        public DbSet<Recruiter> Recruiters { get; set; }
        public DbSet<StaffingCompany> StaffingCompanies { get; set; }
        public DbSet<Job> Jobs { get; set; }


        public SGContext() : base(nameOrConnectionString: "SGDB"){ }
        static SGContext()
        {
            System.Data.Entity.Database.SetInitializer<SGContext>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // singular Table Names

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            // Disable proxy creating and lazy loading: not wanted in this service context
            Configuration.LazyLoadingEnabled = false;
            Configuration.ProxyCreationEnabled = false;

            modelBuilder.Configurations.Add(new ResumeMappings());
            modelBuilder.Configurations.Add(new RecruiterMappings());
            modelBuilder.Configurations.Add(new StaffingCompanyMappings());
            modelBuilder.Configurations.Add(new SkillsetMappings());
        }
    }
}
