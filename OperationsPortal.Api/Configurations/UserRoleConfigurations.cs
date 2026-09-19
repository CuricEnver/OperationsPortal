using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.ToTable("UserRoles");

            builder.HasKey(x => x.UserRoleId);

            builder.HasIndex(x => new { x.UserId, x.RoleId })
                .IsUnique();

            builder.HasOne(x => x.User)
                .WithMany(x => x.UserRoles)
                .HasForeignKey(x => x.UserId);

            builder.HasOne(x => x.Role)
                .WithMany(x => x.UserRoles)
                .HasForeignKey(x => x.RoleId);

            builder.HasData(
                new UserRole { UserRoleId = 1, UserId = 1, RoleId = 1 }, // admin → Admin
                new UserRole { UserRoleId = 2, UserId = 2, RoleId = 2 }  // demo → Viewer
            );
        }
    }
}
