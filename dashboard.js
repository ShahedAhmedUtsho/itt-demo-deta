const data = {
  // 🔹 Filter Info (Selected by Admin)
  startDate: "2025-05-01",
  endDate: "2025-05-31",

  // 1. Top Metrics
  summary: {
    totalPartners: 4544,
    mostActivePartners: 4544,
    newEnrollmentRequests: 4544,
    totalTickets: 4544,
    newTickets: 4544,
    openTickets: 4544,
    closedTickets: 4544,
    responseTime: "45m",
    bookingInProgress: 9999,
    ticketsInProcess: 9999,
    totalSales: 12345678,
    totalCasework: 12345678,
    voidPending: 204,
    refundPending: 204,
    noResponsePending: 204
  },

  // 2. Monthly Growth (filtered)
  // there are total 5 category 
  monthlyGrowth: [
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
  recentOrders: [
    {
      product: "ABC Tour",
      status: "Delivered",
      from: "Dhaka",
      to: "Thakurgaon",
      date: "2024-05-18",
      partner: "Mrinmoy K",
      revenue: "BDT 40,000",
      bookedBy: "Mithun"
    }
  ],

  // 4. Recent Transactions
  recentTransactions: [
    {
      method: "Master Card",
      masked: "****2730",
      type: "Online Transaction",
      amount: "$1,744.00",
      date: "2024-05-18"
    },
    
  ],

  // 5. Agent Locations (map markers)
  agentLocations: {
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
  recentActivity: [
    { time: "10:35 AM", activity: "Client meeting with Mrinmoy Krishna" },
   
  ]
}