<template lang="pug">
  div.locale-changer
    h1 This is the login page
    select(v-model="$i18n.locale")
      option(v-for="(lang, i) in langs" :key="`lang-${i}`" :value="lang") {{ lang }}
    p {{ $t('message') }}
</template>

<script>
export default {
  name: 'Login',
  data() {
    return { langs: ['es', 'en'] }
  },
}
</script>
