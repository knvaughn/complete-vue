<template>
    <div class="label">
        <label :for="inputName">{{ inputName }}</label>
        <div class="error">{{ error }}</div>
    </div>
    <input 
        :id="inputName" 
        :type="inputType"
        :value="value"
        @input="input"
    >
</template>

<script>
    export default {
        emits: [
            'update'
        ],
        props:  {
            inputName: {
                type: String,
                required: true
            },
            inputType: {
                type: String,
                default: 'text'
            },
            rules: {
                type: Object,
                default: {}
            },
            value: {
                type: String,
                required: true
            },
            error: {
                type: String
            }
        },
        data() {
            return {
            }
        },
        computed: {
        },
        created() {
            this.$emit('update', {
                value: this.value,
                name: this.inputName.toLowerCase(),
                error: this.validate(this.value)
            })
        },
        methods: {
            input($event) {
                this.$emit('update', {
                    value: $event.target.value,
                    name: this.inputName.toLowerCase(),
                    error: this.validate($event.target.value)
                })
            },
            validate(value) {
                if (this.rules.required && value.length === 0) {
                    return 'Value is required'
                }

                if (this.rules.min  && value.length < this.rules.min) {
                    return `The min length is ${this.rules.min}`
                }
            }
        }
    }
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>