using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(x => x.UserId);

            builder.Property(x => x.Username)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.Email)
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(x => x.PasswordHash)
                .IsRequired()
                .HasMaxLength(200);
            
            builder.Property(x => x.IsActive)
                .IsRequired();

            builder.Property(x => x.CreatedAt)
                .IsRequired();

            builder.HasIndex(x => x.Username)
                .IsUnique();

            builder.HasIndex(x => x.Email)
                .IsUnique();

            builder.HasMany(x => x.UserRoles)
                .WithOne()
                .HasForeignKey(x => x.UserId);

            builder.HasData(
                new User
                {
                    UserId = 1,
                    Username = "admin",
                    FirstName = "System",
                    LastName = "Administrator",
                    Email = "admin@example.com",
                    PasswordHash = "AQAAAAIAAYagAAAAEImW9E0z4CPWCwnk9BMKOAORDmLct+S8Zuv5KdUuuqTqIOtklnX4t/6y/UBBnGSNnA==",
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 01, 01, 0, 0, 0, DateTimeKind.Utc)
                },
                new User
                {
                    UserId = 2,
                    Username = "demo",
                    FirstName = "Demo",
                    LastName = "User",
                    Email = "demo@example.com",
                    PasswordHash = "AQAAAAIAAYagAAAAEOiP6VarDR0q/CH7ZBbIQn4gk8rUNUXXP1H86ll1Opdg1yvMWBoTt4axWFf1JBiMzQ==",
                    IsActive = true,
                    CreatedAt = new DateTime(2024, 01, 01, 0, 0, 0, DateTimeKind.Utc)
                }
            );
        }
    }
}