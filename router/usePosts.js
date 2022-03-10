import { ref } from 'vue'
import { testPosts } from '../microblog/testPosts'

export function usePosts() {
    const posts = ref(testPosts)

    const addPost = (post) => {
        posts.value.push(post)
    }

    return {
        posts,
        addPost
    }
}