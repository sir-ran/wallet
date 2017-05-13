export function chartOption (data) {
  let list = [];
  for (let i in data) {
    list.push({
      name: i,
      value: data[i]
    });
  }

  return {
    title: {
      text: '资产详情',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: Object.keys(data)
    },
    series: [{
      name: '资金占比',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: list,
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
};
