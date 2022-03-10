<template>
    <form @submit.prevent="submit">
        <my-input 
            inputName="Username" 
            :rules="{ required: true, min: 5 }"
            :value="username.value"
            :error="username.error"
            @update="update"
        />

        <my-input 
            inputName="Password" 
            inputType="password"
            :rules="{ required: true, min: 10 }"
            :value="password.value"
            :error="password.error"
            @update="update"
        />

        <my-button 
            background="darkSlateBlue"
            color="white"
            :disabled="disabled"
        />
    </form>
</template>

<script>
    import MyButton from './MyButton.vue'
    import MyInput from './MyInput.vue'
    export default {
        components: {
            MyButton,
            MyInput
        },
        data() {
            return {
                username: {
                    value: 'Username',
                    error: ''
                },
                password: {
                    value: 'Password123',
                    error: ''
                }
            }
        },
        computed: {
            disabled() {
                return (
                    this.username.error || this.password.error
                )
            }
        },
        methods: {
            update({ name, value, error }) {
                this[name].value = value
                this[name].error = error
            },
            submit() {
                console.log('Submitted')
            }
        }
    }
</script>

<style scoped>
</style>