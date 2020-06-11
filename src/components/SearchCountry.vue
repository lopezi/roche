<template>
    <div>
        <h1 class="search">Covid19 Summary</h1>
        <input type="text" id="searchCountry" v-on:keyup="myFunction" placeholder="Search by country..." title="Type in a country" autofocus>
    </div>
</template>

<script>
    export default {
        name: 'SearchCountry',
        methods: {
            // search Country by name
            myFunction: function () {
                let input, filter, table, tr, td, i, txtValue;
                input = document.getElementById("searchCountry");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[0];
                    if (td) {
                        txtValue = td.textContent || td.innerText;
                        if (txtValue.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .search {
        color: #309bf8; // to be replaced with color variable
    }
    #searchCountry {
        background-image: url('../assets/searchicon.png');
        background-position: 10px 10px;
        background-repeat: no-repeat;
        width: 93.5%;
        font-size: 16px;
        padding: 12px 20px 12px 40px;
        border: 1px solid #ddd; // to be replaced with color variable
        margin-bottom: 12px;
        margin-top: 12px;
    }
</style>
