using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Services;

namespace mvc.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class imagesController : ControllerBase
    {
        [HttpGet]
        public IActionResult ListAllImages()
        {
            try
            {
                var allPics = ImageService.Instance.GetAll();
                return Ok(allPics);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateImage(IFormFile formFile)
        {
            try
            {
                ImageService.Instance.Upload(formFile);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
