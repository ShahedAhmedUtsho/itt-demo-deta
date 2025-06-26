const data = {
  // 🔹 Filter Info (Selected by Admin)
  start_date: "2025-05-01",
  end_date: "2025-05-31",

  // 1. Top Metrics
  summary: {
    total_partners: 4544,
    most_active_partners: 4544,
    new_enrollment_requests: 4544,
    total_tickets: 4544,
    new_tickets: 4544,
    open_tickets: 4544,
    closed_tickets: 4544,
    response_time: "45m",
    booking_in_progress: 9999,
    tickets_in_process: 9999,
    total_sales: 12345678,
    total_casework: 12345678,
    void_pending: 204,
    refund_pending: 204,
    no_response_pending: 204
  },

  // 2. Monthly Growth (filtered)
  monthly_growth: [
    {
      category: "airlines",
      data: [
        {
          rank: 1,
          value: 40000,
          uid: "uid_air_1",
          partner: "Partner A",
          photo_url: "/images/partners/bkash.png"
        },
        {
          rank: 2,
          value: 35000,
          uid: "uid_air_2",
          partner: "Partner B",
          photo_url: "/images/partners/nagad.png"
        }
      ]
    },
    {
      category: "hotels",
      data: [
        {
          rank: 1,
          value: 25000,
          uid: "uid_hotel_1",
          partner: "Hotel X",
          photo_url: "/images/partners/hotelx.png"
        }
      ]
    },
    {
      category: "activities",
      data: [
        {
          rank: 1,
          value: 18000,
          uid: "uid_act_1",
          partner: "Safari Tours",
          photo_url: "/images/partners/safari.png"
        }
      ]
    }
  ],

  // 3. Recent Orders
  recent_orders: [
    {
      product: "ABC Tour",
      status: "Delivered",
      from: "Dhaka",
      to: "Thakurgaon",
      date: "2024-05-18",
      partner: "Mrinmoy K",
      revenue: "BDT 40,000",
      booked_by: "Mithun"
    }
  ],

  // 4. Recent Transactions
  recent_transactions: [
    {
      method: "Master Card",
      masked: "****2730",
      type: "Online Transaction",
      amount: "$1,744.00",
      date: "2024-05-18"
    },
  ],

  // 5. Agent Locations (map markers)
  agent_locations: {
    markers: [
      {
        uid: "agent1",
        name: "Canada",
        coordinates: [-106.3468, 56.1304],
        color: "#78f0c0"
      },
    ]
  },

  // 6. Recent Activity Timeline
  recent_activity: [
    { time: "10:35 AM", activity: "Client meeting with Mrinmoy Krishna" },
  ]
}
