<template>
  <div id="gridData">
    <v-client-table  :data="tableData" :columns="columns" :options="options"></v-client-table>
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
            css:'bulma',

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
            },
            template: 'default'
          }
        }
    }
</script>

<style scoped>
  #gridData {
    width: 95%;
    margin: 0 auto;
  }

  .VuePagination {
    text-align: center;
  }

  .vue-title {
    text-align: center;
    margin-bottom: 10px;
  }

  .vue-pagination-ad {
    text-align: center;
  }

  .glyphicon.glyphicon-eye-open {
    width: 16px;
    display: block;
    margin: 0 auto;
  }

  th:nth-child(3) {
    text-align: center;
  }

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
