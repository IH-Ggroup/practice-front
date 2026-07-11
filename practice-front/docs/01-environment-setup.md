# 01. 環境構築

まず、自分のPCで画面を起動できるようにします。

## 必要なもの

- Node.js
- Git
- VS Code または Cursor
- GitHubアカウント

## 1. リポジトリをクローンする

GitHubのURLを使って、次のようにクローンします。

```bash
git clone https://github.com/kaketo113/practice-front.git
cd practice-front
```

## 2. 必要なものをインストールする

```bash
npm install
```

初回だけ実行します。

## 3. 画面を起動する

```bash
npm run dev
```

表示されたURLをブラウザで開きます。

例：

```text
http://localhost:5173
```

## 4. 文字を変えて確認する

`src/App.tsx` を開いて、次の文字を探します。

```text
商品を買うと、店舗が育つ。
```

この文字を少し変えて保存してください。

ブラウザ側も変われば成功です。

## 5. 終了する

ターミナルで `control + C` を押します。

## うまくいかない時

### `npm` が見つからない

Node.jsが入っていない可能性があります。

### 画面が開かない

ターミナルに出ているURLをもう一度確認してください。

### 赤いエラーが出る

エラー文を全部コピーして、チームのチャットに貼ってください。

## 完了条件

- `npm install` が成功する
- `npm run dev` が成功する
- ブラウザで画面が見える
- 文字を変えると画面に反映される
