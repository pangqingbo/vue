<template>
    <div>
        <button @click="randomColor">点击生成颜色</button>
        <div>{{color}}</div>
    </div>
</template>

<script>
import { ref } from '@vue/runtime-core'

export default {
    setup(){
        let color = ref('')
        function randomColor(){
            const str = '0123456789ABCDEF'
            let i = 0
            color.value = '#'
            while(i<6){
                color.value+=str[parseInt(Math.random()*str.length)]
                i++
            }
        }
        return{
            color,
            randomColor
        }
    }
}
</script>