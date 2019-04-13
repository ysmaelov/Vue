<template>
  <div id="people">
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
  import Vue from 'vue'

  Vue.use(ClientTable);

  export default {
        name: "GridData",
        data() {
          return {
            columns: ['id', 'name', 'age'],
            tableData: [
              {id: 1, name: "John", age: "20"},
              {id: 2, name: "Jane", age: "24"},
              {id: 3, name: "Susan", age: "16"},
              {id: 4, name: "Chris", age: "55"},
              {id: 5, name: "Dan", age: "40"}
            ],
            options: {
              // see the options API
              columnsDropdown:true,
            }
          }
        }
    }
</script>

<style scoped>
  .VueTables__child-row-toggler {
    width: 16px;
    height: 16px;
    line-height: 16px;
    display: block;
    margin: auto;
    text-align: center;
  }

  .VueTables__child-row-toggler--closed::before {
    content: "+";
  }

  .VueTables__child-row-toggler--open::before {
    content: "-";
  }
</style>
