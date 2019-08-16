
let seriesData = [20, 25, 30, 28, 20, 32, 30],
    seriesData1 = [23, 30, 32, 30, 30, 36, 42],
    seriesData2 = [38, 40, 40, 45, 38, 40, 39];
let lever = {
    "2018-11": 4.35,
    "2018-12": 7.15,
    "2019-01": 4.55,
    "2019-02": 5.35,
    "2019-03": 3.25,
    "2019-04": 7.35,
    "2019-05": 6.55
};
let customData = [];
seriesData.map((item, index) => {
    customData.push([index, item, seriesData1[index]]);
});
option = {
    title: {
        text: "深圳很6",
        left: "center",
        textStyle: {
            fontFamily: '"PingFangSC-Medium", "Microsoft YaHei"',
            color: "#7D889F"
        }
    },
    tooltip: {
        show: true,
        trigger: "axis",
        formatter: function(params) {
            if (params && params.length > 0) {
                let html = "",
                    marker = "";
                params.map(item => {
                    marker = item.marker;
                    if (item.seriesType !== "custom") {
                        html += `<div>${marker}${
                            item.seriesName
                        }：${item.value.toFixed(0)}百万</div>`;
                    } else {
                        html += `<div>${marker}${
                            item.seriesName
                        }：${
                            item.value[item.value.length - 1]
                        }</div>`;
                    }
                });
                return html;
            }
        }
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            color: "#7d889f",
            fontFamily: '"PingFangSC-Medium", "Microsoft YaHei"'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: "2"
            }
        },
        data: [
            "2018-11",
            "2018-12",
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05"
        ]
    },
    yAxis: [{
        show: false
    }, {
        show: false
    }],
    series: [{
        type: "bar",
        data: seriesData,
        name: "好惨哦",
        itemStyle: {
            normal: {
                color: "rgb(230,176,130)"
            }
        },
        label: {
            show: true,
            position: "top",
            offset: [-10, -5],
            formatter: function(params) {
                return lever[params.name].toFixed(1) + "x";
            },
            fontWeight: "lighter",
            fontSize: 16,
            color: "#7d889f",
            fontStyle: "normal",
            fontFamily: '"PingFangSC-Medium", "Microsoft YaHei"'
        }
    },
    {
        type: "bar",
        data: seriesData1,
        name: "888",
        itemStyle: {
            normal: {
                color: "#4C7CCA"
            }
        }
    },
    {
        type: "bar",
        data: seriesData2,
        name: "999",
        itemStyle: {
            normal: {
                color: "#fff",
                opacity: 1,
                borderColor: "#4C7CCA"
            }
        }
    },
    {
        type: "custom",
        name: "000",
        yAxisIndex: 1,
        renderItem: renderItem,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderType: "solid"
            }
        },
        encode: {
            x: 0,
            y: [1, 2]
        },
        data: customData,
        z: 100
    }
    ]
};

function getAngle(x1, y1, x2, y2) {
    var x = Math.abs(x1 - x2);
    var y = Math.abs(y1 - y2);
    var z = Math.sqrt(x * x + y * y);
    return Math.asin(y / z) / Math.PI * 180;
}

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        count: currentSeriesIndices.length - 1,
        barGap: 0
    });
    var points = [];
    var customSeries = option.series.filter(
        v => v.type === "custom"
    );
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (
            seriesIndex !== params.seriesIndex &&
         option.series[seriesIndex].type === "bar"
        ) {
            var point = api.coord([
                xValue,
                api.value(seriesIndex + 1)
            ]);
            point[0] +=
             barLayout[i].offsetCenter +
             (customSeries.length - 1) *
             i *
             ((barLayout[i - 1] || {}).width || 0) /
             2 -
             barLayout[i].width * 0.5;

            i === 0 &&
             (point[1] =
                 params.coordSys.height + params.coordSys.y);

            points.push(point);
        }
    }
    var style = api.style({
        stroke: "#37456E",
        fill: "#37456E"
    });
    let x1 = points[0][0];
    let y1 = points[0][1];
    let x2 = points[1][0];
    let y2 = points[1][1];
    let angleBottom =
     (getAngle(x1, y1, x2, y2) + 30) / 180 * Math.PI;
    let angleTop = (210 + getAngle(x1, y1, x2, y2)) / 180 * Math.PI;
    return {
        type: "group",
        children: [{
            type: "line",
            shape: {
                x1,
                y1,
                x2,
                y2
            },
            style: style
        },
        {
            type: "line",
            type: "image",
            invisible: true,
            position: [7, -8],
            origin: [x1, y1],
            rotation: -angleBottom,
            style: {
                image: "/static/images/pic_legand_arrow.svg",
                x: x1,
                y: y1,
                height: 10,
                width: 10
            }
        },
        {
            type: "line",
            type: "image",
            invisible: true,
            rotation: -angleTop,
            origin: [x2, y2],
            position: [-6, 4],
            style: {
                image: "/static/images/pic_legand_arrow.svg",
                x: x2,
                y: y2,
                height: 10,
                width: 10
            }
        }
        ]
    };
}
