<!-- eslint-disable vue/multi-word-component-names -->
<template>
          <div class="py-16">
            <Switch
              v-model="enabled"
              :class="enabled ? 'rvx-bg-primary' : 'rvx-bg-neutral-500'"
              class="rvx-relative rvx-inline-flex rvx-h-[3rem] rvx-w-[6rem] rvx-shrink-0 rvx-cursor-pointer rvx-rounded-full rvx-border-2 rvx-border-transparent rvx-transition-colors rvx-duration-200 rvx-ease-in-out focus:rvx-outline-none focus-visible:rvx-ring-2 focus-visible:rvx-ring-white/75"
            >
              <!-- <span class="sr-only">Use setting</span> -->
              <span
                aria-hidden="true"
                :class="enabled ? 'rvx-translate-x-[3.1rem]' : 'rvx-translate-x-0'"
                class="rvx-pointer-events-none rvx-inline-block rvx-h-[2.5rem] rvx-w-[2.5rem] rvx-transform rvx-rounded-full rvx-bg-white rvx-shadow-lg rvx-ring-0 rvx-transition rvx-duration-200 rvx-ease-in-out"
              >
                <Icon icon-name="check" class="rvx-text-primary" v-if="enabled" />
        </span>

    </Switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import Icon from '../Common/Icon.vue'


const enabled = ref(false)
</script>
