using OperationsPortal.Api.Models;

namespace OperationsPortal.Api.Infrastructure.Security
{
    public interface IJwtTokenService
    {
        string GenerateToken(User user);
    }
}