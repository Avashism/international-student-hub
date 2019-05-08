using System;
using System.Collections.Generic;

namespace TheInternationalHubApi.Models
{
    public partial class Country
    {
        public Country()
        {
            Student = new HashSet<Student>();
        }

        public string CountryId { get; set; }
        public string Name { get; set; }

        public ICollection<Student> Student { get; set; }
    }
}
