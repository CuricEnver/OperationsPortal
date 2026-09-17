using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class BomLineConfiguration : IEntityTypeConfiguration<BomLine>
    {
        public void Configure(EntityTypeBuilder<BomLine> builder)
        {
            builder.ToTable("BomLines");

            builder.HasKey(x => x.BomLineId);

            builder.Property(x => x.QuantityPerAssembly)
                .HasColumnType("decimal(18,6)")
                .IsRequired();

            builder.Property(x => x.LineNumber).IsRequired();

            builder.HasIndex(x => new { x.BomHeaderId, x.LineNumber }).IsUnique();

            builder.HasOne(x=> x.Item)
                .WithMany(x => x.BomLines)
                .HasForeignKey(x => x.ItemId);
            
            builder.HasOne(x => x.BomHeader)
                .WithMany(x => x.BomLines)
                .HasForeignKey(x => x.BomHeaderId);
        }
    }
}
