namespace API.Entities
{
    public class ProjectPhoto
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}