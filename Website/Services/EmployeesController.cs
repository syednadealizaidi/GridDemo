using Demo.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Website.Services
{
    public class EmployeesController : EntitySetControllerBase<Employee>
    {
        //You can override for you logics here
        public override IQueryable<Employee> Get()
        {
            return base.Get();
        }
    }
}