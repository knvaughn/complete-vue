import { createStore } from 'vuex'
import { testPosts } from '../microblog/testPosts'

const getAllPosts = () => new Promise(resolve => setTimeout(resolve, 1000))

const posts = {
    namespaced: true,
    state() {
        return {
            postId: null,
            all: []
        }
    },
    mutations: {
        setPostId(state, postId) {
            state.postId = postId
        },
        setPosts(state, posts) {
            state.all = posts
        }
    },
    actions: {
        async fetch(ctx, payload) {
            await getAllPosts()
            ctx.commit('setPosts', testPosts)
        }
    },
    getters: {
        currentPost(state) {
            return state.all.find(post => post.id === state.postId)
        }
    }
}

export const store = createStore({
    modules: {
        posts
    }
})