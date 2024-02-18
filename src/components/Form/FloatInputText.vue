<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="rvx-relative rvx-w-full">
        <input :id="id" type="text"
            class="rvx-peer rvx-w-full rvx-text-neutral-700 rvx-border-neutral-500 rvx-rounded-lg rvx-text-normal rvx-px-4 rvx-py-3 rvx-placeholder-transparent focus:rvx-outline-none focus:rvx-ring focus:rvx-ring-primary-20"
            placeholder="john@doe.com" />
        <label :for="id"
            class="rvx-absolute rvx-text-neutral-700 rvx-left-4 -rvx-top-6 rvx-text-normal rvx-transition-all peer-placeholder-shown:rvx-text-normal rvx-bg-white peer-placeholder-shown:rvx-top-2 peer-focus:-rvx-top-6 peer-focus:rvx-text-gray-600 peer-focus:rvx-text-normal">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">

interface Input {
    placeholder: string
    label: string,
    id: string
    disabled?: boolean
}

defineProps<Input>()

</script>

<style scoped></style>