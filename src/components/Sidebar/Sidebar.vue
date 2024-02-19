<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <aside class="">
        <ul class="rvx-bg-white">
            <li :class="``"
                v-for="menu in menuItems" :key="menu.name" @click="menu.activeMenu = true">
                <div>
                    <div :class="`${menu.activeMenu && 'rvx-border-l-4 rvx-border-primary rvx-bg-primary-10'} rvx-cursor-pointer rvx-border-l-4 rvx-border-l-transparent rvx-px-space12 rvx-py-[1.1rem] rvx-transition-all rvx-delay-75 rvx-duration-500 hover:rvx-border-l-4 hover:rvx-border-primary hover:rvx-bg-primary-10 rvx-flex rvx-items-center rvx-gap-space12 rvx-justify-between`">
                        <div class="rvx-flex rvx-gap-space12">
                            <Icon :icon-name="menu.iconName" :iconVariant="menu.iconVariant" />
                            {{ menu.name }}
                        </div>
                        <Icon v-if="menu.children?.length" :icon-name="'expand_more'" :iconVariant="menu.iconVariant" />
                    </div>
                    <ul v-if="menu.children?.length && menu.activeMenu" class="" >
                        <li v-for="child in menu.children" :key="child.name" class="rvx-flex rvx-items-center rvx-gap-space12 rvx-pl-space40 rvx-px-space12 rvx-py-[1.1rem] rvx-cursor-pointer hover:rvx-bg-primary-10 rvx-transition-all rvx-delay-75 rvx-duration-500">
                            <Icon :icon-name="child.iconName" :iconVariant="child.iconVariant" />
                            {{ child.name }}
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import Icon, { type Icon as IconType } from '@/components/Common/Icon.vue'

interface MenuItem extends Partial<IconType> {
    name: string
    activeMenu: boolean
    children?: MenuItem[]
}
interface Sidebar {
    menuItems: MenuItem[]
}

withDefaults(defineProps<Sidebar>(), {
    menuItems: () => [
        {
            name: 'Admin Notification',
            iconName: 'search',
            iconVariant: 'rounded',
            activeMenu: false,
            children: [
                {
                    name: 'child Admin Notification',
                    iconName: 'update',
                    iconVariant: 'rounded',
                    activeMenu: false
                },
                
            ]
        },
        {
            name: 'Notification',
            iconName: 'notifications',
            iconVariant: 'rounded',
            activeMenu: false,
        }
    ]
})

</script>

<style scoped></style>
