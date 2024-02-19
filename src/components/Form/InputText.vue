<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <input
        class="rvx-form-input rvx-w-full rvx-rounded-lg rvx-border-neutral-500 rvx-px-4 rvx-py-3 rvx-text-normal rvx-text-neutral-700 rvx-outline-none focus:rvx-ring focus:rvx-ring-primary-20"
        :placeholder="placeholder"
      />
</template>

<script setup lang="ts">
interface Input {
  placeholder: string
  disabled?: boolean
}

defineProps<Input>()
</script>

<style scoped></style>
