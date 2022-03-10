<template>
    <h2>Posts</h2>
    <router-link to="/posts/new">New Post</router-link>
    <ul>
        <li
            v-for="post in posts"
            :key="post.id"
        >
            <router-link :to="`/posts/${post.id}`">
                {{ post.title }}
            </router-link>
        </li>
    </ul>
    <router-view />
</template>

<script>
    import { usePosts } from './usePosts'
    export default {
        setup() {
            const postStore = usePosts() 

            return {
                posts: postStore.posts.value
            }
        }
    }
</script>

<style scoped>
</style>