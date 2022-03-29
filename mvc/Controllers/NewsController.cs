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
            ViewData["pinned"] = pinnedArticles;
            return View();
        }

        //[HttpGet]
        //public IActionResult GetPinned()
        //{
        //    var pinnedArticles = Service.Services.ArticleService.Instance.GetPinnedArticles();
        //    return View(pinnedArticles);
        //}

        [HttpGet("news/{Id:Guid}-{articleName}")]
        public IActionResult News(string articleId, string articleTitle)
        {
            return View();
        }
    }
}