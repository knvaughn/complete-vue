<template>
    <button @click="click">Like</button>
    {{ post.likes }}
    <hashtag 
        v-for="hashtag in post.hashtags" 
        :key="hashtag"
        :hashtag="hashtag"
    />
</template>

<script>
    import Hashtag from './Hashtag.vue'
    import { useStore } from './store'

    const { store } = useStore()

    export default {
        components: {
            Hashtag
        },
        props: {
            post: {
                type: Object,
                required: true
            }
        },
        setup(props) {
            const click = () => {
                store.incrementLike(props.post)
            }

            return {
                click
            }
        }
    }
</script>

<style scoped>
</style>