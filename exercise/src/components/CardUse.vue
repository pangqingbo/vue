<template>
    <div style="width: 400px;margin:0 auto">
        <div style="margin-top: 10px; padding:30px;">
            <!-- bordered如果设置为false则不会显示边框 -->
            <!-- title用来设置标题 -->
            <Card title="Card title" :bordered="false" style="width: 300px">
                <p>Card Content</p>
                <p>Card Content</p>
                <p>Card Content</p>
            </Card>
        </div>
        <div style="margin-top: 10px; padding:30px;">
            <!-- 用来做对比 -->
            <a-card title="Card title" style="width: 300px">
                <p>Card Content</p>
                <p>Card Content</p>
                <p>Card Content</p>
            </a-card>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

export default {
    components: {
        Card
    }
}
</script>