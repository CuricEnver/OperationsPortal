using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class SubsiteConfiguration : IEntityTypeConfiguration<Subsite>
    {
        public void Configure(EntityTypeBuilder<Subsite> builder)
        {
            builder.ToTable("Subsites");

            builder.HasKey(x => x.SubsiteId);

            builder.Property(x => x.SubsiteName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasIndex(x => new { x.SiteId, x.SubsiteName })
                .IsUnique();

            builder.HasOne(x => x.Site)
                .WithMany(x => x.Subsites)
                .HasForeignKey(x => x.SiteId);

            builder.HasMany(x => x.InventoryLocations)
                .WithOne(x => x.Subsite)
                .HasForeignKey(x => x.SubsiteId);
        }

    }
}
