<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style scoped>

button {
  border: 1px solid teal;
  padding: 10px 15px;
  color: teal;
  background: transparent;
  cursor: pointer;
  transition: .3s;
}

button:hover {
  color: #fff;
  background: teal;
}


</style>