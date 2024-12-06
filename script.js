document.addEventListener("DOMContentLoaded", function() {
    let currentTask = 1;
    
    // 任务1
    const nextBtn1 = document.getElementById("next-btn-1");
    const feedback1 = document.getElementById("feedback-1");
    const options1 = document.querySelectorAll("#options-1 .option");
    
    options1.forEach(option => {
        option.addEventListener("click", function(e) {
            const selectedAnswer = e.target.getAttribute("data-answer");
            if (selectedAnswer === "data") {
                feedback1.innerHTML = "<p class='correct'>恭喜你！成功帮助计算机获取了图片数据。</p>";
                nextBtn1.style.display = "inline-block";  // 显示“下一步”按钮
            } else {
                feedback1.innerHTML = "<p class='incorrect'>回答错误，请再试一次。</p>";
            }
        });
    });

    nextBtn1.addEventListener("click", function() {
        document.getElementById("task-1").style.display = "none";
        document.getElementById("task-2").style.display = "block";  // 切换到任务2
        currentTask = 2;
    });

    // 任务2
    const nextBtn2 = document.getElementById("next-btn-2");
    const feedback2 = document.getElementById("feedback-2");
    const options2 = document.querySelectorAll("#options-2 .option");

    options2.forEach(option => {
        option.addEventListener("click", function(e) {
            const selectedAnswer = e.target.getAttribute("data-answer");
            if (selectedAnswer === "3") {
                feedback2.innerHTML = "<p class='correct'>回答正确！RGB三通道帮助计算机获取彩色图像数据。</p>";
                nextBtn2.style.display = "inline-block";  // 显示“下一步”按钮
            } else {
                feedback2.innerHTML = "<p class='incorrect'>回答错误，请再试一次。</p>";
            }
        });
    });

    nextBtn2.addEventListener("click", function() {
        document.getElementById("task-2").style.display = "none";
        document.getElementById("task-3").style.display = "block";  // 切换到任务3
        currentTask = 3;
    });

    // 任务3
    const nextBtn3 = document.getElementById("next-btn-3");
    const feedback3 = document.getElementById("feedback-3");
    const options3 = document.querySelectorAll("#options-3 .option");

    options3.forEach(option => {
        option.addEventListener("click", function(e) {
            const selectedAnswer = e.target.getAttribute("data-answer");
            if (selectedAnswer === "flatten") {
                feedback3.innerHTML = "<p class='correct'>太棒了！展平操作帮助我们将多维特征转为一维输入，便于进入全连接层。</p>";
                nextBtn3.style.display = "inline-block";  // 显示“下一步”按钮
            } else {
                feedback3.innerHTML = "<p class='incorrect'>回答错误，请再试一次。</p>";
            }
        });
    });

    nextBtn3.addEventListener("click", function() {
        document.getElementById("task-3").style.display = "none";
        document.getElementById("task-4").style.display = "block";  // 切换到任务4
        currentTask = 4;
    });

    // 任务4
    const nextBtn4 = document.getElementById("next-btn-4");
    const feedback4 = document.getElementById("feedback-4");
    const options4 = document.querySelectorAll("#options-4 .option");

    options4.forEach(option => {
        option.addEventListener("click", function(e) {
            const selectedAnswer = e.target.getAttribute("data-answer");
            if (selectedAnswer === "maxpool") {
                feedback4.innerHTML = "<p class='correct'>做得好！最大池化成功保留了关键特征，帮助模型进一步优化。</p>";
                nextBtn4.style.display = "inline-block";  // 显示“完成任务”按钮
            } else {
                feedback4.innerHTML = "<p class='incorrect'>回答错误，请再试一次。</p>";
            }
        });
    });

    nextBtn4.addEventListener("click", function() {
        alert("恭喜你完成了所有任务！课程学习结束！");
    });
});
