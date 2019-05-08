using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheInternationalHubApi.Models;

namespace TheInternationalHubApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private readonly testdatabaseContext dbcontext;
    public ValuesController(testdatabaseContext dbcontext)
    {
      this.dbcontext = dbcontext;
    }
    // GET api/values
    [HttpGet]
    public ActionResult<IEnumerable<string>> Get()
    {
      return new string[] { "value1", "value2" };
    }

    // GET api/values/5
    [HttpGet("{Wnumber}")]
    public async Task<ActionResult<IEnumerable<Student>>> Get(String Wnumber)
    {
      var abc = dbcontext.Set<Student>().Where(x => x.WNumber == Wnumber);
      var def = await abc.ToArrayAsync();
      return def;

    }

    //[HttpGet("{Name}")]
    //public async Task<ActionResult<IEnumerable<Student>>> Gets(String Name)
    //{
    //  var student = dbcontext.Set<Student>().Where(x => x.Name == Name);
    //  var studentdata = await student.ToArrayAsync();
    //  return studentdata;
    //}


    //[HttpGet("{mGpa}")]
    //public async Task<ActionResult<IEnumerable<Student>>> GetGPA(String mGpa)
    //{
    //  var student = dbcontext.Set<Student>().Where(x => x.Gpa== mGpa);
    //  var studentdata = await student.ToArrayAsync();
    //  return studentdata;
    //}
    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
