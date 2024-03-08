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

function drawPath(path) {
    ctx.beginPath();
    var start = all_points[path[0]];
    ctx.moveTo(start.x, start.y);

    for (let index = 1; index < path.length; index++) {
        var next_point = all_points[path[index]];
        ctx.lineTo(next_point.x, next_point.y);
    }
    
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';            
    ctx.stroke();
};

function drawPaths(paths) {
    paths.forEach(path => {
        ctx.beginPath();
        ctx.moveTo(all_points[path.point1].x, all_points[path.point1].y);
        ctx.lineTo(all_points[path.point2].x, all_points[path.point2].y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.stroke();
    });
};