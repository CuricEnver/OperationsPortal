namespace OperationsPortal.Api.Models
{
    public class Inventory
    {
        public int InventoryId { get; set; }
        public int InventoryLocationId { get; set; }
        public int ItemId { get; set; }
        public decimal Quantity { get; set; }
        public InventoryLocation InventoryLocation { get; set; } = null!;
        public Item Item { get; set; } = null!;
    }
}
