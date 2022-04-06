using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;

namespace mvc.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticlesController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListAllArticles()
        {
            try
            {
            var articleListDTO = ArticleService.Instance.GetAllArticles();
                return Ok(articleListDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            
        }

        [HttpPost]
        public IActionResult CreateArticle([FromBody] CreateArticleDTO articleDTO)
        {
            try
            {
            ArticleService.Instance.CreateArticle(articleDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetArticleById(Guid id)
        {
            try
            {
            var article = ArticleService.Instance.GetById(id);
            return Ok(article);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateArticle(UpdateArticleDTO article)
        {
            try
            {
                ArticleService.Instance.UpdateArticle(article);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteArticle(Guid id)
        {
            try
            {
            ArticleService.Instance.DeleteArticle(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        

    }
}
