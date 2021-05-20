const WindowHeight = document.body.clientHeight;
const WindowWidth = document.body.clientWidth;

console.log(WindowHeight);
console.log(WindowWidth);

/* 折線圖部分 */

const FULL_HEIGHT = WindowHeight*0.4,
      FULL_WIDTH = WindowWidth*0.45;
const
    margin = { top: 40, right: 30, bottom: 80, left: 80 },
    width = FULL_WIDTH - margin.left - margin.right - FULL_WIDTH*0.1,
    height = FULL_HEIGHT - margin.top - margin.bottom - FULL_HEIGHT*0.05;
const locator = d3.bisector((d) => d.time).left;

data_1 = [
    { name: '臺北好行' ,download: 5, val: 2.8 },
    { name: '臺北市立美術館',download: 3, val: 3},
    { name: '北市好停車',download: 5, val: 3.2},
    { name: 'HELLO TAIPEI',download: 4, val: 3.2},
    { name: '台北等公車',download: 6, val: 4.1},
    { name: '北市警政',download: 4.7, val: 4.2 },
]

data_2 = [
    { name: '新北垃圾車' ,download: 4, val: 2.9 },
    { name: '新北動健康3.0' ,download: 4, val: 3.1 },
    { name: '新北智慧社區' ,download: 5, val: 3.4 },
    { name: '新北市iPolice' ,download: 5, val: 3.6 },
    { name: '新北校園通' ,download: 4, val: 3.8 },
    { name: '我的新北市' ,download: 4.7, val: 4.4 },
]

data_3 = [
    { name: '桃園活動通' ,download: 2, val: 0 },
    { name: '桃園市市民卡' ,download: 5, val: 3.3 },
    { name: '桃園搭公車' ,download: 5.7, val: 3.5 },
    { name: '桃園智慧遊' ,download: 4.7, val: 4.4 },
    { name: '桃園道管即時影像系統' ,download: 3, val: 4.6 },
    { name: '桃園垃圾車' ,download: 5, val: 4.7 },
]

data_4 = [
    { name: '臺中共好社宅' ,download: 2.7, val: 1.7 },
    { name: '台中友善公車' ,download: 3, val: 3.2 },
    { name: '臺中購物節' ,download: 5, val: 3.4 },
    { name: '臺中長照App' ,download: 3, val: 3.7 },
    { name: '大玩台中' ,download: 4.7, val: 4.1 },
    { name: '樂活臺中' ,download: 4, val: 4.4 },
]

data_5 = [
    { name: '臺南市道路養護資訊系統' ,download: 2, val: 0 },
    { name: 'T-Bike臺南市公共自行車' ,download: 4.7, val: 2.1 },
    { name: 'OPEN台南1999' ,download: 4, val: 2.6 },
    { name: '大台南公車' ,download: 5, val: 3.6 },
    { name: '台南工作好找' ,download: 4.7, val: 3.9 },
    { name: '旅行台南' ,download: 5, val: 4 },
]

data_6 = [
    { name: '高雄挖管即時影像系統' ,download: 2, val: 0 },
    { name: '1999高雄一指通' ,download: 4, val: 1.8 },
    { name: '高雄市清潔資訊即時查詢' ,download: 3, val: 3.8 },
    { name: '高雄好停車' ,download: 3, val: 4.5 },
    { name: '高雄市戶政線上e指通' ,download: 4, val: 4.8 },
    { name: '高空大OUK' ,download: 3, val: 4.9 },
]

lineColor = [
    {
        'A': '#d0021b', // 台北
        'F': '#bd10e0', // 新北
        'H': '#4a90e2', // 桃園
        'B': '#7ed321', // 台中
        'D': '#f5a623', // 台南
        'E': '#8b572a', // 高雄
    }
]

const svg = d3
    .select('#chart')
    .append('svg')
    .attr("width", FULL_WIDTH)
    .attr("height", FULL_HEIGHT)
    .style("border", "1px solid #DEE2E6")
    .style("background", "white")
    .style("opacity", "0.8")
    .style("border-radius", ".25rem");

const xScale = d3
    .scaleLinear()
    .domain([0, 5.0])
    .range([0, width])

const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data_3.map(d => d.download))])
    .range([height, 0])

// define line chart drawer
const line = d3
    .line()
    .x(d => xScale(d.val))
    .y(d => yScale(d.download))


// draw x-axis
svg
    .append("g")
    .attr("transform", `translate(${margin.left},${height + margin.top})`)
    .call(d3.axisBottom(xScale));


// draw y-axis
svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .call(d3.axisLeft(yScale));

// draw data_1
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_A')
    .attr('d', line(data_1))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#D70000')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_1 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_1)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_A')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#d70000');


// draw data_2
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_F')
    .attr('d', line(data_2))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#d57507')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_2 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_2)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_F')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#d57507');

// draw data_3
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_H')
    .attr('d', line(data_3))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#00d76b')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_3 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_3)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_H')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#00d76b');

// draw data_4
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_B')
    .attr('d', line(data_4))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#03b6c2')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_4 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_4)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_B')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#03b6c2');

// draw data_5
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_D')
    .attr('d', line(data_5))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#005086')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_5 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_5)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_D')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#005086');

// draw data_6
svg
    .append('path')
    .attr('class', 'chart_line')
    .attr('id', 'line_E')
    .attr('d', line(data_6))
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .attr('stroke', '#5f08b6')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

// draw data_6 dots
svg
    .append('g')
    .selectAll('circle')
    .data(data_6)
    .enter()
    .append('circle')
    .attr('class', 'chart_dot_E')
    .attr('r', 4)
    .attr('transform', d => `translate(${xScale(d.val) + margin.left},${yScale(d.download) + margin.top})`)
    .attr('fill', '#5f08b6');



// draw x-axis text label
svg
    .append("text")
    .attr("x", FULL_WIDTH / 2)
    .attr("y", FULL_HEIGHT - 25)
    .style("text-anchor", "middle")
    .text("評分");

// draw y-axis text label
svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 30)
    .attr("x", -FULL_HEIGHT / 2 + 10)
    .style("text-anchor", "middle")
    .text("下載量（取log值）");


function wipe() {
    d3
        .selectAll('.chart_line')
        .attr('stroke', '#DEE2E6');

    d3
        .selectAll('.chart_dot_A')
        .attr('fill', '#DEE2E6');

    d3
        .selectAll('.chart_dot_F')
        .attr('fill', '#DEE2E6');

    d3
        .selectAll('.chart_dot_H')
        .attr('fill', '#DEE2E6');

    d3
        .selectAll('.chart_dot_B')
        .attr('fill', '#DEE2E6');
    d3
        .selectAll('.chart_dot_D')
        .attr('fill', '#DEE2E6');

    d3
        .selectAll('.chart_dot_E')
        .attr('fill', '#DEE2E6');

    d3.selectAll('.BALL')
      .attr('fill', '#DEE2E6');

}

function colorize() {
    d3
        .select('#line_A')
        .attr('stroke', '#d0021b');

    d3
        .select('#line_F')
        .attr('stroke', '#bd10e0');

    d3
        .select('#line_H')
        .attr('stroke', '#4a90e2');

    d3
        .select('#line_B')
        .attr('stroke', '#7ed321');

    d3
        .select('#line_D')
        .attr('stroke', '#f5a623');

    d3
        .select('#line_E')
        .attr('stroke', '#8b572a');

    d3
        .selectAll('.chart_dot_A')
        .attr('fill', '#d0021b');
    d3
        .selectAll('.chart_dot_F')
        .attr('fill', '#bd10e0');

    d3
        .selectAll('.chart_dot_H')
        .attr('fill', '#4a90e2');

    d3
        .selectAll('.chart_dot_B')
        .attr('fill', '#7ed321');

    d3
        .selectAll('.chart_dot_D')
        .attr('fill', '#f5a623');

    d3
        .selectAll('.chart_dot_E')
        .attr('fill', '#8b572a');
}

/* map部分 */

let svg_map = d3.select('#canvas')
            .append('svg')
            .style('height', WindowHeight*0.75)
            .style('width', WindowWidth*0.4)

let tooltip = d3.select('#tooltip').style('position', 'absolute')
    .style('background', 'grey')
    .style('width', 130)
    .style('height', 40)
    .style('display', 'none')

d3.select('#canvas').on('mousemove', function(e){
    tooltip.style('left', e.layerX + 20).style('top', e.layerY + 30)
})

let json_path = 'https://raw.githubusercontent.com/FrogL0612/Vis_map/main/data/taiwan_country_topojson.json'
let amount_path = 'https://raw.githubusercontent.com/FrogL0612/Vis_map/main/data/amount.csv'

d3.json(json_path).then((data) => {
    let counties = topojson.feature(data, data.objects.COUNTY_MOI_1090820)
    let projection = d3.geoMercator().center([121, 24.3]).scale(10000);
    let map_path = d3.geoPath().projection;

    d3.csv(amount_path).then((amount_data) => {
        console.log('附加上各縣市app數量')
        for (let i = 0; i < counties.features.length; i++) {
            for (let j = 0; j < amount_data.length; j++) {
                if (amount_data[j].country === counties.features[i].properties.COUNTYNAME) {
                    counties.features[i].properties.amount = parseInt(amount_data[j].amount)
                    break
                }
                counties.features[i].properties.amount = 0
            }
        }
    }).then(() => {

        let color = d3.scaleSequential(d3.interpolateYlGn)
            .domain([0, 25])

        let geoPath = svg_map.selectAll('.geo-path')
            .data(counties.features)
            .join('path')
            .attr('class', 'geo-path')
            .attr('d', map_path(projection))
            .style('fill', d=>{
                if (d.properties.amount === 0){
                    return 'lightgrey'
                } else {
                    return color(d.properties.amount)
                }
            })
            .on('mouseover', function(e){
                d3.select(this).style('stroke', 'white')
                d3.select(this).select(function(d){
                    if (d.properties.amount === 0) {
                        tooltip.select('text').html('暫無資料')
                        tooltip.style('display', 'block')
                    } else {
                        tooltip.select('text').html(d.properties.COUNTYNAME + 'app數 : ' + d.properties.amount)
                        tooltip.style('display', 'block')
                    }
                })
            })
            .on('mouseleave', function(e){
                d3.select(this).style('stroke', 'none')
                tooltip.style('display', 'none')
            })
            .on('click', function(e){
                d3.select(this).select(function(d){
                    let targetID = d.properties.COUNTYID
                    let targetColor = lineColor[0][targetID]

                    wipe()

                    d3.select('#line_' + targetID)
                      .attr('stroke', targetColor);

                    d3.selectAll('.' + targetID)
                        .attr('fill', targetColor);

                    d3.selectAll('.chart_dot_' + targetID)
                      .attr('fill', targetColor);
                })
            })
            .on('dblclick', colorize)

        let texts = svg_map.selectAll('text')
            .data(counties.features)
            .enter()
            .append('text')
            .attr('x', (d, i) => {
                return map_path(projection).centroid(d)[0]
            })
            .attr('y', (d, i) => {
                return map_path(projection).centroid(d)[1]
            })
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .text((d, i) =>{
                return d.properties.COUNTYNAME
            })
    })
})


//scrolly telling , from https://blog.csdn.net/tangdou5682/article/details/52351404

let index = 1;
let curIndex = 1;
let wrap = document.getElementById("wrap");
let main = document.getElementById("main");
let hei = document.body.clientHeight;
wrap.style.height = hei + "px";
let obj = document.getElementsByTagName("div");
for (let i = 0; i < obj.length; i++) {
    if (obj[i].className === 'page') {
        obj[i].style.height = hei + "px";
    }
}
let pageNum = document.querySelectorAll(".page").length;
let startTime = 0,
    endTime = 0,
    now = 0;

if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
    document.addEventListener("DOMMouseScroll", scrollFun, false);
} else if (document.addEventListener) {
    document.addEventListener("mousewheel", scrollFun, false);
} else if (document.attachEvent) {
    document.attachEvent("onmousewheel", scrollFun);
} else {
    document.onmousewheel = scrollFun;
}


function scrollFun(event) {
    startTime = new Date().getTime();
    let delta = event.detail || (-event.wheelDelta);
    if ((endTime - startTime) < -1000) {
        if (delta > 0 && parseInt(main.offsetTop) > -(hei * (pageNum - 1))) {
            index++;
            toPage(index);
        }
        if (delta < 0 && parseInt(main.offsetTop) < 0) {
            index--;
            toPage(index);
        }
        endTime = new Date().getTime();
    } else {
        event.preventDefault();
    }
}

function toPage(index) {
    if(index!=curIndex){
        let delta=index - curIndex;
        now = now - delta * hei;
        $("#main").animate({
            top: (now + 'px')
        }, 1000);
        curIndex = index;
        $(".pageUlLi").css("color", "black");
        $("#pageUlLi" + index).css("color", "red");
    }
}

document.getElementById("pageUlLi1").onmouseover = function () {
    toPage(1);
}
document.getElementById("pageUlLi2").onmouseover = function () {
    toPage(2);
}
document.getElementById("pageUlLi3").onmouseover = function () {
    toPage(3);
}
document.getElementById("pageUlLi4").onmouseover = function () {
    toPage(4);
}
