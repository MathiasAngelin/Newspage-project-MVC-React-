using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;

namespace mvc.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListAllAuthors()
        {
            try
            {
            var AuthorlistDTO = AuthorService.Instance.GetAuthors();
                return Ok(AuthorlistDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
            

        }
        [HttpPost]
        public IActionResult CreateAuthor([FromBody] CreateAuthorDTO createAuthorDTO)
        {
            try
            {
            AuthorService.Instance.CreateAuthor(createAuthorDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetAuthorById(Guid id)
        {
            try
            {
                var author = AuthorService.Instance.GetAuthor(id);
                return Ok(author);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateAuthor(UpdateAuthorDTO author)
        {
            try
            {
                AuthorService.Instance.UpdateAuthor(author);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteAuthor(Guid id)
        {
            try
            {
            AuthorService.Instance.DeleteAuthor(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
