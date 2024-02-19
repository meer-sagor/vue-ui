<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <img :src="src" :alt="alt"
        :class="`rvx-rounded-full ${size === 'sm' && 'rvx-size-space20'} ${size === 'md' && 'rvx-size-space24'} ${size === 'lg' && 'rvx-size-space30'} ${size === 'xl' && 'rvx-size-space40'} `">
</template>

<script setup lang="ts">
interface Avatar {
    src: string
    alt: string
    size?: 'sm' | 'md' | 'lg' | 'xl'
}
withDefaults(defineProps<Avatar>(), {
    size: 'sm'
})
</script>

<style scoped></style>