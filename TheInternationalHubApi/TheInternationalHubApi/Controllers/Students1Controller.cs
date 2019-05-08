using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheInternationalHubApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheInternationalHubApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class Students1Controller : ControllerBase

  {
    private readonly testdatabaseContext dbcontext;
    public Students1Controller(testdatabaseContext dbcontext)
    {
      this.dbcontext = dbcontext;
    }

    
   

    [HttpGet("{Name}")]
    public async Task<ActionResult<IEnumerable<Student>>> Gets(String Name)
    {
      var student = dbcontext.Set<Student>().Where(x => x.Name == Name);
      var studentdata = await student.ToArrayAsync();
      return studentdata;
    }


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
