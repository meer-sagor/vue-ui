<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import ButtonOutline from '@/components/Button/ButtonOutline.vue'
import InputText from '@/components/Form/InputText.vue'
import FloatInputText from '@/components/Form/FloatInputText.vue'
import Switch from '@/components/Form/Switch.vue'
</script>

<template>
  <main class="rvx-container rvx-m-auto rvx-space-y-5">
    <Button>Button Text</Button>
    <Button :have-icon="true">Button Text</Button>
    <Button disabled :have-icon="true" :icon-position="'before'" icon-name="search">Button disabled</Button>
    <ButtonOutline>Button Text </ButtonOutline>
    <br>
    <br>
    <InputText placeholder="hello world" />
    <br>
    <br>
    <FloatInputText placeholder="Float Input" label="Float Input" id="email" />
    <Switch/>
  </main>
</template>
