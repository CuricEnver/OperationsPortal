using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

public class InventoryConfiguration : IEntityTypeConfiguration<Inventory>
{
    public void Configure(EntityTypeBuilder<Inventory> builder)
    {
        builder.ToTable("Inventories");

        builder.HasKey(x => x.InventoryId);

        builder.Property(x => x.Quantity)
            .IsRequired()
            .HasColumnType("decimal(18,6)");

        builder.HasIndex(x => new { x.InventoryLocationId, x.ItemId })
            .IsUnique();

        builder.HasOne(x => x.InventoryLocation)
            .WithMany(x => x.Inventories)
            .HasForeignKey(x => x.InventoryLocationId);

        builder.HasOne(x => x.Item)
            .WithMany(x => x.Inventories)
            .HasForeignKey(x => x.ItemId);
    }
}
