using Microsoft.AspNetCore.Mvc;
using Service;


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
           
            var pinnedArticles = Service.Services.ArticleService.Instance.GetPinnedArticles();
            var latestArticles = Service.Services.ArticleService.Instance.GetLatestArticles(5);
            ViewData["latest"] = latestArticles;
            ViewData["pinned"] = pinnedArticles;
            return View();
        }


        [HttpGet("news/{Id:Guid}-{articleName}")]
        public IActionResult News(string articleId, string articleTitle)
        {
            return View();
        }
    }
}