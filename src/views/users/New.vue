<template lang="pug">
  div
    UsersNav
    form
      input(name="name" placeholder="name")
      input(name="email" placeholder="email")
      input(name="password" placeholder="password")
</template>

<script>
import UsersNav from './Nav'

export default {
  name: 'UsersNew',
  components: { UsersNav },
}
</script>
