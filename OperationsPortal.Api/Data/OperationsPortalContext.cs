using Microsoft.EntityFrameworkCore;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Data
{
    public class OperationsPortalContext : DbContext
    {
        public OperationsPortalContext(DbContextOptions<OperationsPortalContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Site> Sites { get; set; }
        public DbSet<Subsite> Subsites { get; set; }
        public DbSet<InventoryLocation> InventoryLocations { get; set; }
        public DbSet<Item> Items { get; set; }
        public DbSet<UnitOfMeasure> UnitOfMeasures { get; set; }
        public DbSet<Inventory> Inventories { get; set; }
        public DbSet<BomHeader> BomHeaders { get; set; }
        public DbSet<BomLine> BomLines { get; set; }

    }
}
