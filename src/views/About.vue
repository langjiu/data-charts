<template>
  <div class="about">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="1" style="display: flex;height: 40px"><div class="column"></div></el-col>
        <el-col :span="1">
          <el-button circle type="primary" @click="addTargetEvent" icon="el-icon-plus"/>
        </el-col>
        <el-col :span="2" v-for="index in chartData.length" :key="index" style="display: flex;height: 40px">
          <div class="column">指标{{index}}</div>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="1">
          <el-button circle type="success" @click="addObjectEvent" icon="el-icon-plus"/>
        </el-col>
        <el-col :span="1" style="display: flex;height: 40px"><div class="column"></div></el-col>
        <el-col :span="2" v-for="index in chartData.length" :key="index" style="display: flex;height: 40px">
          <el-input v-model="targetData[index]" placeholder="输入指标名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="row" v-for="j in acrossQuantity" :key="j">
        <el-col :span="2"  style="display: flex;height: 40px">
          <div class="column">对象{{j}}</div>
        </el-col>
        <el-col :span="2" v-for="index in chartData.length" :key="index" style="display: flex;height: 40px">
          <el-input v-model="targetData[index]" placeholder="输入指标"></el-input>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
  export default {
    name:"about",
    components: {},
    data() {
      return {
        ruleForm:{

        },
        rules:{

        },
        //图表数据
        chartData:[

        ],
        //指标数据
        targetData:[],
        acrossQuantity: 0,
      };
    },
    mounted() {

    },
    methods: {
      //添加指标
      addTargetEvent() {
        this.chartData.push({});
        console.log(this.chartData,"chartData");
        console.log(this.targetData,"chartData");
        if(this.acrossQuantity === 0) {
          this.acrossQuantity = this.acrossQuantity + 1;
        }
      },
      addObjectEvent() {
        this.acrossQuantity = this.acrossQuantity + 1;
      }
    },
  }
</script>
<style scoped lang="scss">
  .about {
    border: 1px solid red;
    .row{
      border: 1px solid blue;
      height: 60px;
    }
    .column {
      border: 1px solid red;
      width: 100%;
      text-align: center;
      font-size: 18px;
      color: #000000;
      line-height: 40px;
    }
  }
</style>
