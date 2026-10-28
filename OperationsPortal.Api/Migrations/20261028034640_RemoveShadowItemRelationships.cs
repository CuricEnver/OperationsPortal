using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperationsPortal.Api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveShadowItemRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_bom_headers_items_item_id1",
                table: "BomHeaders");

            migrationBuilder.DropForeignKey(
                name: "fk_bom_lines_items_item_id1",
                table: "BomLines");

            migrationBuilder.DropForeignKey(
                name: "fk_inventories_items_item_id1",
                table: "Inventories");

            migrationBuilder.DropIndex(
                name: "ix_inventories_item_id1",
                table: "Inventories");

            migrationBuilder.DropIndex(
                name: "ix_bom_lines_item_id1",
                table: "BomLines");

            migrationBuilder.DropIndex(
                name: "ix_bom_headers_item_id1",
                table: "BomHeaders");

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "BomLines");

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "BomHeaders");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "Inventories",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "BomLines",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "BomHeaders",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "ix_inventories_item_id1",
                table: "Inventories",
                column: "item_id1");

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_item_id1",
                table: "BomLines",
                column: "item_id1");

            migrationBuilder.CreateIndex(
                name: "ix_bom_headers_item_id1",
                table: "BomHeaders",
                column: "item_id1");

            migrationBuilder.AddForeignKey(
                name: "fk_bom_headers_items_item_id1",
                table: "BomHeaders",
                column: "item_id1",
                principalTable: "Items",
                principalColumn: "item_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_bom_lines_items_item_id1",
                table: "BomLines",
                column: "item_id1",
                principalTable: "Items",
                principalColumn: "item_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_inventories_items_item_id1",
                table: "Inventories",
                column: "item_id1",
                principalTable: "Items",
                principalColumn: "item_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
