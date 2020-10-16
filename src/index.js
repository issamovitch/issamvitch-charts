import { colors } from "./util/data"
const rgba = require('color-rgba')

var IssChart = function(type, elem, options, data = null) {
    var default_data = { "no Data": 50 }
    let helper = new ChartHelper(type, elem, options, data || default_data)
    helper.init()
    return helper
}

class ChartHelper {

    constructor(type, elem, options, data) {
        this.type = type
        this.elem = elem
        this.default_options = {
            width: 300,
            height: 300,
            title: null,
            title_position: "top", // top, bottom
            tooltips: true,
            labels: true,
            debug: false,
        }
        this.options = Object.assign(this.default_options, options)
        this.data = data
    }

    init() {
        this.total = 0
            // Initialization
        this.canvas = document.createElement("canvas")
        this.elem.className = "issamovitch-chart"
        this.canvas.id = "issamovitch-chart-" + Math.random().toString(36).substr(2, 9)
        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;
        this.elem.appendChild(this.canvas)
            // Render
        this.render()
    }

    debug() {
        let pre = document.createElement("pre")
        let debug = { options: this.options, data: this.data }
        pre.textContent = JSON.stringify(debug, undefined, 2)
        pre.className = "debug"
        document.body.appendChild(pre)
    }

    setData(data) {
        this.data = data;
        this.render()
    }

    setOptions(options) {
        this.options = Object.assign(this.default_options, options)
        this.setData(this.data)
    }

    render() {
        this.show_title()
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.options.debug)
            this.debug()
        this.total = 0
        this[this.type]()
        let _this = this
        if (this.options.tooltips)
            this.canvas.addEventListener("mousemove", function(e) {
                _this.show_tooltips(e)
            })
        if (this.options.labels)
            this.show_labels()
    }

    show_title() {
        var elements = this.elem.getElementsByClassName("title");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        if (this.options.title) {
            let title = document.createElement("div")
            title.className = "title"
            title.innerHTML = this.options.title
            if (this.options.title_position == "top") {
                this.elem.prepend(title)
                title.style.marginBottom = "10px"
            } else if (this.options.title_position == "bottom") {
                this.elem.appendChild(title)
                title.style.marginTop = "10px"
            }
        }
    }

    show_tooltips(e) {
        var elements = this.elem.getElementsByClassName("tooltip");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        let ctx = this.canvas.getContext("2d");
        var x = e.clientX;
        var y = e.clientY;
        var data = ctx.getImageData(x, y, 1, 1).data
        var data_3 = parseFloat(data[3] / 255)
        var data = `rgba(${data[0]},${data[1]},${data[2]},${data_3})`
        for (var item in this.data) {
            let color = this.data[item].color
            if (color == data) {
                var percentage = parseInt(this.data[item].value / this.total * 100)
                let tooltip = document.createElement("div")
                tooltip.className = 'tooltip'
                tooltip.innerHTML = item + ' ' + percentage + '%'
                tooltip.style.top = (y - 30) + "px";
                tooltip.style.left = x + "px";
                this.elem.appendChild(tooltip)
            }
        }
    }

    show_labels() {
        var elements = this.elem.getElementsByClassName("labels");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        let ul = document.createElement("ul")
        ul.className = "labels"
        for (var item in this.data) {
            let li = document.createElement("li")
            var percentage = parseInt(this.data[item].value / this.total * 100)
            li.innerHTML = '<div class="label-box" style="background:' + this.data[item].color + ';"></div>' +
                '<span>' + item + ' ' + percentage + '%</span>'
            ul.appendChild(li)
        }
        this.elem.appendChild(ul)
    }

    piechart() {
        for (var item in this.data) {
            this.total += this.data[item].value
        }
        let ctx = this.canvas.getContext("2d");
        let startAngle = 0
        let i = 0;
        for (var item in this.data) {
            let val = this.data[item].value
            let color = this.data[item].color || colors()[i++]
            color = this.data[item].color = `rgba(${rgba(color)[0]},${rgba(color)[1]},${rgba(color)[2]},${rgba(color)[3]})`
            let endAngle = startAngle + Math.PI * 2 * (val / this.total)
            this.drawPieSlice(ctx,
                this.options.width / 2,
                this.options.height / 2,
                Math.min(this.options.width / 2, this.options.height / 2),
                startAngle,
                endAngle,
                color)
            startAngle = endAngle
        }
    }

    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
}

export default IssChart