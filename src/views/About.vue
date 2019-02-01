<template lang="pug">

</template>

<template lang="pug">
  div.locale-changer
    select(v-model="$i18n.locale")
      option(v-for="(lang, i) in langs" v-key="`Lang${i}`" v-value="lang") {{ lang }}
    p {{ $t('message') }}
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return { langs: ['es', 'en'] }
  },
}
</script>
