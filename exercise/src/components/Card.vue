<template>
    <div id="ocard" :class="classObj">
        <div id="ocard-title">
            {{title}}
        </div>
        <div id="ocard-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from 'vue'

export default {
    props: {
        'title': String,
        'bordered': {
            type: Boolean,
            default(){
                return true
            }
        }
    },
    setup(props){
        // 获取bordered属性值
        const { bordered } = toRefs(props)
        // 当含有borderactive这个类时设置边框，没有这个类时去掉边框
        const classObj = reactive({
            borderactive: true
        })
        // 如果bordered属性值为false则去掉borderactive这个类
        function showBorder(){
            if(!bordered.value){
                classObj.borderactive = false
            }
        }
        onMounted(showBorder)
        watch(bordered, showBorder)
        return {
            classObj
        }
    }
}
</script>

<style>
    #ocard{
        background-color: white;
    }
    #ocard.borderactive{
        border: 1px solid #F0F0F0;
    }
    #ocard #ocard-title{
        padding: 10px;
        border-bottom: 1px solid #F0F0F0;
        font: 16px bold;
    }
    #ocard #ocard-content{
        padding: 10px;
        min-height: 40px;
    }
</style>