const CxH = document.getElementById('graficaCxH');

const GraficoCxH = new Chart(CxH, {
    type: 'line', // Tipo de gráfico
    data: {
    labels: [], // Eje X: horas
    datasets: [{
        label: 'Concentración (mg/L)',
        data: [], // Eje Y: concentración
        borderColor: 'violet',
        fill: false,
        tension: 0.3
    }]
    },
    options: {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'Concentración del fármaco vs Horas'
        }
    },
    scales: {
        x: {
        title: {
            display: true,
            text: 'Horas'
        }
        },
        y: {
        title: {
            display: true,
            text: 'Concentración (mg/L)'
        },
        ticks:{   
            display: false // Oculta los números del eje Y
        }
        }
    }
    }
});

const VMxH = document.getElementById('graficaVMxH');
const GraficVMxH = new Chart(VMxH, {
    type: 'line', // Tipo de gráfico
    data: {
    labels: [], // Eje X: horas
    datasets: [{
        label: 'Vida media',
        data: [], // Eje Y: concentración
        borderColor: 'violet',
        fill: false,
        tension: 0.3
    }]
    },
    options: {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'Vida Media vs Horas'
        }
    },
    scales: {
        x: {
        title: {
            display: true,
            text: 'Horas'
        }
        },
        y: {
        title: {
            display: true,
            text: 'Vida Media'
        },
        ticks:{   
            display: false // Oculta los números del eje Y
        }
        }
    }
    }
});