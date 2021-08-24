<template>
  <div>
    <h1>Users</h1>

    <input v-model="input" type="text" />
    <button>Add</button>

    <div v-for="(u, i) in users" :key="i">
      <p>{{ u }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      users: [],
    };
  },
  created () {
    console.log(this);
  },
  methods: {
    addUser() {
      const user = {
        id: 1,
        name: this.input,
      }

      this.users.push(user);
    },
    removeUser() {
      console.log(this.users);
    }
  },
};
</script>

<style></style>
