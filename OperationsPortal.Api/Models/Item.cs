namespace OperationsPortal.Api.Models
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public string ItemNumber { get; set; } = string.Empty;
        public string ItemType { get; set; } = string.Empty;
        public int UnitOfMeasureId { get; set; }
        public string? Description { get; set; }
        public bool IsActive { get; set; } = true;
        public UnitOfMeasure UnitOfMeasure { get; set; } = null!;
        public ICollection<Inventory> Inventories { get; set; } = new List<Inventory>();
        public ICollection<BomHeader> BomHeaders { get; set; } = new List<BomHeader>();
        public ICollection<BomLine> BomLines { get; set; } = new List<BomLine>();   
    }
}
