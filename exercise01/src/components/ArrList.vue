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
        let flag = 100
        let x = 0
        for(let i=1; i<=flag; i++){
            this.items.push({num: i, className: this.className[x]})
            if(i%10 == 0){
                x++
            }
        }
    }
}
</script>