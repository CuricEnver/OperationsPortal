using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class InventoryLocationConfiguration : IEntityTypeConfiguration<InventoryLocation>
    {
        public void Configure(EntityTypeBuilder<InventoryLocation> builder)
        {
            builder.ToTable("InventoryLocations");

            builder.HasKey(x => x.InventoryLocationId);

            builder.Property(x => x.InventoryLocationName)
                .IsRequired()
                .HasMaxLength(50);
            
            builder.Property(x => x.Description)
                .HasMaxLength(200); 

            builder.HasIndex(x => new { x.SubsiteId, x.InventoryLocationName })
                .IsUnique();
            
            builder.HasOne(x => x.Subsite)
                .WithMany(x => x.InventoryLocations)
                .HasForeignKey(x => x.SubsiteId);

            builder.HasMany(x => x.Inventories)
                .WithOne(x => x.InventoryLocation)
                .HasForeignKey(x => x.InventoryLocationId);
        }
    }
}
