using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace OperationsPortal.Api.Migrations
{
    /// <inheritdoc />
    public partial class EntityConfigurations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "role",
                columns: table => new
                {
                    role_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    role_name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_role", x => x.role_id);
                });

            migrationBuilder.CreateTable(
                name: "sites",
                columns: table => new
                {
                    site_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    site_name = table.Column<string>(type: "text", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_sites", x => x.site_id);
                });

            migrationBuilder.CreateTable(
                name: "unit_of_measures",
                columns: table => new
                {
                    unit_of_measure_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    unit_of_measure_name = table.Column<string>(type: "text", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_unit_of_measures", x => x.unit_of_measure_id);
                });

            migrationBuilder.CreateTable(
                name: "user_role",
                columns: table => new
                {
                    user_role_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    user_id = table.Column<int>(type: "integer", nullable: false),
                    role_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_user_role", x => x.user_role_id);
                    table.ForeignKey(
                        name: "fk_user_role_role_role_id",
                        column: x => x.role_id,
                        principalTable: "role",
                        principalColumn: "role_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_user_role_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "subsites",
                columns: table => new
                {
                    subsite_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    subsite_name = table.Column<string>(type: "text", nullable: false),
                    site_id = table.Column<int>(type: "integer", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_subsites", x => x.subsite_id);
                    table.ForeignKey(
                        name: "fk_subsites_sites_site_id",
                        column: x => x.site_id,
                        principalTable: "sites",
                        principalColumn: "site_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "items",
                columns: table => new
                {
                    item_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    item_name = table.Column<string>(type: "text", nullable: false),
                    item_number = table.Column<string>(type: "text", nullable: false),
                    item_type = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: true),
                    is_active = table.Column<bool>(type: "boolean", nullable: false),
                    unit_of_measure_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_items", x => x.item_id);
                    table.ForeignKey(
                        name: "fk_items_unit_of_measures_unit_of_measure_id",
                        column: x => x.unit_of_measure_id,
                        principalTable: "unit_of_measures",
                        principalColumn: "unit_of_measure_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "inventory_locations",
                columns: table => new
                {
                    inventory_location_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    inventory_location_name = table.Column<string>(type: "text", nullable: false),
                    description = table.Column<string>(type: "text", nullable: true),
                    subsite_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_inventory_locations", x => x.inventory_location_id);
                    table.ForeignKey(
                        name: "fk_inventory_locations_subsites_subsite_id",
                        column: x => x.subsite_id,
                        principalTable: "subsites",
                        principalColumn: "subsite_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "bom_headers",
                columns: table => new
                {
                    bom_header_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    bom_header_name = table.Column<string>(type: "text", nullable: false),
                    item_id = table.Column<int>(type: "integer", nullable: false),
                    is_active = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_bom_headers", x => x.bom_header_id);
                    table.ForeignKey(
                        name: "fk_bom_headers_items_item_id",
                        column: x => x.item_id,
                        principalTable: "items",
                        principalColumn: "item_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "inventories",
                columns: table => new
                {
                    inventory_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    quantity = table.Column<decimal>(type: "numeric", nullable: false),
                    inventory_location_id = table.Column<int>(type: "integer", nullable: false),
                    item_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_inventories", x => x.inventory_id);
                    table.ForeignKey(
                        name: "fk_inventories_inventory_locations_inventory_location_id",
                        column: x => x.inventory_location_id,
                        principalTable: "inventory_locations",
                        principalColumn: "inventory_location_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_inventories_items_item_id",
                        column: x => x.item_id,
                        principalTable: "items",
                        principalColumn: "item_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "bom_lines",
                columns: table => new
                {
                    bom_line_id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    quantity_per_assembly = table.Column<decimal>(type: "numeric", nullable: false),
                    line_number = table.Column<int>(type: "integer", nullable: false),
                    bom_header_id = table.Column<int>(type: "integer", nullable: false),
                    item_id = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("pk_bom_lines", x => x.bom_line_id);
                    table.ForeignKey(
                        name: "fk_bom_lines_bom_headers_bom_header_id",
                        column: x => x.bom_header_id,
                        principalTable: "bom_headers",
                        principalColumn: "bom_header_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "fk_bom_lines_items_item_id",
                        column: x => x.item_id,
                        principalTable: "items",
                        principalColumn: "item_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "ix_bom_headers_item_id",
                table: "bom_headers",
                column: "item_id");

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_bom_header_id",
                table: "bom_lines",
                column: "bom_header_id");

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_item_id",
                table: "bom_lines",
                column: "item_id");

            migrationBuilder.CreateIndex(
                name: "ix_inventories_inventory_location_id",
                table: "inventories",
                column: "inventory_location_id");

            migrationBuilder.CreateIndex(
                name: "ix_inventories_item_id",
                table: "inventories",
                column: "item_id");

            migrationBuilder.CreateIndex(
                name: "ix_inventory_locations_subsite_id",
                table: "inventory_locations",
                column: "subsite_id");

            migrationBuilder.CreateIndex(
                name: "ix_items_unit_of_measure_id",
                table: "items",
                column: "unit_of_measure_id");

            migrationBuilder.CreateIndex(
                name: "ix_subsites_site_id",
                table: "subsites",
                column: "site_id");

            migrationBuilder.CreateIndex(
                name: "ix_user_role_role_id",
                table: "user_role",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "ix_user_role_user_id",
                table: "user_role",
                column: "user_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "bom_lines");

            migrationBuilder.DropTable(
                name: "inventories");

            migrationBuilder.DropTable(
                name: "user_role");

            migrationBuilder.DropTable(
                name: "bom_headers");

            migrationBuilder.DropTable(
                name: "inventory_locations");

            migrationBuilder.DropTable(
                name: "role");

            migrationBuilder.DropTable(
                name: "items");

            migrationBuilder.DropTable(
                name: "subsites");

            migrationBuilder.DropTable(
                name: "unit_of_measures");

            migrationBuilder.DropTable(
                name: "sites");
        }
    }
}
