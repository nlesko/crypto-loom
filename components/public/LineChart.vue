<template>
    <canvas ref="canvas"></canvas>
</template>

<script setup>
import { Line } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler)

const props = defineProps({
    increase: {
        type: Boolean,
        required: true,
    },
    datasets: {
        type: Array,
        required: true,
    },
})

const canvas = ref(null)
const gradient = ref(null)
const gradient2 = ref(null)

onMounted(() => {
    const ctx = canvas.value.getContext('2d')

    gradient.value = ctx.createLinearGradient(0, 0, 0, 450)
    gradient.value.addColorStop(0.1119, 'rgba(95, 223, 146, 0.5)')
    gradient.value.addColorStop(0.1118, 'rgba(95, 223, 146, 0.3)')
    gradient.value.addColorStop(0.93, 'rgba(196, 196, 196, 0)')

    gradient2.value = ctx.createLinearGradient(0, 0, 0, 450)
    gradient2.value.addColorStop(0, 'rgba(255, 189, 189, 0.5)')
    gradient2.value.addColorStop(0.94, 'rgba(196, 196, 196, 0)')

    new Line(canvas.value, {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Data One',
                    borderColor: props.increase ? '#28C165' : '#F4574D',
                    borderWidth: 1,
                    backgroundColor: props.increase ? gradient.value : gradient2.value,
                    data: props.datasets,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            elements: {
                point: {
                    radius: 0,
                },
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItem) => {
                        return tooltipItem.yLabel
                    },
                },
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            display: false,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    },
                ],
                xAxes: [
                    {
                        ticks: {
                            display: false,
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false,
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    },
                ],
            },
        },
    })
})
</script>