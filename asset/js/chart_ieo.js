
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['CurrentRoi', 'AVG ATH ROI','AVG CURRENT ROI'],
  ['Binance (22)', 20165.77, 14558.89],
    ['FTX (8)',6761.95,3183.22],
    ['Bitforex (9)', 2782.10,2625.23],
    ['Kucoin (16)',  3044.63,777.34],
    ['Huobi Global (9)',  2633.62,711.52],
    ['AscendEX (14)', 1755.91,591.71],
    ['Gate.io (104)', 1119.79, 414.02],
    ['Bittrex (4)',356.24,186.15],
    ['BitMart (7)',344.71,0],
    ['Bibox (4)',311.12,0],
    ['OKEx (13)',704.56,-3.17],
    ['MEXC Global (12)',665.09,-30.14],
    ['Bgogo (3)',165.44,-41.43],
    ['DiginFinex (3)',337.64,-76.90]
]);

var options = {
  alwaysOutside: true,
  bar: {groupWidth: "100%"},
  height:600,
  animation:{
    easing: 'out',
    duration: 1000,
    startup: true,
  },
  vAxis:{
    // direction:-1//đảo ngược vị trí
    // viewWindowMode: pretty,
  },
  annotations:{
    textStyle:{
      backgroundColor:'#871b47',
      
    },
    alwaysOutside: true,
  },
  chartArea: {height:'75%'},
  colors: ['rgb(124, 181, 236)','rgb(126, 193, 126)'],
  hAxis:{
    format: 'short',
    minValue: 2000,
    maxValue:22000,
    // viewWindow:{
    //   max:22000,
    //   min:2000,
    // }
    // slantedText:true,lật chữ ở trục x
    // slantedTextAngle: '90',
  },
  axisTitlesPosition:'in',
  legend : { position:"none"}
};

var chart = new google.visualization.BarChart(document.getElementById('chart-ieo'));
  chart.draw(data, options);
}