<template>
  <div class="home">
    <div class="echarts" ref="Echarts"></div>
  </div>
</template>

<script>
import { dataCharts } from "./js/charts"
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      source: [
        ['product', '五月', '六月', '七月', '九月', '十月', '十一月', '十二月'],
        ['预计总收入', 15500, 13500, 10000, 17000, 15000, 14600, 14600],
        ['团队预计收入', 3100, 2700, 2000, 3400, 3000, 2920, 2640],
        ['预计总支出', 1000, 800, 400, 1000, 800, 700, 640],
        ['利润', 2100, 1900, 1600, 2400, 2200, 2220, 2000]
      ],
      colorStyle:["rgb(46, 199, 201)","rgb(182, 162, 222)","rgb(90, 177, 239)","rgb(255, 185, 128)","rgb(216, 122, 128)"]
    }
  },
  mounted() {
    this.chartsEvent();
  },
  methods: {
    chartsEvent() {
      const charts = this.$echarts.init(this.$refs.Echarts);
      const options = dataCharts(this.source,charts,this.colorStyle);
      charts.setOption(options);


    },
  },
}
</script>
<style lang="scss" scoped>
  .home {
    width: 100%;
    display: flex;


    .echarts {
      width: 1200px;
      height: 800px;
      margin: auto;
    }
  }
</style>
