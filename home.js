/**
 ** A classe Date fornece muitos métodos para representar a Date no formato preferido, como por exemplo:

        getDate() retorna o dia do mês civil de 1 a 31 naquele momento.
        getMonth() retorna o número do mês 0 a 11 naquele momento.
        getFullYear() retorna o ano no formato de 4 dígitos.
        getHours() retorna a hora exata no formato 24 horas para aquela hora.
        getMinutes() retorna os minutos exatos de 0 a 59 naquele momento.
        getSeconds() retorna os segundos exatos de 0 a 59 naquele momento.
 */

//! createdAt:  2021-09-27T15:00:26.218+00:00
//! createdAt:  2022-06-14T15:18:53.053+00:00

/**
    var mDate = new Date("2021-09-27T15:00:26.218+00:00")
    undefined

    mDate
    Mon Sep 27 2021 12:00:26 GMT-0300 (Hora padrão de Brasília)

    mDate.getDate()
    27

    mDate.getMonth()+1
    9
        
    mDate.getFullYear()
    2021
 * 
 */

    

/**
 * * Funct para transformar a data q vem do banco em data visual para depois pegarmos o timestamp

    function formaData(data){
        var mDate = new Date(data)
        var dia = mDate.getDate()
        var mes = mDate.getMonth()+1
        var ano = mDate.getFullYear()
        
        // var dataFormatada = `${dia}-${mes}-${ano}`
        //* no back esta ano-mes-dia
        var dataFormatada = `${ano}-${mes}-${dia}`

        return dataFormatada
    }

*/

/**
 * 
    dadosApi.forEach((data) => { console.log(data) })
    VM913:1 {name: 'ana', timestamp: '2022-06-14T15:18:53.053+00:00', valoresCal: Array(4)}name: "ana"timestamp: "2022-06-14T15:18:53.053+00:00"valoresCal: (4) [7, 8, 3, 10][[Prototype]]: Object
    VM913:1 {name: 'pedro', timestamp: '01/09/2021', valoresCal: Array(4)}
    VM913:1 {name: 'joana', timestamp: '01/08/2021', valoresCal: Array(4)}
    VM913:1 {name: 'joanna', timestamp: '01/07/2021', valoresCal: Array(4)}
    VM913:1 {name: 'rodrigo', timestamp: '01/06/2021', valoresCal: Array(4)}
    VM913:1 {name: 'raphael', timestamp: '01/05/2021', valoresCal: Array(4)}
    VM913:1 {name: 'bianca', timestamp: '01/04/2021', valoresCal: Array(4)}
    VM913:1 {name: 'fabricio', timestamp: '01/03/2021', valoresCal: Array(4)}
    VM913:1 {name: 'ivany', timestamp: '01/02/2021', valoresCal: Array(4)}
    VM913:1 {name: 'marcelo', timestamp: '01/01/2021', valoresCal: Array(4)}
    undefined
 */



// dadosApi.forEach((data) => {
    
//     let datasArray = [];
//     var mDate = new Date(data.timestamp)
//     var dia = mDate.getDate()
//     var mes = mDate.getMonth()+1
//     var ano = mDate.getFullYear()
    
//     // var dataFormatada = `${dia}-${mes}-${ano}`
//     //* no back esta ano-mes-dia
//     var dataFormatada = `${ano}-${mes}-${dia}`
//     datasArray.push(dataFormatada)
    
//     var myDate = dataFormatada;
//     myDate = myDate.split("-");
//     var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
//     var meuTimestampAtual = newDate.getTime(); // 1655175600000 = 14-06-2022
//     datasArray.push(+meuTimestampAtual)
    
//     data.timestamp = datasArray
//     console.log(data)
    
// })



// function formaData(data){
//     let datasArray = [];
//     var mDate = new Date(data.timestamp)
//     var dia = mDate.getDate()
//     var mes = mDate.getMonth()+1
//     var ano = mDate.getFullYear()
    
//     // var dataFormatada = `${dia}-${mes}-${ano}`
//     //* no back esta ano-mes-dia
//     var dataFormatada = `${ano}-${mes}-${dia}`
//     datasArray.push(dataFormatada)
    
//     var myDate = dataFormatada;
//     myDate = myDate.split("-");
//     var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
//     var meuTimestampAtual = newDate.getTime(); // 1655175600000 = 14-06-2022
//     datasArray.push(meuTimestampAtual)

//     return datasArray
// }







// //* Date para timestamp
// var myDate = "14-06-2022";
// myDate = myDate.split("-");
// var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
// console.log(newDate.getTime()); // 1655175600000 = 14-06-2022

// //* timestamp para Date
// const currentDate = new Date(1535655600000);

// const currentDayOfMonth = currentDate.getDate();
// const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
// const currentYear = currentDate.getFullYear();

// const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// // "30-08-2018" = 30 August 2018




/**
 ** Calculando os valores de um array
 
    var total = 0;
    var numeros = [1, 2, 3, 4, 5, 6];
    for ( var i = 0; i < numeros.length; i++ ){
    total += numeros[i];
    }
    console.log(total);

**      ou

    var numeros = [1, 2, 3, 4, 5, 6];
    var total = numeros.reduce((total, numero) => total + numero, 0);
    console.log(total);

 */





/**
        var MinhaStamp = new Date(formaData("Mon Sep 27 2021 12:00:26 GMT-0300 (Hora padrão de Brasília)"))
           < undefined
        MinhaStamp.getTime()
           < 1632711600000
*/

/**
        const currentDate = new Date(1535655600000);
        console.log(currentDate) / = Thu Aug 30 2018 16:00:00 GMT-0300 (Hora padrão de Brasília) {}
 */








        let dadosApi = [
            {
                name: "ana" ,
                timestamp: "2021-09-27T15:00:26.218+00:00",
                valoresCal: [7,8,3,10]
            },
            {
                name: "pedro" ,
                timestamp: "2022-06-14T15:18:53.053+00:00",
                valoresCal: [11,9,12,8]
            },
            {
                name: "joana" ,
                timestamp: "2021-05-27T15:00:26.218+00:00",
                valoresCal: [1,25,13,0]
            },
            {
                name: "joanna" ,
                timestamp: "2022-04-14T15:18:53.053+00:00",
                valoresCal: [9,8,3,3]
            },
            {
                name: "rodrigo" ,
                timestamp: "2021-03-27T15:00:26.218+00:00",
                valoresCal: [14,6,12,5]
            },
            {
                name: "raphael" ,
                timestamp: "2022-02-14T15:18:53.053+00:00",
                valoresCal: [1,5,8,3]
            },
            {
                name: "bianca" ,
                timestamp: "2021-01-27T15:00:26.218+00:00",
                valoresCal: [8,9,1,3]
            },
            {
                name: "fabricio" ,
                timestamp: "2022-06-14T15:18:53.053+00:00",
                valoresCal: [5,2,4,1]
            },
            {
                name: "ivany" ,
                timestamp: "2021-09-27T15:00:26.218+00:00",
                valoresCal: [8,1,32,1]
            },
            {
                name: "marcelo" ,
                timestamp: "2022-06-14T15:18:53.053+00:00",
                valoresCal: [6,2,13,8]
            },
        ]
        
        
        // * Pega os dados objetos e coloca o timestamp e data em um array
        dadosApi.forEach((data) => {
            
            let datasArray = [];
            var mDate = new Date(data.timestamp)
            var dia = mDate.getDate()
            var mes = mDate.getMonth()+1
            var ano = mDate.getFullYear()
            
            // var dataFormatada = `${dia}-${mes}-${ano}`
            //* no back esta ano-mes-dia
            var dataFormatada = `${ano}-${mes}-${dia}`
            datasArray.push(dataFormatada)
            
            var myDate = dataFormatada;
            myDate = myDate.split("-");
            var newDate = new Date( myDate[2], myDate[1]-1, myDate[0]);
            var meuTimestampAtual = newDate.getTime(); // 1655175600000 = 14-06-2022
            datasArray.push(meuTimestampAtual*-1)
            
            data.timestamp = datasArray
            console.log(data)
            
        })
        
        
        
        // * data atual ['2022-6-20', 1390165200000]
        function datahoje() {
            let dataAtual = [];
            var mDate = new Date()
            var dia = mDate.getDate()
            var mes = mDate.getMonth()+1
            var ano = mDate.getFullYear()
            
            var dataFormatada = `${ano}-${mes}-${dia}`
            dataAtual.push(dataFormatada)
            
            var myDate = dataFormatada;
            myDate = myDate.split("-");
            var newDate = new Date( myDate[2], myDate[1]-1, myDate[0]);
            var meuTimestampAtual = newDate.getTime(); // 1655175600000 = 14-06-2022
            dataAtual.push(meuTimestampAtual*-1)
            
            console.log(dataAtual)
            return dataAtual
        }
        
        
        
        
        // * Datas proximas
        function esseMes(){
        
            console.log("dadosApi",dadosApi)
        
            console.log("test",dadosApi[0].timestamp[1])
            
            dataAtual=datahoje()
            console.log(dataAtual[1])
            umMesTStamp = 2678400000 * 1;
            doisMesTStamp = 2678400000 * 2;
            tresMesTStamp = 2678400000 * 3;
            quatroMesTStamp = 2678400000 * 4;
            cincoMesTStamp = 2678400000 * 5;
            seisMesTStamp = 2678400000 * 6;
        
            if(dataAtual[1]<=dataAtual[1]+umMesTStamp) {
                console.log(dadosApi)
            }
        
            dadosApi.forEach(data => console.log("feach",data))
        
        }
        esseMes()
        
        
        
        // ? testando
        dadosApi.forEach((data) => {
            let umMesTStamp = 2678400000;
            let timeDoObj = data.timestamp[1]
            if(dataAtual[1]<= timeDoObj && timeDoObj >= dataAtual[1]+umMesTStamp) {
                console.log("um",data)
            }
            if(dataAtual[1]-umMesTStamp<= timeDoObj && timeDoObj >= dataAtual[1]-doisMesTStamp) {
                console.log("dois",data)
            }
            if(dataAtual[1]-doisMesTStamp<= timeDoObj && timeDoObj >= dataAtual[1]-tresMesTStamp) {
                console.log("tres",data)
            }
            if(dataAtual[1]-tresMesTStamp<= timeDoObj && timeDoObj >= dataAtual[1]-quatroMesTStamp) {
                console.log("quatro",data)
            }
            if(dataAtual[1]-quatroMesTStamp<= timeDoObj && timeDoObj >= dataAtual[1]-cincoMesTStamp) {
                console.log("cinco",data)
            }
            if(dataAtual[1]-cincoMesTStamp<= timeDoObj && timeDoObj >= dataAtual[1]-seisMesTStamp) {
                console.log("seis",data)
            }
            
        })
        
            
        
        
        
        
        
        
        // TODO ----------------------------------------------------------------
        
        
        const arr = [[], [], [], [], [], [], [], [], [], [], [], []]
        
        const valueFinal1 = 0;
        const valueFinal2 = 0;
        const valueFinal3 = 0;
        const valueFinal4 = 0;
        const valueFinal5 = 0;
        const valueFinal6 = 0;
        const valueFinal7 = 0;
        const valueFinal8 = 0;
        const valueFinal9 = 0;
        const valueFinal10 = 0;
        const valueFinal11 = 0;
        const valueFinal12 = 0;
        
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
                var sumM6 = 0;
                var sumM7 = 0;
                var sumM8 = 0;
                var sumM9 = 0;
                var sumM10 = 0;
                var sumM11 = 0;
                var sumM12 = 0;
        
                if(frmList['listMonth'].value == 'Jan'){
                    arr[0].push(quant);
                    sumM1 = arr[0].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[0]=sumM1
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Fev'){
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
        
                if(frmList['listMonth'].value == 'Maio'){
                    arr[4].push(quant);
                    sumM5 = arr[4].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[4]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Jun'){
                    arr[5].push(quant);
                    sumM5 = arr[5].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[5]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Jul'){
                    arr[6].push(quant);
                    sumM5 = arr[6].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[6]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Ago'){
                    arr[7].push(quant);
                    sumM5 = arr[7].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[7]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Set'){
                    arr[8].push(quant);
                    sumM5 = arr[8].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[8]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Out'){
                    arr[9].push(quant);
                    sumM5 = arr[9].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[9]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Nov'){
                    arr[10].push(quant);
                    sumM5 = arr[10].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[10]=sumM5
                    myChart.update();
                }
        
                if(frmList['listMonth'].value == 'Dez'){
                    arr[11].push(quant);
                    sumM5 = arr[11].reduce((a,b) => a+b,0);
                    myChart.data.datasets[0].data[11]=sumM5
                    myChart.data.labels[0] = 'Dez'
                    myChart.update();
                }
        
            console.log(arr)
        
            // update data in chart.js
            // myChart.data.datasets[0].data[0] = valueFinal1;
            // myChart.data.datasets[0].data[1] = valueFinal2;
            // myChart.data.datasets[0].data[2] = valueFinal3;
            // myChart.data.datasets[0].data[3] = valueFinal4;
            // myChart.data.datasets[0].data[4] = valueFinal5;
            // myChart.update();
        
            return false;
        
            }
        }
        
        //* let MyArray = ['Dez', 'Nov', 'Out', 'Set', 'Ago','Jul','Jun','Maio','Abr','Mar','Fev','Jan']
        let MyArray = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio','Jun','Jul','Ago','Set','Out','Nov','Dez']
        //* valores contabilizacao
        let DadosGraf = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        
        
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                // labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                labels: MyArray,
                datasets: [{
                    label: 'Expenses in the Month',
                    // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    data: DadosGraf,
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