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

function drawPath(path, points, x_dimension=1, y_dimension=2, size_dimension=-1, opacity_dimension=-1, style={r:255, g:255, b:255, a:1}) {
    ctx.beginPath();
    var start = points[path[0]];

    ctx.moveTo(start[x_dimension], start[y_dimension]);
    
    
    if (size_dimension != -1) {
        drawPoint(start[x_dimension], start[y_dimension], "A", start[size_dimension]*0.1, style, style)
    } else {
        drawPoint(start[x_dimension], start[y_dimension], "A", 5, style, style)
    }

    for (let index = 1; index < path.length; index++) {
        var next_point = points[path[index]];
        ctx.strokeStyle = style;
        ctx.lineTo(next_point[x_dimension], next_point[y_dimension]);
        ctx.stroke();

        if (index+1 === path.length) {
            if (size_dimension != -1) {
                drawPoint(next_point[x_dimension], next_point[y_dimension], "B", next_point[size_dimension]*0.1, style, style)
            } else {
                drawPoint(next_point[x_dimension], next_point[y_dimension], "B", 5, style, style)
            }
        } else {
            if (size_dimension != -1) {
                drawPoint(next_point[x_dimension], next_point[y_dimension], "", next_point[size_dimension]*0.1, style, style)
            } else {
                drawPoint(next_point[x_dimension], next_point[y_dimension], "", 5, style, style)
            }
        }
    };
};

function drawPaths(points, paths, x_dimension=1, y_dimension=2, size_dimension=-1, opacity_dimension=-1, style={r:255, g:255, b:255, a:1}) {
    paths.forEach(path => {
        var gradient = ctx.createLinearGradient(points[path.point1][x_dimension], points[path.point1][y_dimension], points[path.point2][x_dimension], points[path.point2][y_dimension]);

        if (opacity_dimension != -1) {
            gradient.addColorStop(0, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a*points[path.point1][opacity_dimension]})`);
            gradient.addColorStop(1, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a*points[path.point2][opacity_dimension]})`);
        } else {
            gradient.addColorStop(0, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a})`);
            gradient.addColorStop(1, `rgba(${style.r}, ${style.g}, ${style.b}, ${style.a})`);
        }

        ctx.beginPath();
        
        ctx.strokeStyle = gradient;
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