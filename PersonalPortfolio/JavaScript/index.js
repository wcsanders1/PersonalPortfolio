$(window).resize(function () {
    var pageSize = $("#page-size").css("z-index");
    var $mazeImage = $("#maze-image");

    if (pageSize >= 1 && pageSize < 4) {
        $mazeImage.attr("src", "/Images/MazeSize4.PNG");
    }

    if (pageSize >= 4 && pageSize < 5) {
        $mazeImage.attr("src", "/Images/MazeSize5.PNG");
    }

    if (pageSize >= 5 && pageSize < 7) {
        $mazeImage.attr("src", "/Images/MazeSize6.PNG");
    }

    if (pageSize >= 7) {
        $mazeImage.attr("src", "/Images/MazeSize7.PNG");
    }
});

$(document).ready(function () {
    var pageSize = $("#page-size").css("z-index");
    var $mazeImage = $("#maze-image");

    if (pageSize >= 1 && pageSize < 4) {
        $mazeImage.attr("src", "/Images/MazeSize4.PNG");
    }

    if (pageSize >= 4 && pageSize < 5) {
        $mazeImage.attr("src", "/Images/MazeSize5.PNG");
    }

    if (pageSize >= 5 && pageSize < 7) {
        $mazeImage.attr("src", "/Images/MazeSize6.PNG");
    }

    if (pageSize >= 7) {
        $mazeImage.attr("src", "/Images/MazeSize7.PNG");
    }
});