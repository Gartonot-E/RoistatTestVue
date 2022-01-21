<template>
  <div 
    class="dialog" 
    v-if="show" 
    @click="hideDialog"
  >
    <div 
      @click.stop 
      class="dialog__content"
    >
      <div class="dialog__header">
          <span @click="hideDialog">&times;</span>
      </div>
      <div class="dialog__body">
        <slot></slot>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }

}
</script>

<style scoped>
.dialog {
  top: 0; left: 0;
  bottom: 0; right: 0;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
}

.dialog__header {
  display: flex;
  justify-content: flex-end;
}

.dialog__header span {
  color: red;
  font-size: 30px;
  margin: 0;
  padding: 0;
  line-height: 0.8;
  cursor: pointer;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 24px;
}

.dialog__body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}


</style>