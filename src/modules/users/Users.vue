<template lang="pug">
  div
    h1 Users
    nav
      RouterLink(to="/users") List
      RouterLink(to="/users/new") Add user
    RouterView
</template>

<script>
export default {
  name: 'Users',
}
</script>
