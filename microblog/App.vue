<template>
    <input type="text" :value="currentTag" @input="setHashtag">
    <card 
        v-for="post in filteredPosts"
        :key="post.id"
    >
        <template v-slot:title>
            {{ post.title }}
        </template>

        <template v-slot:content>
            {{ post.content }}
        </template>

        <template v-slot:description>
            <controls 
                :post="post"
            />
        </template>
    </card>
</template>

<script>
    import { computed } from 'vue'
    import Card from '../pokemon/Card.vue'
    import Controls from './Controls.vue'
    import { useStore } from './store'

    const { store } = useStore()

    export default {
        components: {
            Card,
            Controls
        },
        setup() {
            const setHashtag = ($event) => {
                store.setHashtag($event.target.value)
            }
            
            return {
                filteredPosts: computed(() => store.filteredPosts),
                currentTag: computed(() => store.state.currentTag),
                setHashtag
            }
        }
    }
</script>

<style scoped>
</style>