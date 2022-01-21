<template>
  <input 
    :class="isInvalid ? 'invalid' : false"
    :type="inputType" 
    v-model="modelValue" 
    @input="getValue"
  >
  <small v-if="isInvalid">Поле не заполненно</small>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    modelValue: {
      type: String
    },
    inputType: {
      type: String,
      default: 'text'
    },
    isInvalid: {
      type: Boolean
    }
  },
  methods: {
    getValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

  input {
    border: 1px solid #e1e1e1;
    padding: 10px 16px;
    position: relative;
  }

  input.invalid,
  input.invalid:focus,
  input.invalid:active {
    border: 1px solid #FF8484;
    outline: #FF8484;
  }

  small {
    color: #FF8484;
  }

</style>