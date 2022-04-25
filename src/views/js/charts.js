import * as echarts from "echarts";
export const dataCharts = (value1, charts,colorStyle) =>{
  const option = {
    legend: {
      type:"plain",//类型
      textStyle: {
        color: "rgba(0,0,0,1)",
        fontSize:"18px",
      },
    },
    color:colorStyle,
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: value1,
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show:false
      },
    },
    yAxis: {
      gridIndex: 0,
      axisTick: {
        show: false
      },
      axisLine: {
        show:false
      },

    },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '25%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@五月} ({d}%)'
        },
        encode: {
          itemName: 'product',
          value: '五月',
          tooltip: '五月'
        }
      }
    ]
  };
  charts.on('updateAxisPointer', (event)=> {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      charts.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });
  return option;
}