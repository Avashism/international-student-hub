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
  public class StudentsController : ControllerBase

  {
    private readonly testdatabaseContext dbcontext;
    public StudentsController(testdatabaseContext dbcontext)
    {
      this.dbcontext = dbcontext;
    }


    [HttpGet]
    public async Task<ActionResult<IEnumerable<Student>>> Getstudent()
    {
      var students = dbcontext.Set<Student>();
      var data = await students.ToArrayAsync();
      return data;
    }

    // GET api/<controller>/5
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

    //[HttpGet("{GPA}")]
    //public async Task<ActionResult<IEnumerable<Student>>> GetGPA(String GPA)
    //{
    //  var student = dbcontext.Set<Student>().Where(x => x.Gpa== GPA);
    //  var studentdata = await student.ToArrayAsync();
    //  return studentdata;
    //}
    // POST api/<controller>
    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
