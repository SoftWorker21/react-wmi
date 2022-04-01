using System;

namespace wmi_app
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string VehicleType { get; set; }
        public string WMI { get; set; }
        
        public DateTime CreatedOn { get; set; }
        public DateTime DateAvailableToPublic { get; set; }
        #nullable enable
        public string? Country { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
