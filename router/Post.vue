<template>
    <h4>{{ post.title }}</h4>
    <p>{{ post.content }}</p>
</template>

<script>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
    import { usePosts } from './usePosts'

    export default {
        setup() {
            const route = useRoute()
            const postStore = usePosts() 
            const post = computed(() => postStore.posts.value.find(post => post.id === parseInt(route.params.id, 10)))

            return {
                post
            }
        }
    }
</script>

<style scoped>
</style>