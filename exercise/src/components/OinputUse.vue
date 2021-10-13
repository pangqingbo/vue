<template>
    <div>
        <!-- 可以用v-model绑定值 -->
        <!-- preicon可以放前缀图标 -->
        <!-- suficon可以放后缀图标 -->
        <Oinput v-model:value="value" placeholder="edit me">
            <template #preicon>
                <UserOutlined />
            </template>
            <template #suficon>
                <UserOutlined />
            </template>
        </Oinput>
        {{value}}
    </div>
</template>

<script>
import Oinput from "./Oinput.vue"
import {UserOutlined} from '@ant-design/icons-vue'

export default {
    data(){
        return{
            value: ''
        }
    },
    components: {
        Oinput, UserOutlined
    }
}
</script>