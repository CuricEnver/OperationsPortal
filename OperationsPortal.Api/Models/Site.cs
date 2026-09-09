namespace OperationsPortal.Api.Models
{
    public class Site
    {
        public int SiteId { get; set; }
        public string SiteName { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public ICollection<Subsite> Subsites { get; set; } = new List<Subsite>();
    }
}
