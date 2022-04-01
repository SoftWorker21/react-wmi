using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace wmi_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WMIController: ControllerBase
    {
        public IEnumerable<Manufacturer> Get()
        {
            string json = System.IO.File.ReadAllText("honda_wmi.json");
            IEnumerable<Manufacturer> wmis = JsonConvert.DeserializeObject<IEnumerable<Manufacturer>>(json, new JsonSerializerSettings {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
            });
            return wmis.ToArray();
        }

    }
}
