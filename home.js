const arr = [[], [], [], [], []]

const valueFinal1 = 0;
const valueFinal2 = 0;
const valueFinal3 = 0;
const valueFinal4 = 0;
const valueFinal5 = 0;

function submitp(){
    var iValue = document.getElementById('quant').value;
    var quant = Number(iValue);

    document.getElementById('fmList').onsubmit = function(){
        let frmList = document.getElementById('fmList').elements;
        console.log(frmList['listMonth'].value);

        var sumM1 = 0;
        var sumM2 = 0;
        var sumM3 = 0;
        var sumM4 = 0;
        var sumM5 = 0;

        if(frmList['listMonth'].value == 'Jan'){
            arr[0].push(quant);
            sumM1 = arr[0].reduce((a,b) => a+b,0);
            myChart.data.datasets[0].data[0]=sumM1
            myChart.update();
        }

        if(frmList['listMonth'].value == 'Feb'){
            arr[1].push(quant);
            sumM2 = arr[1].reduce((a,b) => a+b,0);
            myChart.data.datasets[0].data[1]=sumM2
            myChart.update();
        }

        if(frmList['listMonth'].value == 'Mar'){
            arr[2].push(quant);
            sumM3 = arr[2].reduce((a,b) => a+b,0);
            myChart.data.datasets[0].data[2]=sumM3
            myChart.update();
        }

        if(frmList['listMonth'].value == 'Abr'){
            arr[3].push(quant);
            sumM4 = arr[3].reduce((a,b) => a+b,0);
            myChart.data.datasets[0].data[3]=sumM4
            myChart.update();
        }

        if(frmList['listMonth'].value == 'May'){
            arr[4].push(quant);
            sumM5 = arr[4].reduce((a,b) => a+b,0);
            myChart.data.datasets[0].data[4]=sumM5
            myChart.update();
        }

    console.log(arr)


    // update data in chart.js

    // myChart.data.datasets[0].data[0] = valueFinal1;
    // myChart.data.datasets[0].data[1] = valueFinal2;
    // myChart.data.datasets[0].data[2] = valueFinal3;
    // myChart.data.datasets[0].data[3] = valueFinal4;
    // myChart.data.datasets[0].data[4] = valueFinal5;

    myChart.update();

    return false;

    }
}


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Expenses in the Month',
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});