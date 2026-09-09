namespace OperationsPortal.Api.Models
{
    public class Subsite
    {
        public int SubsiteId { get; set; }
        public string SubsiteName { get; set; } = string.Empty;
        public int SiteId { get; set; }
        public bool IsActive { get; set; } = true;
        public Site Site { get; set; } = null!;
        public ICollection<InventoryLocation> InventoryLocations { get; set; } = new List<InventoryLocation>();
    }
}
