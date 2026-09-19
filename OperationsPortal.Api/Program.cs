using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OperationsPortal.Api.Data;
using OperationsPortal.Api.Features.Authorization.Login;
using OperationsPortal.Api.Infrastructure.Extensions;
using OperationsPortal.Api.Infrastructure.Security;
using OperationsPortal.Api.Models;

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

builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();
builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();


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
