<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <Header/>
            </div>
            <div class="row">
                <SearchCountry/>
                <Table/>
                <PieChart/>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./components/Header";
    import SearchCountry from "./components/SearchCountry";
    import Table from './components/Table.vue'
    import PieChart from "./components/PieChart";

    export default {
        name: 'App',
        components: {
            Header,
            SearchCountry,
            Table,
            PieChart
        }
    }
</script>

<style lang="scss">
    body {
      margin: 0;
    }
    // simple grid
    $width: 100%;
    $gutter: 4%;
    $breakpoint-small: 33.75em;
    $breakpoint-med: 45em;
    $breakpoint-large: 60em;

    .container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        @media only screen and (min-width: $breakpoint-small) {
            width: 80%;
        }

        @media only screen and (min-width: $breakpoint-large) {
            width: 75%;
            max-width: 60rem;
        }
    }

    .row {
        position: relative;
        width: 100%;
    }

    .row [class^="col"] {
        float: left;
        margin: 0;
        min-height: 0.125rem;
    }

    .row::after {
        content: "";
        display: table;
        clear: both;
    }

    .col-7,
    .col-5 {
        width: $width;
    }

    @media only screen and (min-width: $breakpoint-med) {
        .col-5 {
            width: ($width / (12 / 5)) - ($gutter * 7 / 12);
        }
        .col-7 {
            width: ($width / (12 / 7)) - ($gutter * 5 / 12);
        }
        .col-12 {
            width: $width;
        }
    }
    #app {
        font-family: Arial, Avenir, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
