import { reactive, watch } from 'vue'

export function useNumbers() {
    /**
     * ref can be used with primitive values such as a number or string
     * reactive can be used with objects or arrays
     */
    const numbers = reactive({
        a: 0,
        b: 0
    })

    const increase = (n) => {
        numbers[n] += 1
    }
    
    /**
     * watch does not run on initial render and you need to pass in what you want to watch as the first argument
     * watchEffect does run on initial render and it just takes a callback function
     */
    watch(numbers, (newVal) => {
        console.log(`a: ${newVal.a} b: ${newVal.b}`)
    })

    return {
        numbers,
        increase
    }
}