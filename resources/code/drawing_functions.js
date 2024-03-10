function drawStats(stats) {
    for (let index = 0; index < stats.length; index++) {
        const element = stats[index];

        ctx.beginPath();
        ctx.font = "12px sans-serif";
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillText(element.key, 10, 15+40*index);
        ctx.fillText(element.value, 10, 28+40*index);
    }
}

function drawPath(path, style='rgba(255, 255, 255, 1)') {
    ctx.beginPath();
    var start = all_points[path[0]];

    ctx.moveTo(start.x, start.y);
    
    drawPoint(start.x, start.y, "A", style, style);

    for (let index = 1; index < path.length; index++) {
        var next_point = all_points[path[index]];
        ctx.strokeStyle = style;
        ctx.lineTo(next_point.x, next_point.y);
        ctx.stroke();

        if (index+1 === path.length) {
            drawPoint(next_point.x, next_point.y, "B", style, style);
        } else {
            drawPoint(next_point.x, next_point.y, "", style, style);
        }
    };
};

function drawPaths(points, paths, x_dimension=1, y_dimension=2, size_dimension=1, opacity_dimension=1, style={r:255, g:255, b:255, a:1}) {
    paths.forEach(path => {
        console.log("PATH: ")
        var vector_n = {};
        for (let d in points[path.point1]) {
            vector_n[d] = points[path.point2][d] - points[path.point1][d];
        }

        console.log(vector_n)

        var gradient = ctx.createLinearGradient(0, 0, 0, 170);
        gradient.addColorStop(0, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a*points[path.point2][opacity_dimension]})`);
        gradient.addColorStop(1, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a*points[path.point1][opacity_dimension]})`);

        // Facing point 2 move left of centre 1/4 of point 1s radius
        var test_x = points[path.point1][x_dimension]+(vector_n[x_dimension]*2);
        var test_y = points[path.point1][y_dimension]+(vector_n[y_dimension]*2);
        drawPoint(test_x, test_y, "", 10, {r:255, g:0, b:0, a:1}, {r:255, g:0, b:0, a:1});
        
        // Facing point 2 move right of centre 1/4 of point 1s radius

        // Facing point 1 move left of centre 1/4 of point 2s radius

        // Facing point 1 move right of centre 1/4 of point 2s radius

        ctx.beginPath();
        
        ctx.strokeStyle = `rgba(${style.r}, ${style.g}, ${style.b}, ${1})`;
        ctx.fillStyle = gradient;

        ctx.moveTo(points[path.point1][x_dimension], points[path.point1][y_dimension]);
        ctx.lineTo(points[path.point2][x_dimension], points[path.point2][y_dimension]);
        
        ctx.stroke();
        ctx.fill();
    });
};

function drawPoint(x, y, id="", size=5, strokestyle={r:0,g:255,b:255,a:1}, fillstyle={r:0,g:255,b:255,a:1}) {
    ctx.font = "26px sans-serif";
    ctx.strokeStyle = `rgba(${strokestyle.r}, ${strokestyle.g}, ${strokestyle.b}, ${strokestyle.a})`;
    ctx.fillStyle = `rgba(${fillstyle.r}, ${fillstyle.g}, ${fillstyle.b}, ${fillstyle.a})`;;

    ctx.beginPath();
    ctx.arc(x,y,size,0,2 * Math.PI);

    if (id !== "") {
        ctx.fillText(id, x-30, y+5);
        ctx.strokeText(id, x-30, y+5);
    }

    ctx.fill();
    ctx.stroke();
};