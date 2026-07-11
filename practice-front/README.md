# practice-front

MineTenantのフロント担当が、React + TypeScript + Viteを練習するためのリポジトリです。

このリポジトリは本番アプリではありません。まずは、すわ・櫻井が「商品を見る」「商品を出品する」「商品を購入する」「店舗レベルを見る」という流れを、フロントだけで触れるようにするための教材です。

## 目的

MineTenant本番開発に入る前に、次をできるようにします。

- Reactの画面を自分のPCで起動する
- 商品カードの見た目を直す
- 商品一覧と商品詳細を作る
- 入力フォームを作る
- ボタンを押した時に画面を変える
- TypeScriptの型エラーを読めるようにする
- GitHubで変更を提出する

## まず使うコマンド

```bash
git clone https://github.com/kaketo113/practice-front.git
cd practice-front
```

```bash
npm install
npm run dev
```

画面に出たURLをブラウザで開きます。

例：

```text
http://localhost:5173
```

## よく使うコマンド

```bash
npm run dev
```

開発中の画面を起動します。

```bash
npm run build
```

本番用に作れるか確認します。エラーが出たら、どこかのコードに問題があります。

```bash
npm run lint
```

コードの書き方に大きな問題がないか確認します。

## 資料を読む順番

1. [docs/00-start-here.md](docs/00-start-here.md)
2. [docs/01-environment-setup.md](docs/01-environment-setup.md)
3. [docs/02-week1-tasks.md](docs/02-week1-tasks.md)
4. [docs/03-react-basic-tasks.md](docs/03-react-basic-tasks.md)
5. [docs/04-file-guide.md](docs/04-file-guide.md)
6. [docs/05-git-workflow.md](docs/05-git-workflow.md)
7. [docs/06-cursor-ai-guide.md](docs/06-cursor-ai-guide.md)
8. [docs/07-next-step-api.md](docs/07-next-step-api.md)
9. [docs/glossary.md](docs/glossary.md)
10. [docs/common-errors.md](docs/common-errors.md)

## 今できること

- 商品一覧を見る
- 商品を選択する
- 商品詳細を見る
- 商品を購入する
- 在庫が減る
- 売り切れ表示が出る
- 商品を出品する
- 店舗ポイントが増える
- 店舗レベルが上がる
- 店舗管理画面を見る

## まだやらないこと

今は練習用なので、以下はまだ入れません。

- ログイン
- 本物のデータベース接続
- Spring Bootとの接続
- Minecraftとの接続
- WebSocket
- 決済
- スマホ対応の作り込み

## 役割

### すわ

- 商品一覧画面
- 店舗管理画面
- 全体のデザインルール
- ボタンやカードの見た目

### 櫻井

- 商品カード
- 商品詳細画面
- 商品出品画面
- ロゴや画像表現

ただし、片方しか直せない状態を避けるため、2人ともReactのコードを触ります。

## 完了の目安

まずは、次ができれば第1段階クリアです。

- 2人のPCで `npm run dev` が動く
- 商品が3件以上表示される
- 商品をクリックすると詳細が変わる
- 購入ボタンで在庫が減る
- 在庫0なら売り切れになる
- 商品出品フォームから新しい商品を追加できる
- 店舗管理画面でポイントとレベルが確認できる

## AIを使う時のルール

AIに聞いてもOKです。ただし、AIが出したコードをそのまま貼らず、必ず次を確認してください。

- そのコードが何をしているか
- どのファイルを変えたのか
- どこを変えると見た目が変わるのか
- エラーが出た時にどこを見るのか

説明できないコードは、本番開発では使わない方が安全です。
