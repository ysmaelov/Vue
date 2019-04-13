<template>
  <sidebar-menu
    :menu="menu"
    :collapsed="collapsed"
    :theme="selectedTheme"
    :show-one-child="true"
    @collapse="onCollapse"
    @itemClick="onItemClick"
  /></template>

<script>
  import { SidebarMenu } from 'vue-sidebar-menu'
  import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

  export default {
    components: {
      SidebarMenu
    },
    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '350px'
      },
      widthCollapsed: {
        type: String,
        default: '50px'
      },
      showChild: {
        type: Boolean,
        default: true
      },
      theme: {
        type: String,
        default: ''
      },
      showOneChild: {
        type: Boolean,
        default: false
      },
      rtl: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isCollapsed: this.collapsed,
        mobileItem: null,
        mobileItemPos: 0,
        mobileItemHeight: 0,
        closeTimeout: null,
        activeShow: null,
        menu: [
          {
            header: true,
            title: 'Main Navigation',
            // component: componentName
            // visibleOnCollapse: true
          },
          { // item
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user',
            // disabled: true
            /*
            badge: {
                text: 'new',
                // class:''
            }
            */
          },
          { // item with child
            href: '/HelloWorld',
            title: 'HelloWorld',
            icon: 'fa fa-chart-area',
          },
          { // item with child
            href: '/GridLayouts',
            title: 'GridLayouts',
            icon: 'fa fa-chart-area',
          },
          { // item with child
            href: '/GridData',
            title: 'GridData',
            icon: 'fa fa-chart-area',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
