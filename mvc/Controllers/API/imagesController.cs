using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace mvc.Controllers.API
{
    [Route("api/images")]
    [ApiController]
    public class ImageController : ControllerBase
    {

        [HttpPost]
        public IActionResult UploadImage()
        {
            try
            {
                Service.Services.ImageService.Instance.Upload(Request.Form.Files[0]);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetImages()
        {
            return Ok(Service.Services.ImageService.Instance.GetAll());
        }
    }
}