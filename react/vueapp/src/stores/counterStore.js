import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const upcount = () => {
        if(count.value < 10) count.value++
    }

    const downcount = () => {
        if(count.value > 0) count.value--
    }

    return {count, upcount, downcount}
})