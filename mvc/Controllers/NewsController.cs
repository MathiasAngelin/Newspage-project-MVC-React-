using Microsoft.AspNetCore.Mvc;
using Service;
using Service.Models;
using Microsoft.AspNetCore.Http.Extensions;


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


        
        public IActionResult NewsPage(Guid articleid)
        {
            var articleById = Service.Services.ArticleService.Instance.GetById(articleid);
            ViewData["articleId"] = articleById;
            return View();
        }

        [HttpPost]
        public IActionResult NewsPage(CreateCommentDTO CommentDTO)
        {
            Service.Services.ArticleService.Instance.AddComment(CommentDTO);
            return Redirect(@"https://localhost:7208/");
        }
    }
}