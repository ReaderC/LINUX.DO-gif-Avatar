// 当弹出窗口加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  const avatarUrlInput = document.getElementById('avatarUrlInput');
  const saveButton = document.getElementById('saveButton');
  const status = document.getElementById('status');

  // 加载已保存的头像地址并显示在输入框中
  chrome.storage.sync.get(['avatarUrl'], (result) => {
    if (result.avatarUrl) {
      avatarUrlInput.value = result.avatarUrl;
    }
  });

  // 保存按钮的点击事件
  saveButton.addEventListener('click', () => {
    const avatarUrl = avatarUrlInput.value;
    if (avatarUrl) {
      // 将地址保存到 chrome.storage 中
      chrome.storage.sync.set({ avatarUrl: avatarUrl }, () => {
        status.textContent = '已保存！';
        // 1.5秒后清除状态消息
        setTimeout(() => {
          status.textContent = '';
        }, 1500);
      });
    }
  });
});
