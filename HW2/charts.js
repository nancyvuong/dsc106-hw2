$(function() {

    // If you need to specify any global settings such as colors or other settings you can do that here

    // Build Chart A
    $('#chart-A').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Quarterly Reserves'
        },
        xAxis: {
            categories: ['Q1, 2016', 'Q2, 2016', 'Q3, 2016', 'Q4, 2016',
                        'Q1, 2017', 'Q2, 2017', 'Q3, 2017', 'Q4, 2017',
                        'Q1, 2018', 'Q2, 2018', 'Q3, 2018', 'Q4, 2018',
                        'Q1, 2019', 'Q2, 2019', 'Q3, 2019', 'Q4, 2019'],
            title: {
                text: 'Fiscal Quarter, Year'
            }
        },
        yAxis: {
            min: 25000000,
            title: {
                text: 'Revenue (USD)'
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Revenue',
            data: [28858995, 29912597,31755684,
                32018869,
                34453675,
                34868647,
                36321701,
                37333286,
                39073582,
                39780222,
                40127995,
                35212665,
                36911506,
                36734404,
                35484584]            
        }]
    });

    // Build Chart B
    $('#chart-B').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Revenues of 2018'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yAxis: {
            min: 10000000,
            title: {
                text: 'Revenue (USD)'
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shared: true
        },
        series: [{
            name: 'Revenue',
            data: [13048511,
                13347771,
                12677300,
                13251875,
                13687830,
                12840517,
                13338406,
                13542320,
                13247269,
                11374035,
                12299535,
                11539095]
        }]
    });

    // Build Chart C
    $('#chart-C').highcharts({
        colors: ['#ff6961', '#fdfd96', '#cfcfc4'],
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Revenue of 2018, Grouped by Menu Items'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Revenue (USD)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            //shared: true,
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            
                name: 'HM',
                data: [7887763, 7990228, 7654312,
                    7947352, 8186393, 7629715,
                    8012517, 8060250, 7922921,
                    6781234, 7386402, 6954506]
            }, {
                name: 'CF',
                data: [3234631, 3328733, 3139645,
                    3285062, 3438398, 3256752,
                    3338673, 3467244, 3327230,
                    2862020, 3052314, 2874069]
            }, {
                name: 'FF',
                data: [1926117, 2028810, 1883343,
                    2019461, 2063039, 1954050,
                    1987216, 2014826, 1997118,
                    1730781, 1860819, 1710520]
            }]
            
    });

    // Build Chart D
    $('#chart-D').highcharts({
        colors: ['#ff6961', '#fdfd96', '#cfcfc4', '#ffb347', '#77dd77'],
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Monthly Revenue of 2018, From July to December, Grouped by Region'
        },
        xAxis: {
            categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Revenue (USD)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold'
                }
            }
        },
        legend: {
            reversed: true
        },
        credits: {
            enabled: false
        },
        tooltip: {
            //shared: true,
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            
                name: 'NE',
                data: [2742490,	2786194, 2720638, 2320956, 2560458,	2373509]
            }, {
                name: 'SW',
                data: [2688708,	2736147, 2710087, 2288687, 2526092, 2352366]
            }, {
                name: 'NW',
                data: [2637788,	2754238, 2670893, 2288925, 2416298,	2239571]
            },
            {
                name: 'SE',
                data: [2630319,	2666406, 2586340, 2223673,	2376833, 2306116]
            },
            {
                name: 'C',
                data: [2639101,	2599335, 2559311, 2251794, 2419854, 2267533]
            }]
            
    });
});