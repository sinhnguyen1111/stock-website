Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
          radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 0.7
          },
          stops: [
              [0, color],
              [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
          ]
      };
  })
});

// Build the chart
Highcharts.chart('myChart', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      colors:[ "#7cb5ec",
        "#5c5c61",
        "#90ed7d",
        "#f7a35c",
        "#8085e9",
        "#f15c80",
        "#e4d354",
        "#2b908f"],
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.2f} %',
              connectorColor: 'silver'
          }
      }
  },
  series: [{
      name: 'Share',
      data: [
          { name: 'Seed round', y:5 },
          { name: 'Strategic round', y: 15.63},
          { name: 'CGO', y: 1.56 },
          { name: 'Liquidity/ Strategic', y: 5 },
          { name: 'DAO Growth Fund', y: 12 },
          { name: 'Platform rewards', y: 35 },
          { name: 'Platfrom builders', y: 10.81 },
          { name: 'DAO Treasury', y: 15 }
      ]
  }]
});
