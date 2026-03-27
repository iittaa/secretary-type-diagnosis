/**
 * Google Apps Script - アンケート回答をスプレッドシートに保存
 *
 * 【セットアップ手順】
 * 1. Google スプレッドシートを新規作成
 * 2. 1行目にヘッダーを入力:
 *    A1: タイムスタンプ | B1: 名前 | C1: Instagram ID | D1: 興味度 | E1: コメント | F1: 診断結果 | G1: スコア詳細
 * 3. メニュー「拡張機能」→「Apps Script」を開く
 * 4. このコードを貼り付けて保存
 * 5. 「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」を選択
 *    - 実行ユーザー: 自分
 *    - アクセスできるユーザー: 全員
 * 6. デプロイして表示されるURLを index.html の GOOGLE_SCRIPT_URL に設定
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp,
    data.name,
    data.instagram,
    data.interest,
    data.comment,
    data.diagnosisResult,
    data.scores
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
