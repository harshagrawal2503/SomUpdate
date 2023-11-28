const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 6, max: 16 } }],
        },
        title: {
            display: true,
            text: 'Line Graph',
            fontSize: 20
        }
    }
});

$(window).on('load', function () {
    $('.preloader').fadeOut('slow');
});



// Initialize the Chart.js context
var ctx = document.getElementById('temperatureChart').getContext('2d');

// Initialize the initial data
var data = {
    labels: [],
    datasets: [{
        label: 'Temperature',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Initialize the chart with the initial data
var temperatureChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the graph with new data
function updateGraph() {
    // Simulate fetching temperature data (replace this with your actual data retrieval logic)
    var newTemperature = (Math.random() * (26 - 22) + 22).toFixed(2); // Generate random temperature between 10°C and 40°C
    var currentTime = new Date().toLocaleTimeString();

    // Add new data to the chart
    temperatureChart.data.labels.push(currentTime);
    temperatureChart.data.datasets[0].data.push(newTemperature);

    // Remove the oldest data point if there are more than 10 data points
    if (temperatureChart.data.labels.length > 10) {
        temperatureChart.data.labels.shift();
        temperatureChart.data.datasets[0].data.shift();
    }

    // Update the chart
    temperatureChart.update();
}

// Update the graph every 6 seconds
setInterval(updateGraph, 6000);
