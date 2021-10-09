<template>
  <div>{{arr}}</div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      arr: []
    }
  },
  methods: {
    getLabel(obj) {
      if(!obj.objChildren) return this.arr.push(obj.label)
      this.arr.push(obj.label)
      return this.getLabel(obj.objChildren)
    }
  },
  mounted(){
    let obj = {
      label: '一级',
      objChildren: {
        label: '二级',
        objChildren: {
          label: '三级',
          objChildren: {
            label: '四级',
            objChildren: {
              label: '五级'
            }
          }
        }
      }
    }
    this.getLabel(obj)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
