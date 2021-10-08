<template>
    <div>
        <p v-for="(item, i) in items" :key="i">
            {{item.num}}-->{{item.className}}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            className: [
                'food',
                'animal',
                'apple',
                'banana',
                'orange',
                'human',
                'color',
                'fish',
                'video',
                'drink'
            ]
        }
    },
    created() {
        let flag = 0
        this.items = Array.from({length:100}, (v, i) => {
            if(i%10 == 0 && i!=0) flag++
            return ({num: ++i, className: this.className[flag]})
        })
    }
}
</script>