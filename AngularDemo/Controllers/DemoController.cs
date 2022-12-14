using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
namespace AngularDemo.Controllers;

[ApiController]
[Route("[controller]")]

public class DemoController: ControllerBase
{
    public string name {get;set;}
    public string email {get;set;}

    [HttpGet]

    public List<DemoController> FetchSampleData()
    {
         var users= new List<DemoController>()
         {
             new DemoController(){ name= "harry", email= "hellhero122@gmail.com"},
             new DemoController(){ name= "harry", email= "hp122@gmail.com"}
         };

         var result= (from s in users
                     where s.name == "harry"
                     select s).ToList();

         return result;
    }
}