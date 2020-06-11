<template>
  <div class="col-7">
    <table id="myTable">
      <tr class="header">
        <th width="25%">Country</th>
        <th>Total confirmed</th>
        <th>Total Deaths</th>
        <th>Total Recovered</th>
      </tr>
      <tr :key="index" v-for="(country, index) in covid.Countries">
        <td>{{ country.Country }}</td>
        <td>{{ country.TotalConfirmed }}</td>
        <td>{{ country.TotalDeaths }}</td>
        <td>{{ country.TotalRecovered }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
      name: 'Table',
      mounted() {
          this.$store.dispatch('loadData');
      },
      computed: {
          ...mapState([
            'covid'
          ])
      },
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  #myTable {
    border-collapse: collapse;
    width: 100%;

    th {
      background-color: #f1f8fe;
      color: #309bf8;
      font-size: 11px;
      text-transform: uppercase;
      text-align: left;
      padding: 20px 10px;
    }

    td {
      font-size: 12px;
      text-align: left;
      padding: 20px 10px;
    }
    tr {
      border-bottom: 1px solid #ddd;
    }
    &.header, &:hover {
      background-color: #f1f8fe;
      cursor: pointer;
    }
  }
</style>
