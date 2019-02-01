<template lang="pug">
  button(:class="classNames" :disabled="disabled")
    slot
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    disabled: Boolean,
  },
  computed: {
    classNames() {
      return {
        [`button--${this.type}`]: true,
        'button--disabled': this.disabled,
      }
    },
  },
}
</script>

<style scoped lang="scss">
.button {
  &--primary {
    background: red;
  }

  &:disabled {
    pointer-events: none;
  }
}
</style>
