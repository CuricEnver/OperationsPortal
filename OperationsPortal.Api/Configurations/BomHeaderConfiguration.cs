using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class BomHeaderConfiguration : IEntityTypeConfiguration<BomHeader>
    {
        public void Configure(EntityTypeBuilder<BomHeader> builder)
        {
            builder.ToTable("BomHeaders");

            builder.HasKey(x => x.BomHeaderId);

            builder.Property(x => x.BomHeaderName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasIndex(x => new { x.ItemId, x.BomHeaderName })
                .IsUnique();

            builder.HasOne(x => x.Item)
                .WithMany(x => x.BomHeaders)
                .HasForeignKey(x => x.ItemId);

            builder.HasMany(x => x.BomLines)
                .WithOne(x => x.BomHeader)
                .HasForeignKey(x => x.BomHeaderId);
        }
    }
}
