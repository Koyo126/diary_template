// https://codingls.com/js/2003/ を参考に作成した。
document.getElementById('language-select').addEventListener('change', function() {
  var selectedLanguage = this.value;
  // 選択された言語に応じてリダイレクトまたは言語切り替えの処理を行う
  // 例: 英語を選択した場合
  if (selectedLanguage === 'ja') {
    window.location.href = './index_ja.html'; // 日本語版のページにリダイレクト
  } else if (selectedLanguage === 'en') {
    window.location.href = './index_en.html'; // 英語版のページにリダイレクト
  }
});
