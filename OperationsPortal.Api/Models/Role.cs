namespace OperationsPortal.Api.Models
{
    public class Role
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; } = string.Empty;
        public ICollection<UserRoles> UserRoles { get; set; } = new List<UserRoles>();
    }
}
