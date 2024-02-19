<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <span :class="`material-symbols-${iconVariant}`">
    {{ iconName }}
  </span>
</template>

<script setup lang="ts">
export interface Icon {
  iconName: string
  iconVariant: 'outlined' | 'rounded' | 'sharp'
}

withDefaults(defineProps<Icon>(), {
  iconName: 'menu',
  iconVariant: 'rounded'
})
</script>

<style scoped></style>
