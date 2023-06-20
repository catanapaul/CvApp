namespace API.Entities
{
    public class Project
    {
        public string  ProjectName { get; set; }
        public int Id { get; set; }
        public DateTime Created { get; set; }
        public string Introduction { get; set; }
        public string Code { get; set; }
        public string Status { get; set; }
        public string Tech { get; set; }
        public string Dificulty { get; set; }
        public string TimeForCompletion { get; set; }
        public string Category { get; set; }
        public string Tags { get; set; }
        public string Documentation { get; set; }
        public string Includes { get; set; }
        public string Goal { get; set; }
        public int Views { get; set; }
        public int Likes { get; set; }
        
        public ICollection<ProjectComment> Comments { get; set; }
        public ICollection<ProjectUser> Contributors { get; set; }
        public ICollection<ProjectPhoto> Photos { get; set; }
    }
}