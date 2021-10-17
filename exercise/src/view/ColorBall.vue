<template>
  <div>
    <DiffColorBall :msg="msg" />
  </div>
</template>

<script>
import DiffColorBall from "../components/DiffColorBall.vue"

export default {
    data(){
        return {
            msg:[
                "违法建设",
                "医疗服务",
                "消费纠纷",
                "政法服务",
                "公积金",
                "物业停水",
                "职工保险",
                "疫苗",
                "财产安全",
                "民生工程",
                "物业停水",
                "职工保险",
                "疫苗",
                "财产安全",
                "民生工程",
            ]
        }
    },
    components: {
        DiffColorBall
    }
}
</script>