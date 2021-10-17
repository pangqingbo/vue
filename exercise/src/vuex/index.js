import { createStore } from "vuex";

const store = createStore({
    mutations: {
        randomColor(){
            let color = ref('')
            const str = '0123456789ABCDEF'
            let i = 0
            color.value = '#'
            while(i<6){
                color.value+=str[parseInt(Math.random()*str.length)]
                i++
            }
            return color.value
        }
    }
})