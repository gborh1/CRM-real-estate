$.exists = function(selector) {
  return $(selector).length > 0;
};
// Color Variables
var blueColor = '#007aff';
var grayColor = '#8e8e93';
var lightBlueColor = '#5ac8fa';
var greenColor = '#34c759';
var redColor = '#ff3b30';
var orangeColor = '#ff9500';
var indigoColor = '#5856d6';
var purpleColor = '#af52de';
var pinkColor = '#ff2d55';

// Labels Style Variable
var labelsStyle = {
  colors: 'rgba(0, 0, 0, 0.4)',
  fontSize: '14px'
}

// Font Family Variable
var InterFont = 'Inter, sans-serif';

/* ========= Chart Style 1 ========= */
if ($.exists("#yooChart1")) {
  var options = {
    chart: {
      type: 'bar',
      height: '316px',
      fontFamily: InterFont,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
      name: 'Product B',
      data: [15, 33, 20, 30, 13, 27, 33, 12]
    }],
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Feb', '08 Jan'],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    },
    // fill: {
    //   opacity: 0.1
    // }
    // plotOptions: {
    //   bar: {
    //     columnWidth: '55%',
    //     endingShape: 'rounded'
    //   },
    // },
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1"), options);
  chart.render();
}
// Chart Style 1-2
if ($.exists("#yooChart1-2")) {
  var options = {
    chart: {
      type: 'bar',
      height: 319,
      fontFamily: InterFont,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [26, 46, 20, 40, 35, 50, 80, 30]
    }, {
      name: 'Product B',
      data: [23, 80, 60, 88, 30, 30, 45, 40]
    }],
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Thu', 'Wed', 'Thu',
        'Fri', 'Sat'
      ],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1-2"), options);
  chart.render();
}
// Chart Style 1-3
if ($.exists("#yooChart1-3")) {
  var options = {
    chart: {
      type: 'bar',
      height: 319,
      fontFamily: InterFont,
      stacked: true,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [15, 33, 20, 80, 13, 27, 33, 12]
    }, {
      name: 'Product B',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug'
      ],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1-3"), options);
  chart.render();
}
// Chart Style 1-4
if ($.exists("#yooChart1-4")) {
  var options = {
    chart: {
      type: 'bar',
      height: 307,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }, {
      name: 'Product B',
      data: [15, 33, 20, 30, 13, 27, 33, 12]
    }],
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Feb', '08 Jan'],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1-4"), options);
  chart.render();
}
// Chart Style 1-5
if ($.exists("#yooChart1-5")) {
  var options = {
    chart: {
      type: 'bar',
      height: 319,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [26, 46, 20, 40, 35, 50, 80, 30]
    }, {
      name: 'Product B',
      data: [23, 80, 60, 88, 30, 30, 45, 40]
    }],
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1-5"), options);
  chart.render();
}
// Chart Style 1-6
if ($.exists("#yooChart1-6")) {
  var options = {
    chart: {
      type: 'bar',
      height: 319,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Product A',
      data: [15, 33, 20, 80, 13, 27, 33, 12]
    }, {
      name: 'Product B',
      data: [44, 55, 41, 67, 22, 43, 21, 49]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor, lightBlueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    }
  };
  var chart = new ApexCharts(document.querySelector("#yooChart1-6"), options);
  chart.render();
}

// Chart Style 1-7
if ($.exists("#yooChart1-7")) {
  var options = {
    chart: {
      type: 'bar',
      height: 150,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    fill: {
      opacity: 0.2,
    },
    series: [{
      name: 'Productiviry',
      data: [44, 55, 41, 67, 22, 43, 21, 49, 44, 55, 41, 70]
    }],
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F'],
      labels: {
        style: labelsStyle
      },
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    colors: [blueColor],
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        endingShape: 'rounded'
      },
    },
    states: {
      // normal: {
      //   filter: {
      //     type: 'lighten',
      //     value: 0.9,
      //   }
      // },
      hover: {
        filter: {
          type: 'none',
          value: 0.5,
        }
      },
      // active: {
      //   allowMultipleDataPointsSelection: false,
      //   filter: {
      //     type: 'lighten',
      //     value: 0,
      //   }
      // },
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1-7"), options);
  chart.render();
}
/* ========= Chart Style 2 ========= */
if ($.exists("#yooChart2")) {
  var options = {
    chart: {
      type: 'radialBar',
      height: 380,
      width: '100%',
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [44, 55, 67, 83],
    plotOptions: {
      radialBar: {
        track: {
          background: '#eaeaea',
          strokeWidth: '90%'
        },
        dataLabels: {
          name: {
            fontSize: '24px',
            offsetY: -5,
          },
          value: {
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.4)',
            offsetY: 0,
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function(w) {
              return 249
            }
          }
        }
      }
    },
    colors: [blueColor, lightBlueColor, orangeColor, grayColor],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0,
        opacityFrom: 1,
        opacityTo: 0.6,
        stops: [0, 100]
      }
    },
    labels: ['Desktop', 'Mobile', 'Tablet', 'Miscellaneous'],
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    responsive: [{
      breakpoint: 1500,
      options: {
        chart: {
          width: '100%',
          height: 'auto'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector("#yooChart2"), options);
  chart.render();
}

// yooChart2-1
if ($.exists("#yooChart2-1")) {
  var options = {
    chart: {
      type: 'radialBar',
      height: 341,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [44, 55, 67, 83],
    plotOptions: {
      radialBar: {
        track: {
          background: '#eaeaea',
          strokeWidth: '90%'
        },
        dataLabels: {
          name: {
            fontSize: '24px',
            offsetY: -5,
          },
          value: {
            fontSize: '14px',
            color: 'rgba(0, 0, 0, 0.4)',
            offsetY: 0,
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function(w) {
              return 249
            }
          }
        }
      }
    },
    colors: [blueColor, lightBlueColor, '#a0a0a4', orangeColor],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 1,
        gradientToColors: ['#2082ed', '#3f89ab', '#a8a8ac', '#e79d35'],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    labels: ['Desktop', 'Mobile', 'Tablet', 'Miscellaneous'],
    stroke: {
      lineCap: 'round'
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart2-1"), options);
  chart.render();
}
/* ========= Chart Style 3 ========= */
if ($.exists("#yooChart3")) {
  var options = {
    chart: {
      type: 'line',
      height: 362,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Desktops",
      data: [17, 46, 40, 56, 54, 65, 74, 95]
    }, {
      name: "Mobile",
      data: [5, 35, 30, 45, 35, 45, 55, 75]
    }, {
      name: "Mobile",
      data: [35, 60, 50, 75, 70, 95, 85, 110]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    colors: [blueColor, lightBlueColor, orangeColor],
    grid: {
      borderColor: '#e5e5e5',
      row: {
        colors: [redColor, 'transparent'], // takes an array which will be repeated on columns
        opacity: 0
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      axisBorder: {
        color: 'transparent',
      }
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [blueColor, greenColor, orangeColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 0
    },
  };

  var chart = new ApexCharts(document.querySelector("#yooChart3"), options);
  chart.render();
}
/* ========= Chart Style 4 ========= */
if ($.exists("#yooChart4")) {
  var options = {
    chart: {
      type: 'area',
      height: 300,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Followers",
      data: [
        { x: "2019-05-10 00:00:03", y: "5428" },
        { x: "2019-05-10 01:00:03", y: "5428" },
        { x: "2019-05-10 02:00:02", y: "5429" },
        { x: "2019-05-10 03:00:02", y: "5431" },
        { x: "2019-05-10 04:00:03", y: "5430" },
        { x: "2019-05-10 05:00:02", y: "5427" },
        { x: "2019-05-10 06:00:02", y: "5427" },
        { x: "2019-05-10 07:00:03", y: "5430" },
        { x: "2019-05-10 08:00:02", y: "5429" },
        { x: "2019-05-10 09:00:03", y: "5433" },
        { x: "2019-05-10 10:00:03", y: "5431" },
        { x: "2019-05-10 11:00:03", y: "5431" },
        { x: "2019-05-10 12:00:02", y: "5432" },
        { x: "2019-05-10 13:00:03", y: "5435" },
        { x: "2019-05-10 14:00:02", y: "5438" },
        { x: "2019-05-10 15:00:03", y: "5438" },
        { x: "2019-05-10 16:00:02", y: "5440" },
        { x: "2019-05-10 17:00:03", y: "5441" },
        { x: "2019-05-10 18:00:02", y: "5441" },
        { x: "2019-05-10 19:00:03", y: "5436" },
        { x: "2019-05-10 20:00:03", y: "5438" },
        { x: "2019-05-10 21:00:03", y: "5437" },
        { x: "2019-05-10 22:00:02", y: "5474" },
        { x: "2019-05-10 23:00:02", y: "5487" },
        { x: "2019-05-11 00:00:03", y: "5494" },
        { x: "2019-05-11 01:00:03", y: "5503" },
        { x: "2019-05-11 02:00:02", y: "5511" },
        { x: "2019-05-11 03:00:03", y: "5511" },
        { x: "2019-05-11 04:00:02", y: "5510" },
        { x: "2019-05-11 05:00:02", y: "5513" },
        { x: "2019-05-11 06:00:03", y: "5519" },
        { x: "2019-05-11 07:00:03", y: "5519" },
        { x: "2019-05-11 08:00:03", y: "5523" },
        { x: "2019-05-11 09:00:02", y: "5519" },
        { x: "2019-05-11 10:00:03", y: "5524" },
        { x: "2019-05-11 11:00:02", y: "5522" },
        { x: "2019-05-11 12:00:02", y: "5527" },
        { x: "2019-05-11 13:00:02", y: "5528" },
        { x: "2019-05-11 14:00:02", y: "5539" },
        { x: "2019-05-11 15:00:02", y: "5541" },
        { x: "2019-05-11 16:00:02", y: "5539" },
        { x: "2019-05-11 17:00:02", y: "5546" },
        { x: "2019-05-11 18:00:03", y: "5542" },
        { x: "2019-05-11 19:00:03", y: "5554" },
        { x: "2019-05-11 20:00:02", y: "5572" },
        { x: "2019-05-11 21:00:02", y: "5576" },
        { x: "2019-05-11 22:00:03", y: "5574" },
        { x: "2019-05-11 23:00:02", y: "5573" },
        { x: "2019-05-12 00:00:02", y: "5581" },
        { x: "2019-05-12 01:00:02", y: "5585" },
        { x: "2019-05-12 02:00:02", y: "5590" },
        { x: "2019-05-12 03:00:02", y: "5596" },
        { x: "2019-05-12 04:00:03", y: "5598" },
        { x: "2019-05-12 05:00:02", y: "5600" },
        { x: "2019-05-12 06:00:02", y: "5604" },
        { x: "2019-05-12 07:00:02", y: "5603" },
        { x: "2019-05-12 08:00:03", y: "5606" },
        { x: "2019-05-12 09:00:02", y: "5609" },
        { x: "2019-05-12 10:00:03", y: "5608" },
        { x: "2019-05-12 11:00:04", y: "5613" },
        { x: "2019-05-12 12:00:02", y: "5613" },
        { x: "2019-05-12 13:00:03", y: "5604" },
        { x: "2019-05-12 14:00:02", y: "5613" },
        { x: "2019-05-12 15:00:02", y: "5619" },
        { x: "2019-05-12 16:00:02", y: "5621" },
        { x: "2019-05-12 17:00:02", y: "5627" },
        { x: "2019-05-12 18:00:02", y: "5613" },
        { x: "2019-05-12 19:00:02", y: "5618" },
        { x: "2019-05-12 20:00:02", y: "5619" },
        { x: "2019-05-12 21:00:02", y: "5620" },
        { x: "2019-05-12 22:00:03", y: "5624" },
        { x: "2019-05-12 23:00:02", y: "5631" },
        { x: "2019-05-13 00:00:02", y: "5634" },
        { x: "2019-05-13 01:00:03", y: "5638" },
        { x: "2019-05-13 02:00:02", y: "5637" },
        { x: "2019-05-13 03:00:02", y: "5636" },
        { x: "2019-05-13 04:00:03", y: "5640" },
        { x: "2019-05-13 05:00:02", y: "5641" },
        { x: "2019-05-13 06:00:02", y: "5640" },
        { x: "2019-05-13 07:00:03", y: "5637" },
        { x: "2019-05-13 08:00:02", y: "5638" },
        { x: "2019-05-13 09:00:02", y: "5638" },
        { x: "2019-05-13 10:00:02", y: "5644" },
        { x: "2019-05-13 11:00:02", y: "5653" },
        { x: "2019-05-13 12:00:02", y: "5663" },
        { x: "2019-05-13 13:00:03", y: "5659" },
        { x: "2019-05-13 14:00:02", y: "5658" },
        { x: "2019-05-13 15:00:03", y: "5654" },
        { x: "2019-05-13 16:00:02", y: "5658" },
        { x: "2019-05-13 17:00:02", y: "5659" },
        { x: "2019-05-13 18:00:02", y: "5660" },
        { x: "2019-05-13 19:00:01", y: "5669" },
        { x: "2019-05-13 20:00:02", y: "5671" },
        { x: "2019-05-13 21:00:02", y: "5676" },
        { x: "2019-05-13 22:00:03", y: "5682" },
        { x: "2019-05-13 23:00:02", y: "5692" },
        { x: "2019-05-14 00:00:03", y: "5695" },
        { x: "2019-05-14 01:00:03", y: "5697" },
        { x: "2019-05-14 02:00:03", y: "5702" },
        { x: "2019-05-14 03:00:02", y: "5701" },
        { x: "2019-05-14 04:00:03", y: "5699" },
        { x: "2019-05-14 05:00:02", y: "5699" },
        { x: "2019-05-14 06:00:03", y: "5701" },
        { x: "2019-05-14 07:00:02", y: "5702" },
        { x: "2019-05-14 08:00:02", y: "5702" },
        { x: "2019-05-14 09:00:03", y: "5707" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: labelsStyle
      },
    },
    colors: [blueColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [blueColor],
      strokeWidth: 3,
      hover: {
        size: 6,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4"), options);
  chart.render();
}

// Style 4-1
if ($.exists("#yooChart4-1")) {
  var options = {
    chart: {
      type: 'area',
      height: 88,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-1"), options);
  chart.render();
}

// Style 4-2
if ($.exists("#yooChart4-2")) {
  var options = {
    chart: {
      type: 'area',
      height: 88,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [redColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [redColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-2"), options);
  chart.render();
}

// Style 4-3
if ($.exists("#yooChart4-3")) {
  var options = {
    chart: {
      type: 'area',
      height: 88,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-3"), options);
  chart.render();
}

// Style 4-4
if ($.exists("#yooChart4-4")) {
  var options = {
    chart: {
      type: 'area',
      height: 88,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-4"), options);
  chart.render();
}

// Style 4-5
if ($.exists("#yooChart4-5")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-5"), options);
  chart.render();
}

// Style 4-6
if ($.exists("#yooChart4-6")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-6"), options);
  chart.render();
}

// Style 4-7
if ($.exists("#yooChart4-7")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-7"), options);
  chart.render();
}

// Style 4-8
if ($.exists("#yooChart4-8")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-8"), options);
  chart.render();
}

// Style 4-9
if ($.exists("#yooChart4-9")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-9"), options);
  chart.render();
}

// Style 4-10
if ($.exists("#yooChart4-10")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-10"), options);
  chart.render();
}

// Style 4-11
if ($.exists("#yooChart4-11")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-11"), options);
  chart.render();
}

// Style 4-12
if ($.exists("#yooChart4-12")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-12"), options);
  chart.render();
}

// Style 4-13
if ($.exists("#yooChart4-13")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-13"), options);
  chart.render();
}

// Style 4-14
if ($.exists("#yooChart4-14")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-14"), options);
  chart.render();
}

// Style 4-15
if ($.exists("#yooChart4-15")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-15"), options);
  chart.render();
}

// Style 4-16
if ($.exists("#yooChart4-16")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-16"), options);
  chart.render();
}
// Style 4-17
if ($.exists("#yooChart4-17")) {
  var options = {
    chart: {
      type: 'area',
      height: 90,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: "Trafic",
      data: [
        { x: "2019-05-12 21:02", y: "620" },
        { x: "2019-05-12 22:03", y: "624" },
        { x: "2019-05-12 23:02", y: "631" },
        { x: "2019-05-13 00:02", y: "634" },
        { x: "2019-05-13 01:03", y: "638" },
        { x: "2019-05-13 02:02", y: "637" },
        { x: "2019-05-13 03:02", y: "636" },
        { x: "2019-05-12 11:02", y: "627" },
        { x: "2019-05-12 18:02", y: "613" },
        { x: "2019-05-12 19:02", y: "618" },
        { x: "2019-05-12 20:02", y: "619" },
        { x: "2019-05-13 04:03", y: "640" },
        { x: "2019-05-13 05:02", y: "641" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 11:02", y: "653" },
        { x: "2019-05-13 12:02", y: "663" },
        { x: "2019-05-13 13:03", y: "659" },
        { x: "2019-05-13 14:02", y: "658" },
        { x: "2019-05-13 15:03", y: "654" },
        { x: "2019-05-13 06:02", y: "640" },
        { x: "2019-05-13 07:03", y: "637" },
        { x: "2019-05-13 08:02", y: "638" },
        { x: "2019-05-13 09:02", y: "638" },
        { x: "2019-05-13 10:02", y: "644" },
        { x: "2019-05-13 16:02", y: "658" },
        { x: "2019-05-13 17:02", y: "659" },
        { x: "2019-05-13 18:02", y: "660" },
        { x: "2019-05-13 19:01", y: "669" },
        { x: "2019-05-13 20:02", y: "671" },
        { x: "2019-05-13 21:02", y: "676" },
        { x: "2019-05-13 22:03", y: "682" },
        { x: "2019-05-13 23:02", y: "692" },
        { x: "2019-05-14 00:03", y: "695" }
      ]
    }],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.60,
        opacityTo: 0.08
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    colors: [greenColor],
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [greenColor],
      strokeWidth: 3,
      hover: {
        size: 4,
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
        show: false,
      },
      y: {
        show: false,
      }
    },
    grid: {
      show: false
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart4-17"), options);
  chart.render();
}


/* ========= Chart Style 5 ========= */
if ($.exists("#yooChart5")) {
  var options = {
    chart: {
      type: 'radialBar',
      height: 420,
      width: 420,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [75],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '50%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0
        },
        track: {
          background: '#eaeaea',
          strokeWidth: '90%'
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: 'rgba(0, 0, 0, 0.4)',
            fontSize: '14px'
          },
          value: {
            show: true,
            color: 'rgba(0, 0, 0, 0.95)',
            offsetY: 0,
            fontSize: '24px'
          }
        }
      }
    },
    colors: [pinkColor],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 1,
        gradientToColors: [blueColor],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round',
      width: 10
    },
    labels: ['Achive'],
  };

  var chart = new ApexCharts(document.querySelector("#yooChart5"), options);
  chart.render();
}

/* ========= Chart Style 6 ========= */
if ($.exists("#yooChart6")) {
  var _seed = 10
  Math.random = function() {
    _seed = (_seed * 16807) % 2147483647
    return (_seed - 1) / 2147483646
  }

  function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  var options = {
    series: [{
        name: 'Bubble1',
        data: generateData(new Date('18 Jan 2019 GMT').getTime(), 4, {
          min: 10,
          max: 60
        })
      },
      {
        name: 'Bubble2',
        data: generateData(new Date('18 Jan 2019 GMT').getTime(), 4, {
          min: 10,
          max: 60
        })
      }
    ],
    chart: {
      height: 290,
      type: 'bubble',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1
    },
    colors: [blueColor, lightBlueColor],
    xaxis: {
      tickAmount: 12,
      type: 'category',
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      max: 70,
      labels: {
        style: labelsStyle
      }
    }
  };
  var chart = new ApexCharts(document.querySelector("#yooChart6"), options);
  chart.render();
}

/* ========= Chart Style 7 ========= */
if ($.exists("#yooChart7")) {
  var options = {
    chart: {
      height: 350,
      type: 'radar',
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    colors: [blueColor, lightBlueColor],
    series: [{
      name: 'Industry Average',
      data: [80, 90, 70, 90, 110, 100],
    }, {
      name: 'Our Company',
      data: [50, 60, 50, 80, 90, 80],
    }],
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May']
    },
    markers: {
      size: 0
    },
    legend: {
      show: true,
      offsetX: 0,
      offsetY: -20
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart7"), options);
  chart.render();
}

/* ========= Chart Style 8 ========= */
if ($.exists("#yooChart8")) {
  var options = {
    chart: {
      type: 'bar',
      height: 320,
      stacked: true,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21]
    }, {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32]
    }],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    colors: [blueColor, lightBlueColor],
    stroke: {
      width: 0
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function(val) {
          return val + "K"
        },
        style: {
          colors: 'rgba(0, 0, 0, 0.4)',
          fontSize: '14px'
        }
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
      axisBorder: {
        show: false
      },
      labels: {
        style: labelsStyle
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart8"), options);
  chart.render();
}


/* ========= Chart Style 9 ========= */
if ($.exists("#yooChart9")) {
  var options = {
    chart: {
      height: 314,
      type: 'line',
      stacked: false,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }],
    stroke: {
      width: [0, 3],
      curve: 'straight'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    labels: ['01/01/2018', '02/01/2018', '03/01/2018', '04/01/2018', '05/01/2018', '06/01/2018', '07/01/2018',
      '08/01/2018', '09/01/2018', '10/01/2018', '11/01/2018'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: labelsStyle
      },
    },
    colors: [lightBlueColor, orangeColor],
    legend: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function(y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;

        }
      }
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart9"), options);
  chart.render();
}

/* ========= Chart Style 10 ========= */
if ($.exists("#yooChart10")) {
  var options = {
    chart: {
      height: 335,
      type: 'rangeBar',
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
        name: 'Bob',
        data: [{
            x: 'Design',
            y: [
              new Date('2019-03-06').getTime(),
              new Date('2019-03-09').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-11').getTime(),
              new Date('2019-03-16').getTime()
            ]
          },
          {
            x: 'Design',
            y: [
              new Date('2019-02-26').getTime(),
              new Date('2019-03-1').getTime()
            ]
          }
        ]
      },
      {
        name: 'Joe',
        data: [{
            x: 'Design',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-05').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-06').getTime(),
              new Date('2019-03-16').getTime()
            ]
          },
          {
            x: 'Code',
            y: [
              new Date('2019-03-01').getTime(),
              new Date('2019-03-07').getTime()
            ]
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-20').getTime(),
              new Date('2019-03-22').getTime()
            ]
          },
          {
            x: 'Design',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-16').getTime()
            ]
          }
        ]
      },
      {
        name: 'Dan',
        data: [{
            x: 'Code',
            y: [
              new Date('2019-03-10').getTime(),
              new Date('2019-03-17').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-05').getTime(),
              new Date('2019-03-09').getTime()
            ]
          },
        ]
      }
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%'
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        style: labelsStyle
      }
    },
    legend: {
      show: false
    },
    colors: [blueColor, lightBlueColor, orangeColor],
  };
  var chart = new ApexCharts(document.querySelector("#yooChart10"), options);
  chart.render();
}
