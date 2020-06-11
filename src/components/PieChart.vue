<template>
    <div class="col-5 arc">
        <h3>Pie chart</h3>
        <div id="arc"></div>
        <a class="button" href="#">CLEAR SELECTED COUNTRY</a>
    </div>
</template>

<script>
    import * as d3 from 'd3'

    export default {
        name: 'PieChart',
        mounted() {
            this.generatePie();
        },
        methods: {
            generatePie() {
                let width = 342,
                    height = 342,
                    margin = 10;
                // Aux for radius margin
                let radius = Math.min(width, height) / 2 - margin

                let svg = d3.select("#arc")
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                // data
                let data = {
                    a: 11,
                    b: 22,
                    c: 33
                }

                // set the color scale
                let color = d3.scaleOrdinal()
                    .domain(data)
                    .range(["#bee0fd", "#74bdf9", "#309bf8"])

                // Compute the position of each group on the pie:
                let pie = d3.pie().value(function (d) {
                    return d.value;
                })
                let data_ready = pie(d3.entries(data))

                // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
                svg
                    .selectAll('whatever')
                    .data(data_ready)
                    .enter()
                    .append('path')
                    .attr('d', d3.arc()
                        .innerRadius(0)
                        .outerRadius(radius)
                    )
                    .attr('fill', function (d) {
                        return (color(d.data.key))
                    })
                    .style("opacity", 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        .arc {
            background-color: #f1f9ff;
            margin-left: 40px;
            padding-bottom: 55px;
            width: 37%;
        }

        .button {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            line-height: 50px;
            padding: 0 20px;
            min-width: 240px;
            color: #fff;
            border: none;
            background: linear-gradient(to right, #7fb2e5 50%, #06c 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            font-size: 14px;
            margin-top: 20px;
        }
    }
</style>
