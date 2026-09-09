namespace OperationsPortal.Api.Models
{
    public class BomLine
    {
        public int BomLineId { get; set; }
        public int BomHeaderId { get; set; }
        public int ItemId { get; set; }
        public int QuantityPerAssembly { get; set; } = 1;
        public int LineNumber { get; set; } = 10;
        public Item Item { get; set; } = null!;
        public BomHeader BomHeader { get; set; } = null!;   
    }
}
