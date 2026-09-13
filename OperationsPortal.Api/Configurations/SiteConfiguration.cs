using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class SiteConfiguration : IEntityTypeConfiguration<Site>
    {
        public void Configure(EntityTypeBuilder<Site> builder)
        {
            builder.ToTable("Sites");

            builder.HasKey(x => x.SiteId);

            builder.Property(x => x.SiteName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.HasIndex(x => x.SiteName)
                .IsUnique();

            builder.HasMany(x => x.Subsites)
                .WithOne(x => x.Site)
                .HasForeignKey(x => x.SiteId);
        }
    }
}
