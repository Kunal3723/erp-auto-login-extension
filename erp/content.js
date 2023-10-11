function autoFillForm() {
  document.getElementById('user_id').value = '%%%%%%%%%';
  document.getElementById('password').value = '%%%%%%';
  document.getElementById('loginForm').addEventListener("click", () => {
    setTimeout(function () {
      console.log(document.getElementById('question').innerText);
      const question = document.getElementById('question').innerText;
      const questions = new Map();
      questions["%%%%%%%%%"] = "%%%%%%%%%";
      questions["%%%%%%%%%"] = "%%%%%%%%%";
      questions["%%%%%%%%%"] = "%%%%%%%%%";
      console.log(question);
      document.getElementById('answer').value = questions[question];
    }, 1000);
  })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.txt === "run") {
    autoFillForm();
  }
});
