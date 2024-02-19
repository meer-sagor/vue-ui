<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    :class="`rvx-min-w-[11.7rem] rvx-rounded-lg rvx-bg-primary rvx-px-[.9rem] rvx-py-[1.6rem] rvx-text-white hover:rvx-bg-primary-80 disabled:rvx-cursor-not-allowed disabled:rvx-bg-neutral-400 ${haveIcon && 'rvx-flex rvx-items-center rvx-gap-4'}`">
    <Icon :icon-name="iconName" v-if="haveIcon && iconPosition === 'before'" />
    <slot />
    <Icon :icon-name="iconName" v-if="haveIcon && iconPosition === 'after'" />
  </button>
</template>

<script setup lang="ts">
import Icon, { type Icon as IconType } from '../Icon.vue'

interface Button extends Partial<IconType> {
  haveIcon?: boolean
  iconPosition?: 'before' | 'after'
  iconClass?: string
}
withDefaults(defineProps<Button>(), {
  iconName: 'menu',
  iconPosition: 'before'
})
</script>

<style scoped></style>
