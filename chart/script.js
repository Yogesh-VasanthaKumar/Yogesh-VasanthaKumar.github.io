
const ctx = document.getElementById('real-time-chart').getContext('2d');
const initialData = {
    labels: [],
    datasets: [{
        label: 'Elapsed Time (seconds)',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
    }],
};

const config = {
    type: 'line',
    data: initialData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            },
        },
    },
};

const realTimeChart = new Chart(ctx, config);

let elapsedTime = 0; 


function addDataPoint() {
    elapsedTime++;
    realTimeChart.data.labels.push(elapsedTime);
    realTimeChart.data.datasets[0].data.push(elapsedTime);


    if (realTimeChart.data.labels.length > 20) {
        realTimeChart.data.labels.shift();
        realTimeChart.data.datasets[0].data.shift();
    }

    realTimeChart.update();
}


setInterval(addDataPoint, 1000);
