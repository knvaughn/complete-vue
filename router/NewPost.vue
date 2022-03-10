<template>
    <h3>New Post</h3>
    <form @submit.prevent="submit()">
        <div>
            <input 
                type="text"
                v-model="newPost.title"
                placeholder="Title"
            />
        </div>
        <textarea 
            name="content" 
            id="content" 
            cols="50" 
            rows="10"
            v-model="newPost.content"
        ></textarea>
        <div>
            <button>Submit</button>
        </div>
    </form>
</template>

<script>
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { usePosts } from './usePosts'
    export default {
        setup() {
            const postStore = usePosts()
            const router = useRouter()

            const newPost = reactive({
                title: '',
                content: ''
            })

            const submit = () => {
                const id = postStore.posts.value.length + 1
                postStore.addPost({
                    title: newPost.title,
                    content: newPost.content,
                    id: id
                })
                router.push(`/posts/${id}`)
            }

            return {
                newPost,
                submit
            }
        }
    }
</script>

<style scoped>
</style>