// just a demo data , add yours , add more porperties if need, ignore the unwanted properties 


const userActivityResponse = {
  data: {
    user: {
      id: "u_nsn123",
      member_code: "NSN",
      full_name: "john_doe",
      display_name: "John Doe",
      partner_id: "partner_789",
      partner_name: "acme_corp"
    },
    activity: {
     
      login_time: "2023-10-01T12:00:00+05:30", 
      logout_time: null, 
      ip_address: "123.123.123.123",
      geo_location: {
        city: "Dhaka",
        country: "Bangladesh",
        postal_code: "1212",
        coordinates: {
          lat: 23.8103,  // not important
          lon: 90.4125  // not important
        }
      },
      device: {
        platform: "windows",
        os_version: "10.0.19045", // not important
        browser: "google_chrome", // need 
        browser_version: "116.0.5845.141", // not important
        device_type: "desktop" // need
      },
      activity_status: "active",

     
    }
  },
  meta: {
    total_items: 5,
    total_pages: 2,
    current_page: 1,
    per_page: 3,
    has_next: true,
    has_prev: false,
  }
};