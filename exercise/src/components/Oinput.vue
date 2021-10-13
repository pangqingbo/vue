<template>
    <div>
        <div id="oinput">
            <div ref="preslot"><slot name="preicon"></slot></div>
            <div>
                <input
                type="text"
                :class="iconObj"
                :placeholder="placeholder"
                :value="value"
                @input="$emit('update:value', $event.target.value)"
                >
            </div>
            <div ref="sufslot"><slot name="suficon"></slot></div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive, watch } from '@vue/runtime-core'

export default {
    components: {
        
    },
    props: ['placeholder','value'],
    emits: ['update:value'],
    setup(){
        const preslot = ref('')
        const sufslot = ref('')
        const iconObj = reactive({
            preicon: false,
            suficon: false
        })
        function iconOrNot(){
            iconObj.preicon = preslot.value.innerHTML?true:false;
            iconObj.suficon = sufslot.value.innerHTML?true:false;
        }
        onMounted(iconOrNot)
        watch(preslot, iconOrNot)
        watch(sufslot, iconOrNot)
        return{
            preslot,
            sufslot,
            iconObj
        }
    }
}
</script>

<style>
#oinput{
    background-color: orange;
    display: inline-block;
    position: relative;
}
#oinput div:first-child,
#oinput div:last-child{
    position: absolute;
    z-index: 999;
    font-size: 18px;
}
#oinput div:first-child{
    left: 2px;
}
#oinput div:last-child{
    right: 4px;
}
#oinput input{
    float: left;
}
#oinput input.preicon{
    padding-left: 20px;
}
#oinput input.suficon{
    padding-right: 20px;
}
</style>