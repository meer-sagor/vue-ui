<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <span :class="`material-symbols-${variant}`">
        {{ iconName }}
    </span>
</template>

<script setup lang="ts">
export interface Icon {
    iconName: string
    variant: 'outlined' | 'rounded' | 'sharp'
}

withDefaults(defineProps<Icon>(), {
    variant: 'rounded'
})
</script>

<style scoped></style>    