using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OperationsPortal.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddItemLeadTimes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "assembly_lead_time_days",
                table: "Items",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "purchase_lead_time_days",
                table: "Items",
                type: "integer",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "assembly_lead_time_days",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "purchase_lead_time_days",
                table: "Items");
        }
    }
}
