using OperationsPortal.Api.Models;

public interface IJwtTokenService
{
    string GenerateToken(User user);
}
