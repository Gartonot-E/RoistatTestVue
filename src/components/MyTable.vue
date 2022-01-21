<template>
  <div class="table">
    <div class="table__head">
      <span @click="sortByName">Имя</span>
      <span @click="sortByPhone">Телефон</span>
    </div>

    <div class="table__body" v-if="users.length != 0">
      <ul class="user-list">
        <li 
          v-for="user in users"
          :key="user.id"
        >
          <template v-if="user.parrent == 0">
            <span>{{ user.name }}</span>
            <span>{{ user.phone }}</span>
          </template>

          <template v-else>
            <ul>
              <li>
                <span>{{ user.name }}</span>
                <span>{{ user.phone }}</span>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </div>
    <div class="table__notUser" v-else>
      Список пользователей пуст
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array
    }
  },
  data: () => ({
    sort: 'a',
    sortPhone: 'a'
  }),
  methods: {
    sortByName() {
      // Сортировка a - с начала алфавита  z - с конца алфавита
      this.sort == 'a' ? this.sort = 'z' : this.sort = 'a';
      this.$emit('sortByName', this.sort);
    },
    sortByPhone() {
      this.sortPhone == 'a' ? this.sortPhone = 'z' : this.sortPhone = 'a';
      this.$emit('sortByName', this.sortPhone);
    }
  }

}
</script>

<style>
@import url('../assets/css/table.css');
</style>