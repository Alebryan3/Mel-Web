document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('actionButton');
  const message = document.getElementById('message');
  button.addEventListener('click', function () {
    message.textContent = 'Hello from Mel WEB!';
  });
});
