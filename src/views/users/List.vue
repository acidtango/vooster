<template lang="pug">
 div
    UsersNav
    table
      thead
        th
          td Name
          td Email
      tbody
        tr
          td Kenobi
          td kenobi@sw.com
        tr
          td Anakin
          td anakin@sw.com
        tr
          td Luke
          td luke@sw.com
</template>

<script>
import UsersNav from './Nav'

export default {
  name: 'UsersList',
  components: { UsersNav },
}
</script>
