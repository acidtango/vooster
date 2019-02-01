<template lang="pug">
  div#app
    #nav
      RouterLink(to="/") Home
      |  |
      |
      RouterLink(to="/users") Users
      |  |
      |
      RouterLink(to="/login") Login
      |  |
      |
      RouterLink(to="/register") Register
    RouterView
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
