import { ref, watchEffect } from 'vue'

export function useCount() {
    /**
     * ref can be used with primitive values such as a number or string
     * reactive can be used with objects or arrays
     */
    const count = ref(0)

    const increment = () => {
        count.value += 1
    }

    /**
     * watch does not run on initial render and you need to pass in what you want to watch as the first argument
     * watchEffect does run on initial render and it just takes a callback function
     */
    watchEffect(() => {
        console.log(`count: ${count.value}`)
    })

    return {
        count,
        increment
    }
}