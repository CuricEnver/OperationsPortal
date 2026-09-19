using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace OperationsPortal.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_user_role_role_role_id",
                table: "user_role");

            migrationBuilder.DropForeignKey(
                name: "fk_user_role_users_user_id",
                table: "user_role");

            migrationBuilder.DropIndex(
                name: "ix_subsites_site_id",
                table: "subsites");

            migrationBuilder.DropIndex(
                name: "ix_inventories_inventory_location_id",
                table: "inventories");

            migrationBuilder.DropPrimaryKey(
                name: "pk_user_role",
                table: "user_role");

            migrationBuilder.DropIndex(
                name: "ix_user_role_user_id",
                table: "user_role");

            migrationBuilder.DropPrimaryKey(
                name: "pk_role",
                table: "role");

            migrationBuilder.DropIndex(
                name: "ix_inventory_locations_subsite_id",
                table: "inventory_locations");

            migrationBuilder.DropIndex(
                name: "ix_bom_lines_bom_header_id",
                table: "bom_lines");

            migrationBuilder.DropIndex(
                name: "ix_bom_headers_item_id",
                table: "bom_headers");

            migrationBuilder.RenameTable(
                name: "users",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "subsites",
                newName: "Subsites");

            migrationBuilder.RenameTable(
                name: "sites",
                newName: "Sites");

            migrationBuilder.RenameTable(
                name: "items",
                newName: "Items");

            migrationBuilder.RenameTable(
                name: "inventories",
                newName: "Inventories");

            migrationBuilder.RenameTable(
                name: "user_role",
                newName: "UserRoles");

            migrationBuilder.RenameTable(
                name: "unit_of_measures",
                newName: "UnitOfMeasures");

            migrationBuilder.RenameTable(
                name: "role",
                newName: "Roles");

            migrationBuilder.RenameTable(
                name: "inventory_locations",
                newName: "InventoryLocations");

            migrationBuilder.RenameTable(
                name: "bom_lines",
                newName: "BomLines");

            migrationBuilder.RenameTable(
                name: "bom_headers",
                newName: "BomHeaders");

            migrationBuilder.RenameIndex(
                name: "ix_user_role_role_id",
                table: "UserRoles",
                newName: "ix_user_roles_role_id");

            migrationBuilder.AlterColumn<string>(
                name: "username",
                table: "Users",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "password_hash",
                table: "Users",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "last_name",
                table: "Users",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "first_name",
                table: "Users",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "email",
                table: "Users",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "subsite_name",
                table: "Subsites",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "site_name",
                table: "Sites",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "item_type",
                table: "Items",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "item_number",
                table: "Items",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "item_name",
                table: "Items",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "Items",
                type: "character varying(200)",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "quantity",
                table: "Inventories",
                type: "numeric(18,6)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "Inventories",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "unit_of_measure_name",
                table: "UnitOfMeasures",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "role_name",
                table: "Roles",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "inventory_location_name",
                table: "InventoryLocations",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "InventoryLocations",
                type: "character varying(200)",
                maxLength: 200,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "quantity_per_assembly",
                table: "BomLines",
                type: "numeric(18,6)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");

            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "BomLines",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "bom_header_name",
                table: "BomHeaders",
                type: "character varying(50)",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddColumn<int>(
                name: "item_id1",
                table: "BomHeaders",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "pk_user_roles",
                table: "UserRoles",
                column: "user_role_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_roles",
                table: "Roles",
                column: "role_id");

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "role_id", "role_name" },
                values: new object[,]
                {
                    { 1, "Admin" },
                    { 2, "Viewer" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "user_id", "created_at", "email", "first_name", "is_active", "last_login", "last_name", "password_hash", "username" },
                values: new object[,]
                {
                    { 1, new DateTime(2026, 9, 19, 3, 34, 10, 488, DateTimeKind.Utc).AddTicks(1691), "admin@example.com", "System", true, null, "Administrator", "AQAAAAIAAYagAAAAEImW9E0z4CPWCwnk9BMKOAORDmLct+S8Zuv5KdUuuqTqIOtklnX4t/6y/UBBnGSNnA==", "admin" },
                    { 2, new DateTime(2026, 9, 19, 3, 34, 10, 488, DateTimeKind.Utc).AddTicks(1803), "demo@example.com", "Demo", true, null, "User", "AQAAAAIAAYagAAAAEOiP6VarDR0q/CH7ZBbIQn4gk8rUNUXXP1H86ll1Opdg1yvMWBoTt4axWFf1JBiMzQ==", "demo" }
                });

            migrationBuilder.InsertData(
                table: "UserRoles",
                columns: new[] { "user_role_id", "role_id", "user_id" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 2, 2 }
                });

            migrationBuilder.CreateIndex(
                name: "ix_users_email",
                table: "Users",
                column: "email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_users_username",
                table: "Users",
                column: "username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_subsites_site_id_subsite_name",
                table: "Subsites",
                columns: new[] { "site_id", "subsite_name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_sites_site_name",
                table: "Sites",
                column: "site_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_items_item_number",
                table: "Items",
                column: "item_number",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_inventories_inventory_location_id_item_id",
                table: "Inventories",
                columns: new[] { "inventory_location_id", "item_id" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_inventories_item_id1",
                table: "Inventories",
                column: "item_id1");

            migrationBuilder.CreateIndex(
                name: "ix_user_roles_user_id_role_id",
                table: "UserRoles",
                columns: new[] { "user_id", "role_id" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_unit_of_measures_unit_of_measure_name",
                table: "UnitOfMeasures",
                column: "unit_of_measure_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_roles_role_name",
                table: "Roles",
                column: "role_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_inventory_locations_subsite_id_inventory_location_name",
                table: "InventoryLocations",
                columns: new[] { "subsite_id", "inventory_location_name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_bom_header_id_line_number",
                table: "BomLines",
                columns: new[] { "bom_header_id", "line_number" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_item_id1",
                table: "BomLines",
                column: "item_id1");

            migrationBuilder.CreateIndex(
                name: "ix_bom_headers_item_id_bom_header_name",
                table: "BomHeaders",
                columns: new[] { "item_id", "bom_header_name" },
                unique: true);

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

            migrationBuilder.AddForeignKey(
                name: "fk_user_roles_roles_role_id",
                table: "UserRoles",
                column: "role_id",
                principalTable: "Roles",
                principalColumn: "role_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_user_roles_users_user_id",
                table: "UserRoles",
                column: "user_id",
                principalTable: "Users",
                principalColumn: "user_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropForeignKey(
                name: "fk_user_roles_roles_role_id",
                table: "UserRoles");

            migrationBuilder.DropForeignKey(
                name: "fk_user_roles_users_user_id",
                table: "UserRoles");

            migrationBuilder.DropIndex(
                name: "ix_users_email",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "ix_users_username",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "ix_subsites_site_id_subsite_name",
                table: "Subsites");

            migrationBuilder.DropIndex(
                name: "ix_sites_site_name",
                table: "Sites");

            migrationBuilder.DropIndex(
                name: "ix_items_item_number",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "ix_inventories_inventory_location_id_item_id",
                table: "Inventories");

            migrationBuilder.DropIndex(
                name: "ix_inventories_item_id1",
                table: "Inventories");

            migrationBuilder.DropPrimaryKey(
                name: "pk_user_roles",
                table: "UserRoles");

            migrationBuilder.DropIndex(
                name: "ix_user_roles_user_id_role_id",
                table: "UserRoles");

            migrationBuilder.DropIndex(
                name: "ix_unit_of_measures_unit_of_measure_name",
                table: "UnitOfMeasures");

            migrationBuilder.DropPrimaryKey(
                name: "pk_roles",
                table: "Roles");

            migrationBuilder.DropIndex(
                name: "ix_roles_role_name",
                table: "Roles");

            migrationBuilder.DropIndex(
                name: "ix_inventory_locations_subsite_id_inventory_location_name",
                table: "InventoryLocations");

            migrationBuilder.DropIndex(
                name: "ix_bom_lines_bom_header_id_line_number",
                table: "BomLines");

            migrationBuilder.DropIndex(
                name: "ix_bom_lines_item_id1",
                table: "BomLines");

            migrationBuilder.DropIndex(
                name: "ix_bom_headers_item_id_bom_header_name",
                table: "BomHeaders");

            migrationBuilder.DropIndex(
                name: "ix_bom_headers_item_id1",
                table: "BomHeaders");

            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "user_role_id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "UserRoles",
                keyColumn: "user_role_id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "role_id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Roles",
                keyColumn: "role_id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "user_id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "user_id",
                keyValue: 2);

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "Inventories");

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "BomLines");

            migrationBuilder.DropColumn(
                name: "item_id1",
                table: "BomHeaders");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "users");

            migrationBuilder.RenameTable(
                name: "Subsites",
                newName: "subsites");

            migrationBuilder.RenameTable(
                name: "Sites",
                newName: "sites");

            migrationBuilder.RenameTable(
                name: "Items",
                newName: "items");

            migrationBuilder.RenameTable(
                name: "Inventories",
                newName: "inventories");

            migrationBuilder.RenameTable(
                name: "UserRoles",
                newName: "user_role");

            migrationBuilder.RenameTable(
                name: "UnitOfMeasures",
                newName: "unit_of_measures");

            migrationBuilder.RenameTable(
                name: "Roles",
                newName: "role");

            migrationBuilder.RenameTable(
                name: "InventoryLocations",
                newName: "inventory_locations");

            migrationBuilder.RenameTable(
                name: "BomLines",
                newName: "bom_lines");

            migrationBuilder.RenameTable(
                name: "BomHeaders",
                newName: "bom_headers");

            migrationBuilder.RenameIndex(
                name: "ix_user_roles_role_id",
                table: "user_role",
                newName: "ix_user_role_role_id");

            migrationBuilder.AlterColumn<string>(
                name: "username",
                table: "users",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "password_hash",
                table: "users",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "last_name",
                table: "users",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "first_name",
                table: "users",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "email",
                table: "users",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "subsite_name",
                table: "subsites",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "site_name",
                table: "sites",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "item_type",
                table: "items",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "item_number",
                table: "items",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "item_name",
                table: "items",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "items",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(200)",
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "quantity",
                table: "inventories",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric(18,6)");

            migrationBuilder.AlterColumn<string>(
                name: "unit_of_measure_name",
                table: "unit_of_measures",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "role_name",
                table: "role",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "inventory_location_name",
                table: "inventory_locations",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "description",
                table: "inventory_locations",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "character varying(200)",
                oldMaxLength: 200,
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "quantity_per_assembly",
                table: "bom_lines",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric(18,6)");

            migrationBuilder.AlterColumn<string>(
                name: "bom_header_name",
                table: "bom_headers",
                type: "text",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "character varying(50)",
                oldMaxLength: 50);

            migrationBuilder.AddPrimaryKey(
                name: "pk_user_role",
                table: "user_role",
                column: "user_role_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_role",
                table: "role",
                column: "role_id");

            migrationBuilder.CreateIndex(
                name: "ix_subsites_site_id",
                table: "subsites",
                column: "site_id");

            migrationBuilder.CreateIndex(
                name: "ix_inventories_inventory_location_id",
                table: "inventories",
                column: "inventory_location_id");

            migrationBuilder.CreateIndex(
                name: "ix_user_role_user_id",
                table: "user_role",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "ix_inventory_locations_subsite_id",
                table: "inventory_locations",
                column: "subsite_id");

            migrationBuilder.CreateIndex(
                name: "ix_bom_lines_bom_header_id",
                table: "bom_lines",
                column: "bom_header_id");

            migrationBuilder.CreateIndex(
                name: "ix_bom_headers_item_id",
                table: "bom_headers",
                column: "item_id");

            migrationBuilder.AddForeignKey(
                name: "fk_user_role_role_role_id",
                table: "user_role",
                column: "role_id",
                principalTable: "role",
                principalColumn: "role_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_user_role_users_user_id",
                table: "user_role",
                column: "user_id",
                principalTable: "users",
                principalColumn: "user_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
