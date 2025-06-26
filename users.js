
// this is just demo , do like your data stracture , add more properties   , Meta fild for pagination 
const apiResponse = {
  data: [
    {
      uid: 101,
      name: "john_doe",
      email: "john.doe@example.com",
      partner: "acme_corp",
      user_type: "admin",
      mobile: "+1234567890",
      country: "usa",
      ip_address: "192.168.1.10",
      last_login: "2024-06-10T14:23:00Z",
      login_device: "web",
      status: "active",
      created_at: "2024-01-15T09:30:00Z",
      updated_at: "2024-06-10T14:23:00Z"
    },
  
  ],
  meta: {
    total_items: 5,
    total_pages: 2,
    current_page: 1,
    per_page: 3,
    has_next: true,
    has_prev: false,
  }
};
