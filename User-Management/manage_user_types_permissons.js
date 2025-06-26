// just a demo data  , add yours formate , add more porperties if need, ignore the unwanted properties 
const permissions = [
  {
    title: "Search",
    permissions: [
      { name: "Search Flight", active: true },
      { name: "Search Hotel", active: true },
      { name: "Book Hotel", active: true },
      { name: "Book Flight", active: true },
    ],
  },
  {
    title: "Booking Management",
    permissions: [
      { name: "View Booking List", active: true },
      { name: "View Booking Details", active: false },
      { name: "Cancel Flight Booking", active: false },
      { name: "Cancel Hotel Booking", active: true },
      { name: "Issue Flight Ticket", active: true },
      { name: "Issue Hotel Voucher", active: true },
    ],
  },
  {
    title: "Finance & Billing",
    permissions: [
      { name: "View Invoices", active: true },
      { name: "View Transactions", active: true },
    ],
  },
  {
    title: "User Management",
    permissions: [
      { name: "Reset Password By Email", active: true },
      { name: "Modify Own Profile", active: true },
      { name: "Change Own Password", active: true },
      { name: "Modify My Profile", active: true },
      { name: "Change Users Password", active: true },
      { name: "View Users List", active: true },
      { name: "Create New User", active: true },
    ],
  },
  {
    title: "Partner or Agent Management",
    permissions: [
      { name: "View Partner Profile", active: true },
      { name: "Update Partner Profile", active: false },
    ],
  },
  {
    title: "Support Ticket",
    permissions: [{ name: "View Support Ticket", active: true }],
  },
  {
    title: "Payment Gateway",
    permissions: [{ name: "Create Payment Link", active: false }],
  },
  {
    title: "Other Services",
    permissions: [
      { name: "View Tours", active: true },
      { name: "View Visa Service", active: true },
    ],
  },
];