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

// Load JwtSettings (may be null during migrations)
var jwtSettings = builder.Configuration.GetSection("JwtSettings").Get<JwtSettings>();

// Register services that DO NOT depend on JwtSettings
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();

// Only register JwtTokenService + JwtSettings + JWT auth if settings exist
if (jwtSettings is not null)
{
    builder.Services.AddSingleton(jwtSettings);
    builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();
    builder.Services.AddJwtAuthentication(jwtSettings);
}

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
