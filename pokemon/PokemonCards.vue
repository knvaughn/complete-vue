<template>
    <div class="cards">
        <card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            @click="click(pokemon)"
            :class="{ opace: selectedId && pokemon.id !== selectedId }"
            class="card"
        >
            <template v-slot:title>
                {{ pokemon.name }}
            </template>

            <template v-slot:content>
                <img :src="pokemon.sprite" :alt="pokemon.name">
            </template>

            <template v-slot:description>
                <div 
                    v-for="poketype in pokemon.types"
                    :key="poketype"
                >
                    {{ poketype }}
                </div>
            </template>
        </card>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        components: {
            Card
        },
        props: {
            pokemons: {
                type: Array,
                default: []
            },
            selectedId: {
                type: Number
            }
        },
        methods: {
            click(pokemon) {
                this.$emit('chosen', pokemon)
            }
        }
    }
</script>

<style scoped>
.cards {
    display: flex;
    justify-content: center;
}

.card:hover {
    opacity: 1;
}

.opace {
    opacity: 0.5;
}

img {
    width: 100%;
}
</style>