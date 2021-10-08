<template>
    <div>
        <!-- <div v-for="(item, i) in items" :key="i"> -->
            
        <!-- </div> -->
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            flag: 100,
            className: ['food', 'animal', 'apple', 'banana', 'orange', 'human', 'color', 'fish', 'video', 'drink']
        }
    },
    created() {
        /* let arr = Array.from(this.items)
        let flag = 0
        let className = this.className[flag]
        for(let i=1; i<=this.flag; i++){
            arr.push({num: i, class: className})
            if(i%10 == 0){
                className = this.className[++flag]
            }
        }
        this.items = arr */
        this.items.length = 100
        let arr = Array.from(this.items)
        arr.fill({})
        arr.forEach((item,i) => {
            item.num = i
            console.log(i )
        })
        console.log(arr)
    }
}
</script>