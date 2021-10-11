<template>
  <div>
    <!-- ArrList循环显示100个数组对象 -->
    <!-- <ArrList /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ArrList from "./components/ArrList.vue"

export default {
  name: 'App',
  components: {
    // ArrList
  },
  data(){
    // 求最大最小值的数组
    return {arr: [1,3,6,2,7]}
  },
  created() {
    // 求arr的最大最小值，先排序后输出
    this.arr.sort((value1, value2) => {
      return value1-value2
    })
    console.log("arr:"+this.arr)
    console.log("Max:"+this.arr[0]+",Min:"+this.arr[this.arr.length-1])
  }
}
</script>


