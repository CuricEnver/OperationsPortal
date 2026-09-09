namespace OperationsPortal.Api.Models
{
    public class UnitOfMeasure
    {
        public int UnitOfMeasureId { get; set; }
        public string UnitOfMeasureName { get; set; } = string.Empty;
        public bool IsActive { get; set; } = true;
        public ICollection<Item> Items { get; set; } = new List<Item>();  
    }
}
