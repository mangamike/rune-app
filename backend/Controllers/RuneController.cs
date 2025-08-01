using Microsoft.AspNetCore.Mvc;
using RuneApi.Models;

namespace RuneApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RunesController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<Rune>> Get()
    {
        // Sample static data; we can load this from DB or file later
        var runes = new List<Rune>
        {
            new Rune { Id = 1, Name = "Fehu", Meaning = "Wealth, abundance", ReversedMeaning = "Loss, instability", History = "Fehu represents cattle, a source of wealth in ancient Norse society.", ImageUrl = "/assets/runes/fehu.png" },
            // Add all 24 runes
        };

        return Ok(runes);
    }
}
