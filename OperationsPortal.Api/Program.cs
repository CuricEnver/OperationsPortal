using Microsoft.EntityFrameworkCore;
using OperationsPortal.Api.Data;
using OperationsPortal.Api.Infrastructure.Extensions;
using OperationsPortal.Api.Infrastructure.Security;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Add DbContext with PostgreSQL + snake_case naming
builder.Services.AddDbContext<OperationsPortalContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
           .UseSnakeCaseNamingConvention();
});

// Bind JwtSettings from configuration
var jwtSettings = builder.Configuration.GetSection("JwtSettings").Get<JwtSettings>()
    ?? throw new InvalidOperationException("JwtSettings configuration section is missing.");

// Add JWT authentication
builder.Services.AddJwtAuthentication(jwtSettings);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
