namespace OperationsPortal.Api.Models
{
    public class InventoryLocation
    {
        public int InventoryLocationId { get; set; }
        public string InventoryLocationName { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int SubsiteId { get; set; }
        public Subsite Subsite { get; set; } = null!;
        public ICollection<Inventory> Inventories { get; set; } = new List<Inventory>();
    }
}
