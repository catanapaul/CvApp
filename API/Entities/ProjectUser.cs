namespace API.Entities
{
    public class ProjectUser
    {
        public int Id { get; set; }
        public int AppUserId { get; set; }
        //public AppUser AppUser { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
        
    }
}