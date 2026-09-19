using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using OperationsPortal.Api.Data;
using OperationsPortal.Api.Infrastructure.Security;
using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Features.Authorization.Login
{
    public class AuthService : IAuthService
    {
        private readonly OperationsPortalContext _dbContext;
        private readonly IJwtTokenService _jwtTokenService;
        private readonly IPasswordHasher<User> _passwordHasher;

        public AuthService(
            OperationsPortalContext dbContext,
            IJwtTokenService jwtTokenService,
            IPasswordHasher<User> passwordHasher)
        {
            _dbContext = dbContext;
            _jwtTokenService = jwtTokenService;
            _passwordHasher = passwordHasher;
        }

        public async Task<LoginResponseDto> LoginAsync(LoginRequestDto request)
        {
            var normalizedUsername = request.Username.Trim();

            // 1. Load user WITHOUT roles first (faster)
            var user = await _dbContext.Users
                .SingleOrDefaultAsync(u =>
                    u.Username == normalizedUsername &&
                    u.IsActive);

            if (user is null)
                throw new UnauthorizedAccessException("Invalid username or password.");

            // 2. Validate password hash
            var result = _passwordHasher.VerifyHashedPassword(
                user,
                user.PasswordHash,
                request.Password);

            if (result == PasswordVerificationResult.Failed)
                throw new UnauthorizedAccessException("Invalid username or password.");

            // 3. Load roles ONLY after password is confirmed
            await _dbContext.Entry(user)
                .Collection(u => u.UserRoles)
                .Query()
                .Include(ur => ur.Role)
                .LoadAsync();

            // 4. Generate JWT
            var token = _jwtTokenService.GenerateToken(user);

            return new LoginResponseDto
            {
                Token = token,
                ExpiresAt = DateTime.UtcNow.AddMinutes(60)
            };
        }
    }
}
