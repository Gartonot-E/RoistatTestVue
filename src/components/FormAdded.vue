<template>
  <h2>Добавление пользователя</h2>
  <label>
    <span>Имя:</span>
    <MyInput 
      v-model="nameInp" 
      :inputType="'text'"
      :isInvalid="validName"
    />
  </label>
  <label>
    <span>Телефон:</span>
    <MyInput 
      v-model="phoneInp" 
      :inputType="'tel'"
      :isInvalid="validPhone"
    />
  </label>
  <label>
    <span>Начальник:</span>
    <MySelect 
      v-model.number="selectedPeople"
      :options="users"
    />
  </label>
  <my-button @click="createUser">
    Сохранить
  </my-button>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    selectedPeople: 0,
    nameInp: '',
    phoneInp: '',
    validName: false,
    validPhone: false,
    user: {
      id: '',
      name: '',
      phone: '',
      parrent: ''
    }
  }),
  methods: {
    createUser() {
      // Проверяем на пустоту полей, если пустые, то валидиторовать
      this.nameInp.length == 0 ? this.validName = true : this.validName = false
      this.phoneInp.length == 0 ? this.validPhone = true : this.validPhone = false

      // Если валидация прошла успеша, эмитим данные к родителю
      if(this.validName == false && this.validPhone == false) {
        this.user.id = Date.now();
        this.user.name = this.nameInp;
        this.user.phone = this.phoneInp;
        this.user.parrent = this.selectedPeople;
        this.$emit('getUser', this.user, false);
      }
    }
  },
  watch: {
    // Проверяем на не пустое поле, если пользователь стёр данные
    nameInp(newValue) { 
      newValue.length == 0 ? this.validName = true : this.validName = false
    },
    // Проверяем на не пустое поле, если пользователь стёр данные
    phoneInp(newValue) {
      newValue.length == 0 ? this.validPhone = true : this.validPhone = false
    }
  }
}
</script>

<style>
label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

</style>