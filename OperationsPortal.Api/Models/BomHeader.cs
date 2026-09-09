namespace OperationsPortal.Api.Models
{
    public class BomHeader
    {
        public int BomHeaderId { get; set; }
        public int ItemId { get; set; }
        public bool IsActive { get; set; } = true;
        public Item Item { get; set; } = null!;
        public ICollection<BomLine> BomLines { get; set; } = new List<BomLine>();
    }
}
