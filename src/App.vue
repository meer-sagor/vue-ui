<script setup lang="ts">
import Button from '@/components/Common/Button/Button.vue'
import ButtonOutline from '@/components/Common/Button/ButtonOutline.vue'
import InputText from '@/components/Form/InputText.vue'
import FloatInputText from '@/components/Form/FloatInputText.vue'
import Switch from '@/components/Form/Switch.vue'
import Card from '@/components/Common/Card.vue'
import Avatar from '@/components/Common/Avatar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
</script>

<template>
  <main class="rvx-container rvx-m-auto rvx-space-y-5">
    <Button>Button Text</Button>

    <Button :have-icon="true">Button Text</Button>


    <Button disabled :have-icon="true" :icon-position="'before'" icon-name="search">Button Disabled</Button>
    <ButtonOutline>Button Text </ButtonOutline>
    <br />
    <br />
    <InputText placeholder="hello world" />
    <br />
    <br />
    <FloatInputText placeholder="Float Input" label="Float Input" id="email" />
    <Switch />

    <Card>
      <h1>Hello world</h1>
    </Card>
    <Avatar src="https://picsum.photos/200/300" alt="user image" />

    <Sidebar class="rvx-bg-neutral-500 rvx-p-space40"/>


  </main>
</template>
