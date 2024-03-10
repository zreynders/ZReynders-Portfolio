function generatePoints(count=100, dimensions=2, dimension_maxes=[canvas.width, canvas.height]) {
    var points = [];
    var targets = [];

    for (var point_index = 0; point_index < count; point_index++) {
        // Generate the position of the point in n-dimension space
        var new_point = {};
        var new_target = {};
        for (var dimension_index = 1; dimension_index <= dimensions; dimension_index++) {
            new_point[dimension_index] = Math.round(Math.random() * dimension_maxes[dimension_index-1]);
            new_target[dimension_index] = new_point[dimension_index];
        }

        points.push(new_point);
        targets.push(new_target);
    }

    return {points: points, targets: targets};
}

function movePoints(points, targets, movement_speed=0.2, dimension_maxes=[canvas.width, canvas.height]) {
    for (let i = 0; i < points.length; i++) {
        for (let key in points[i]) {
            // If a dimension has reached it's target then generate a new one.
            if (Math.round(points[i][key]) === Math.round(targets[i][key])) {
                targets[i][key] = Math.round(Math.random() * dimension_maxes[key-1]);
            }           

            // Move toward the target
            if (points[i][key] > targets[i][key]) {
                points[i][key] -= movement_speed;
            } else {
                points[i][key] += movement_speed;
            }
        };
    }

    return {points: points, targets: targets};
}

function nearestPoints(points, closest_points=3) {
    var paths = [];

    for (let i = 0; i < points.length; i++) {
        var distances = []
        for (let j = 0; j < points.length; j++) {
            if (j == i){
                continue;
            }

            distances.push({point1: i, point2: j, distance: calcDistance(points[i], points[j])});
        };

        distances.sort((a, b) => a.distance - b.distance);

        var best_paths = distances.slice(0, closest_points);
        
        best_paths.forEach(path => {
            if (paths.filter(e => e.point1 === path.point2 && e.point2 === path.point1).length === 0) {
                paths.push(path);
            }
        });
    };

    return paths;
};