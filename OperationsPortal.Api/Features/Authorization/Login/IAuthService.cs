using OperationsPortal.Api.Features.Authorization.Login;

public interface IAuthService
{
    Task<LoginResponseDto> LoginAsync(LoginRequestDto request);
}
