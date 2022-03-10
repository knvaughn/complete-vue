<template>
    <button @click="increment()">{{ count }}</button>
    <button @click="increase('a')">{{ numbers.a }}</button>
    <button @click="increase('b')">{{ numbers.b }}</button>
    <div>Total: {{ total }}</div>
</template>

<script>
    import { computed } from 'vue'
    import { useNumbers } from './useNumbers'
    import { useCount } from './useCount'

    export default {
        setup() {
            
            const {
                numbers,
                increase
            } = useNumbers()

            const {
                count,
                increment
            } = useCount()
            

            const total = computed(() => {
                return count.value + numbers.a + numbers.b
            })

            return {
                count,
                increment,
                numbers,
                increase,
                total
            }
        }
    }
</script>

<style scoped>
button {
    padding: 20px 40px;
    font-size: 1.2rem;
    cursor: pointer;
}
</style>