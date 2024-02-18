<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button
        :class="`rvx-bg-primary hover:rvx-bg-primary-80 rvx-text-white rvx-rounded-lg rvx-px-[.9rem] rvx-py-[1.6rem] rvx-min-w-[11.7rem] disabled:rvx-bg-neutral-400 disabled:rvx-cursor-not-allowed ${haveIcon && 'rvx-flex rvx-gap-4 rvx-items-center'}`">
        <Icon :icon-name="iconName" v-if="haveIcon && iconPosition === 'after'" />
        <slot />
        <Icon :icon-name="iconName" v-if="haveIcon && iconPosition === 'before'" />
    </button>
</template>

<script setup lang="ts">
import Icon, { type Icon as IconType } from '../Icon.vue';
interface Button extends Partial<IconType> {
    haveIcon?: boolean
    iconPosition?: 'before' | 'after'
    iconClass?: string
}
withDefaults(defineProps<Button>(), {
    iconName: 'menu',
    iconPosition: 'after'
})
</script>

<style scoped></style>