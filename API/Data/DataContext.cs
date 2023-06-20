using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }
        //public DbSet<Project> Projects { get; set; }
        //public DbSet<ProjectComment> ProjectComents { get; set; }
        //public DbSet<ProjectPhoto> ProjectPhotos { get; set; }
        //public DbSet<ProjectUser> ProjectUsers { get; set; }

        //de la boldisor !!!!
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder); }
    }
}