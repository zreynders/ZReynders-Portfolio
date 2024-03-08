function calcDistance(point1, point2) {
    return Math.sqrt(Math.abs(point1.x - point2.x)**2 + Math.abs(point1.y - point2.y)**2);
}

function breadthFirstSearch(node, target, graph, distance=0, frontier=[], path=[], discovered_nodes=[]) {
    if (discovered_nodes.length === 0) {
        discovered_nodes.push(node);
    };

    path.push(node);

    if (node === target) {
        return {final_path:path, final_distance:distance};
    };

    var node_leaves = graph.filter(e => e.point1 == node || e.point2 == node);
    for (let leaf = 0; leaf < node_leaves.length; leaf++) {
        var leaf_node;
        if (node_leaves[leaf].point1 === node) {
            leaf_node = node_leaves[leaf].point2;
        } else {
            leaf_node = node_leaves[leaf].point1;
        }
        
        if (discovered_nodes.indexOf(leaf_node) === -1) {
            discovered_nodes.push(leaf_node);
            frontier.push({
                node: leaf_node, depth: path.length, distance: Math.round(distance+node_leaves[leaf].distance), path: [...path]
            });
        }
    };

    if (frontier.length === 0) {
        return null;
    };

    // for all the frontier nodes find the shallowest one
    next_node = frontier[0];

    if (next_node.depth > 50) {
        return null;
    }

    frontier.splice(0,1);

    return breadthFirstSearch(next_node.node, target, graph, next_node.distance, [...frontier], next_node.path, [...discovered_nodes]);
}

function depthFirstSearch(node, target, graph, distance=0, frontier=[], path=[], discovered_nodes=[]) {
    if (discovered_nodes.length === 0) {
        discovered_nodes.push(node);
    };

    path.push(node);

    if (node === target) {
        return {final_path:path, final_distance:distance};
    };

    var node_leaves = graph.filter(e => e.point1 == node || e.point2 == node);
    for (let leaf = 0; leaf < node_leaves.length; leaf++) {
        var leaf_node;
        if (node_leaves[leaf].point1 === node) {
            leaf_node = node_leaves[leaf].point2;
        } else {
            leaf_node = node_leaves[leaf].point1;
        }
        
        if (discovered_nodes.indexOf(leaf_node) === -1) {
            discovered_nodes.push(leaf_node);
            frontier.push({
                node: leaf_node, depth: path.length, distance: Math.round(distance+node_leaves[leaf].distance), path: [...path]
            });
        }
    };

    if (frontier.length === 0) {
        return null;
    };

    // for all the frontier nodes find the shallowest one
    next_node = frontier.pop();

    if (next_node.depth > 50) {
        return null;
    }

    return depthFirstSearch(next_node.node, target, graph, next_node.distance, [...frontier], next_node.path, [...discovered_nodes]);
}

function greedyBestFirstSearch(node, target, graph, points, heuristic="euclidean", distance=0, frontier=[], path=[], discovered_nodes=[]) {
    
    if (discovered_nodes.length === 0) {
        discovered_nodes.push(node);
    };

    path.push(node);

    if (node === target) {
        return {final_path:path, final_distance:distance};
    };

    var node_leaves = graph.filter(e => e.point1 == node || e.point2 == node);
    for (let leaf = 0; leaf < node_leaves.length; leaf++) {
        var leaf_node;
        if (node_leaves[leaf].point1 === node) {
            leaf_node = node_leaves[leaf].point2;
        } else {
            leaf_node = node_leaves[leaf].point1;
        }

        // Calculate the heuristic
        var h;
        switch (heuristic) {
            case "euclidean":
                h = calcDistance(points[leaf_node], points[target]);
                break;
            default:
                h = 0;
                break;
        }

        if (discovered_nodes.indexOf(leaf_node) === -1) {
            discovered_nodes.push(leaf_node);
            frontier.push({
                node: leaf_node, depth: path.length, heuristic: h, distance: Math.round(distance+node_leaves[leaf].distance), path: [...path]
            });
        }
    };

    if (frontier.length === 0) {
        return null;
    };

    // Sort by the heuristic and get the lowest one
    frontier.sort((a, b) => parseFloat(b.heuristic) - parseFloat(a.heuristic));
    next_node = frontier.pop()
    
    if (next_node.depth > 50) {
        return null;
    }

    return greedyBestFirstSearch(next_node.node, target, graph, points, heuristic, next_node.distance, [...frontier], next_node.path, [...discovered_nodes]);
}

function algorithmA(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function minimaxAlgorithm(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function abSearch(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function naiveBayes(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function kNN(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function linearRegression(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function kMeanAlgorithm(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function artificialNeuralNetwork(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {

}

function deepANN(node, target, graph, frontier=[], path=[], discovered_nodes=[]) {
    
}