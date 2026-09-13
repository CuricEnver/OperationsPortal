namespace OperationsPortal.Api.Models
{
    public class BomLine
    {
        public int BomLineId { get; set; }
        public decimal QuantityPerAssembly { get; set; } = 1m;
        public int LineNumber { get; set; }
        public int BomHeaderId { get; set; }
        public int ItemId { get; set; }
        public Item Item { get; set; } = null!;
        public BomHeader BomHeader { get; set; } = null!;   
    }
}
