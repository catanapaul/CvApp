namespace API.Entities
{
    public class ProjectComment
    {
        public int Id { get; set; }
        public string Text { get; set; }    
        public DateTime Created { get; set; }   
        public int Likes { get; set; }

        public int AppUserId { get; set; }
        //public AppUser AppUser { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}