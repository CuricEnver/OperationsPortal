using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class UnitOfMeasureConfiguration : IEntityTypeConfiguration<UnitOfMeasure>
    {
        public void Configure(EntityTypeBuilder<UnitOfMeasure> builder)
        {
            builder.ToTable("UnitOfMeasures");

            builder.HasKey(x => x.UnitOfMeasureId);

            builder.Property(x => x.UnitOfMeasureName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasIndex(x => x.UnitOfMeasureName)
                .IsUnique();

            builder.HasMany(x => x.Items)
                .WithOne(x => x.UnitOfMeasure)
                .HasForeignKey(x => x.UnitOfMeasureId);
        }
    }
}
