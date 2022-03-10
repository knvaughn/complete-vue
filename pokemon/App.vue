<template>
    <pokemon-cards 
        :pokemons="pokemons" 
        :selectedId="selectedId"
        @chosen="fetchEvolutions"
    />

    <pokemon-cards 
        :pokemons="evolutions" 
    />
</template>

<script>
    import PokemonCards from './PokemonCards.vue'
    import Card from './Card.vue'

    const api = 'https://pokeapi.co/api/v2/pokemon'
    const IDS = [1,4,7]

    export default {
        components: {
            PokemonCards,
            Card
        },
        data() {
            return {
                pokemons: [],
                evolutions: [],
                selectedId: null
            }
        },
        async created() {
            console.log('Created but not rendered', this.$el)
            this.pokemons = await this.fetchData(IDS)
        },
        mounted() {
            console.log('Created and has been inserted into dom', this.$el)
        },
        methods: {
            async fetchData(ids) {
                const responses = await Promise.all(
                    ids.map(id => window.fetch(`${api}/${id}`))
                )
                const json = await Promise.all(
                    responses.map(data => data.json())
                )

                return json.map(data => (
                    {
                        id: data.id,
                        name: data.name,
                        sprite: data.sprites.other['official-artwork'].front_default,
                        types: data.types.map(type => type.type.name)
                    }
                ))
            },
            async fetchEvolutions(pokemon) {
                this.selectedId = pokemon.id
                this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2])
            }
        }
    }
</script>

<style scoped>
</style>