using System;
using System.Collections.Generic;

namespace TheInternationalHubApi.Models
{
    public partial class Student
    {
        public string WNumber { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Major { get; set; }
        public string Gpa { get; set; }
        public string CountryId { get; set; }

        public Country Country { get; set; }
    }
}
