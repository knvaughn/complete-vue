export const photos = {
    namespaced: true,

    state() {
        return {
            all: [],
            cache: {}
        }
    },

    mutations: {
        setPhotosForCurrentAlbum(state, { photos, albumId }) {
            state.all = photos
            state.cache[albumId] = photos
        }
    },
    
    actions: {
        async getByAlbum(ctx, { albumId }) {
            if (ctx.state.cache[albumId]) {
                ctx.commit('setPhotosForCurrentAlbum', { photos: ctx.state.cache[albumId], albumId: albumId})
                return
            }
            const res = await window.fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            const json = await res.json()
            ctx.commit('setPhotosForCurrentAlbum', { photos: json, albumId: albumId})
        }
    }
}