using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace OperationsPortal.Api.Data
{
    public class OperationsPortalContextFactory : IDesignTimeDbContextFactory<OperationsPortalContext>
    {
        public OperationsPortalContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var optionsBuilder = new DbContextOptionsBuilder<OperationsPortalContext>();
            optionsBuilder.UseNpgsql(config.GetConnectionString("DefaultConnection"))
                          .UseSnakeCaseNamingConvention();

            return new OperationsPortalContext(optionsBuilder.Options);
        }
    }
}
