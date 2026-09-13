using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class ItemConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("Items");

            builder.HasKey(x => x.ItemId);

            builder.Property(x => x.ItemName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.ItemNumber)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.ItemType)
                .IsRequired()
                .HasMaxLength(50);
        
            builder.Property(x => x.Description)
                .HasMaxLength(200);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasIndex(x => x.ItemNumber)
                .IsUnique();

            builder.HasOne(x => x.UnitOfMeasure)
                .WithMany()
                .HasForeignKey(x => x.UnitOfMeasureId);

            builder.HasMany(x => x.Inventories)
                .WithOne()
                .HasForeignKey(x => x.ItemId);

            builder.HasMany(x => x.BomHeaders)
                .WithOne()
                .HasForeignKey(x => x.ItemId);

            builder.HasMany(x => x.BomLines)
                .WithOne()
                .HasForeignKey(x => x.ItemId);  
        }
    }
}
