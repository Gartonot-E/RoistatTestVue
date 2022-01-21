<template>
  <div class="container">
    <my-button @click="AddedUser">
      Добавить
    </my-button>
    <my-dialog  v-model:show="dialogVisible">
      <FormAdded :users="users" @getUser="getUser"/>
    </my-dialog>

    <hr>

    <MyTable 
      :users="users" 
      @sortByName="sortByName"
      @sortByPhone="sortByPhone"
    />
  </div>
</template>

<script>
import FormAdded from '@/components/FormAdded'
import MyTable from '@/components/MyTable'

export default {
  name: 'App',
  components: { FormAdded, MyTable },
  data: () => ({
    dialogVisible: false,
    nameInp: null,
    users: []
  }),
  methods: {
    sortByName(data) {
      this.users.sort(function(a, b) {
          if(data == 'a') {
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
          } else {
            return b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1;
          }
      })
    },
    sortByPhone(data) {
      this.users.sort(function(a, b) {
        if(data == 'a') {
          return a.phone > b.phone ? 1 : -1;
        } else {
          return b.phone > a.phone ? 1 : -1;
        }
      })
    },
    AddedUser() {
      // Открываем модальное окно
      this.dialogVisible = true
    },
    getUser(data, dialogVisible) {
      // Отключаем модальное окно
      this.dialogVisible = dialogVisible;
      // Добавляем пользователя в общий список
      this.users.push(data);
      localStorage.setItem('array', JSON.stringify(this.users));
    },
    getUserFromStorage() {
      // Достаём из локалстораджа пользователей, которые мы сохранили
      if(localStorage.array) {
        this.users = JSON.parse(localStorage.getItem('array'))
      }
    }
  },
  mounted() {
    this.getUserFromStorage();
  }
}
</script>

<style>
/* Базовые стили */
@import url("./assets/css/base.css");
</style>
