<template>
    <img
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
    />
</template>

<script>
    import { computed, watchEffect } from 'vue'
    import { useStore } from 'vuex'
    import { useRoute } from 'vue-router'

    export default {
        setup() {
            const store = useStore()
            const route = useRoute()
            const photos = computed(() => store.state.photos.all)

            watchEffect(() => {
                const id = route.params.id
                if (!id) return
                store.dispatch('photos/getByAlbum', {albumId: id})
            })

            return {
                photos
            }
        }
    }
</script>

<style scoped>
</style>