<template>
  <div
    id="app"
    :style="{
      width: `${w}px`,
      height: `${h}px`,
      transformOrigin: '0 0',
      transform: `scale(${scalseNum}) rotate(0)`,
      '-webkit-transform': `scale(${scalseNum}) rotate(0)`,
      '-moz-transform': `scale(${scalseNum}) rotate(0)`,
      '-o-transform': `scale(${scalseNum}) rotate(0)`,
      '-ms-transform': `scale(${scalseNum}) rotate(0)`,
    }"
  >
    <div id="nav">
      <router-link to="/">图表</router-link> |
      <router-link to="/about">配置</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        w:1920,
        h:1080,
        scalseNum: 1,
      };
    },
    mounted() {
      this.w = document.documentElement.clientWidth;
      this.h = document.documentElement.clientHeight;
      //计算缩放比例
      this.resize_window();
      window.addEventListener("resize", () => {
        this.resize_window(this.w);
      });
    },
    methods: {
      //计算缩放比例
      resize_window(w) {
        this.scalseNum = Number(document.documentElement.clientWidth / w);
      },
    },
  };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-table__body-wrapper::-webkit-scrollbar {
  width: 0; /*竖向*/
  height: 0;
}
.el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #24afd2;
  border-radius: 4px;
}
::-webkit-scrollbar {
  width: 0; /*竖向*/
  height: 0; /*横向*/
}
::-webkit-scrollbar-thumb {
  background-color: #24afd2;
  border-radius: 4px;
}

#nav {
  padding: 30px;
  display: block;

  a {
    margin: 5px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
