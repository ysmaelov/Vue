<template>
  <div id="app">
    <div id="menu">
      <MenuSidebar></MenuSidebar>
    </div>
    <div id ="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import MenuSidebar from './components/MenuSidebar.vue'
  import HelloWorld from "./components/HelloWorld";
  import GridLayouts from "./components/GridLayouts"
export default {
  name: 'App',
  components:{HelloWorld, MenuSidebar,GridLayouts}
}
</script>

<style>
#menu{
  position: left;
}
  #main{
    position: relative;
  }
</style>
