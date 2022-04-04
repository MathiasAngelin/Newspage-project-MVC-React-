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


        
        public IActionResult NewsPage(Guid articleId)
        {
            var articleById = Service.Services.ArticleService.Instance.GetById(articleId);
            ViewData["articleId"] = articleById;
            return View();
        }
    }
}