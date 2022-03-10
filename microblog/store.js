import { reactive } from 'vue'
import { testPosts } from './testPosts'

class Store {
    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentTag: null
        })
    }

    setHashtag(tag) {
        this.state.currentTag = tag
    }

    incrementLike(post) {
        const thePost = this.state.posts.find(currentPost => currentPost.id === post.id)
        if (!thePost) return
        thePost.likes += 1
    }

    get filteredPosts() {
        if (!store.state.currentTag) {
            return store.state.posts
        }
        return store.state.posts.filter((post) => {
            return post.hashtags.find((hashtag) => {
                return hashtag.includes(store.state.currentTag)
            })
        })
    }
}

const store = new Store()

export function useStore() {
    return {
        store
    }
}