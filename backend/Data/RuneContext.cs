using Microsoft.EntityFrameworkCore;
using RuneApi.Models;

public class RuneContext : DbContext
{
    public RuneContext(DbContextOptions<RuneContext> options) : base(options) { }

    public DbSet<Rune> Runes { get; set; }
}
