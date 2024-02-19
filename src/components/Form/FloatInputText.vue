<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="rvx-relative rvx-w-full">
        <input
          :id="id"
          type="text"
          class="rvx-peer rvx-w-full rvx-rounded-lg rvx-border-neutral-500 rvx-px-4 rvx-py-3 rvx-text-normal rvx-text-neutral-700 rvx-placeholder-transparent focus:rvx-outline-none focus:rvx-ring focus:rvx-ring-primary-20"
          placeholder="john@doe.com"
        />
        <label
          :for="id"
          class="rvx-absolute -rvx-top-6 rvx-left-4 rvx-bg-white rvx-text-normal rvx-text-neutral-700 rvx-transition-all peer-placeholder-shown:rvx-top-2 peer-placeholder-shown:rvx-text-normal peer-focus:-rvx-top-6 peer-focus:rvx-text-normal peer-focus:rvx-text-gray-600"
          >{{ label }}</label
        >
    </div>
</template>

<script setup lang="ts">
interface Input {
  placeholder: string
  label: string
  id: string
  disabled?: boolean
}

defineProps<Input>()
</script>

<style scoped></style>
