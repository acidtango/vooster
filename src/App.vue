<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Home</RouterLink>|
      <RouterLink to="/about">About</RouterLink>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
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
