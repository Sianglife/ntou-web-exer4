// 1. 選取 HTML 元素
const myForm = document.getElementById('myForm');
const responseMessage = document.getElementById('responseMessage');
// 2. 監聽表單的 submit 事件
myForm.addEventListener('submit', function(event) {
    // 3. 關鍵：阻止表單預設的重整頁面行為
    event.preventDefault();
    // 4. 抓取使用者輸入的資料
    const usernameInput = document.getElementById('username').value.trim();
    const q1Input = document.getElementById('q1').value.trim();
    const q2Input = document.getElementById('q2').value.trim();
    const q3Input = document.getElementById('q3').value.trim();
    // 5. 進行前端條件判斷
    switch (q1Input) {
        case 'a':
            // correct answer for q1
            responseMessage.textContent = `恭喜 ${usernameInput}，你答對了！`;
            responseMessage.style.color = 'green';
            break;
        default:
            // wrong answer for q1
            responseMessage.textContent = `抱歉 ${usernameInput}，你答錯了！`;
            responseMessage.style.color = 'red';
            break;
    }

    switch (q2Input) {
        case 'b':
            // correct answer for q2
            responseMessage.textContent = ` 恭喜 ${usernameInput}，你答對了！`;
            responseMessage.style.color = 'green';
            break;
        default:
            // wrong answer for q2
            responseMessage.textContent = ` 抱歉 ${usernameInput}，你答錯了！`;
            responseMessage.style.color = 'red';
            break;
    }

    switch (q3Input) {
        case 'c':
            // correct answer for q3
            responseMessage.textContent = ` 恭喜 ${usernameInput}，你答對了！`;
            responseMessage.style.color = 'green';
            break;
        default:
            // wrong answer for q3
            responseMessage.textContent = ` 抱歉 ${usernameInput}，你答錯了！`;
            responseMessage.style.color = 'red';
            break;
    }
})