namespace RuneApi.Models;

public class Rune
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Meaning { get; set; } = default!;
    public string ReversedMeaning { get; set; } = default!;
    public string? History { get; set; } = default!;
    public string ImageUrl { get; set; } = default!;
}
