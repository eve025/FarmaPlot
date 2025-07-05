const CxH = document.getElementById('graficaCxH');

const GraficoCxH = new Chart(CxH, {
    type: 'line', // Tipo de gráfico
    data: {
    labels: [], // Eje X: horas
    datasets: [{
        label: 'Concentración (µg/L)',
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
            text: 'Concentración (µg/L)'
        },
        ticks:{   
            display: true // NO Oculta los números del eje Y
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
        label: 'Concentración (µg/L)',
        data: [], // Eje Y: vida media
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
        text: 'Concentración vs Vida Media'
        }
    },
    scales: {
        x: {
        title: {
            display: true,
            text: 'Vida Media'
        }
        },
        y: {
        title: {
            display: true,
            text: 'Concentración'
        },
        ticks:{   
                display: true // NO Oculta los números del eje Y
            }
        }
    }
    }
});