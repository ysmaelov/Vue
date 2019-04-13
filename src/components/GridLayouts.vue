<template>
  <grid-layout
    :layout.sync="testLayout"
    :col-num="3"
    :row-height="60"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[10, 10]"
    :use-css-transforms="true"
  >

    <grid-item v-for="item in testLayout"
               :key="item.i"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i">
      <!--<span>{{item.i}}</span>-->
      <component :is="item.is"></component>
    </grid-item>
  </grid-layout>
</template>

<script>
  import { GridLayout } from 'vue-grid-layout';
  import { GridItem } from 'vue-grid-layout';
  import 'vue-grid-layout/public/app.css'
  import HelloWorld from "./HelloWorld";
  import MenuSidebar from './MenuSidebar'
  import GridData from './GridData'

  let testLayout = [
    {is:'HelloWorld',"x":0,"y":0,"w":1,"h":2,"i":"0"},
    {is:'MenuSidebar',"x":2,"y":0,"w":1,"h":2,"i":"1"},
   {is:'GridData',"x":4,"y":0,"w":2,"h":5,"i":"2"},
    /* {"x":6,"y":0,"w":2,"h":3,"i":"3"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
    {"x":2,"y":6,"w":2,"h":2,"i":"19"}*/
  ];
  export default {
    components: {
      HelloWorld,
      GridLayout,
      MenuSidebar,
      GridItem,
      GridData
    },
    data(){
          return {testLayout,
            draggable: true,
            resizable: true,
            mirrored: false,
            responsive: true,
            rowHeight: 30,
            colNum: 12,
            index: 0}
    }
    }
</script>

<style scoped>
  .vue-grid-item{overflow: hidden}
</style>
