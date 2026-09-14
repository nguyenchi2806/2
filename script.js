
window.onload = function () {
    console.log("Trang web khám phá Việt Nam đã tải xong!");

    console.log("Chiều rộng màn hình:",
        window.innerWidth + "px");

    console.log("Chế độ giảm chuyển động:",
        window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    console.log("Chế độ màu tối:",
        window.matchMedia("(prefers-color-scheme: dark)").matches);
};
