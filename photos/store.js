import { createStore } from 'vuex'
import { albums } from './albums'
import { photos } from './photos'

export const store = createStore({
    modules: {
        albums,
        photos
    }
})