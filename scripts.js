document.addEventListener("DOMContentLoaded", function () {
  
  // Chart 1: User Account Demographics by Role (Pie)
  const ctxRoles = document.getElementById('userRolesChart');
  new Chart(ctxRoles, {
    type: 'pie',
    data: {
      labels: ['Customer', 'Booking Staff', 'Venue Owner', 'Platform Admin'],
      datasets: [{
        label: 'Active Accounts',
        data: [30, 25, 20, 5],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 15 }
        }
      }
    }
  });

  // Chart 2: Fulfillment Status Breakdown (Doughnut)
  const ctxStatus = document.getElementById('bookingStatusChart');
  new Chart(ctxStatus, {
    type: 'doughnut',
    data: {
      labels: ['Completed Slots', 'Upcoming Bookings', 'Cancellations', 'No-Shows / Disputes'],
      datasets: [{
        label: 'Total Instances',
        data: [40, 30, 20, 10], 
        backgroundColor: ['#198754', '#0dcaf0', '#6c757d', '#fd7e14'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { boxWidth: 12, padding: 15 }
        }
      }
    }
  });

  // Chart 3: Peak Reservation Timeslots (Bar)
  const ctxTimeslots = document.getElementById('peakTimeslotsChart');
  new Chart(ctxTimeslots, {
    type: 'bar',
    data: {
      labels: ['8am-10am', '10am-12pm', '12pm-2pm', '2pm-4pm', '4pm-6pm', '6pm-8pm', '8pm-10pm'],
      datasets: [{
        label: 'Weekly Reservations Confirmed',
        data: [15, 25, 35, 45, 30, 20, 10], 
        backgroundColor: 'rgba(13, 110, 253, 0.85)',
        borderColor: '#0d6efd',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#e9ecef' }
        },
        x: {
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
});
