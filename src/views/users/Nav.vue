<template lang="pug">
    nav
      RouterLink(to="/users") List
      RouterLink(to="/users/new") Add user
</template>

<script>
export default {
  name: 'UsersNav',
}
</script>
