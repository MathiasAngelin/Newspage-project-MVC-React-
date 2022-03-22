using Microsoft.AspNetCore.Mvc;

namespace mvc.Controllers
{
    public class NewsController : Controller
    {
        private readonly ILogger<NewsController> _logger;

        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
        }

        public IActionResult StartPage()
        {
            return View();
        }

        public IActionResult News(string articleId, string articleTitle)
        {
            return View();
        }
    }
}