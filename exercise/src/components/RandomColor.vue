<template>
    <div>
        <button @click="randomColor">点击生成颜色</button>
        <div>{{color}}</div>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'

export default {
    setup(){
        const str = '0123456789ABCDEF'
        let color = ref('')
        function randomColor(){
            let i = 0
            color.value = '#'
            while(i<6){
                color.value+=str[parseInt(Math.random()*str.length)]
                i++
            }
        }
        onMounted(randomColor)
        return{
            color,
            randomColor
        }
    }
}
</script>