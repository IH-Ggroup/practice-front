# 00. 最初に読む

このリポジトリは、MineTenantのフロント担当が練習するための場所です。

いきなり完璧なWebサイトを作る必要はありません。まずは、少しずつ触って「Reactで画面が変わる感覚」をつかむことが目的です。

## 最初のゴール

最初のゴールはこれです。

```text
商品を見る
↓
商品を選ぶ
↓
購入ボタンを押す
↓
在庫が減る
↓
店舗ポイントが増える
↓
店舗レベルが上がる
```

本番のMineTenantでは、ここにSpring BootやMinecraftがつながります。

今はまだ、フロントだけで動く練習用です。

## まず大事なこと

- 分からない単語は放置しない
- エラー文を読む
- AIに聞く時は「このファイルのこの部分が分からない」と聞く
- コードを写すだけで終わらない
- 作ったものを相手に説明する

## 勉強の順番

1. 環境を作る
2. 画面を起動する
3. 商品カードを読んでみる
4. 商品名や色を変えてみる
5. ボタンの動きを変えてみる
6. 商品出品フォームを触る
7. 自分で小さな機能を追加する

## 触ってほしいファイル

最初はこのあたりを触ります。

```text
src/App.tsx
src/App.css
src/components/ProductCard.tsx
src/components/ProductDetail.tsx
src/components/ProductCreateForm.tsx
src/components/StoreDashboard.tsx
src/data/sampleProducts.ts
src/types/product.ts
```

## まだ触らなくていいファイル

```text
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
```

このあたりは設定ファイルです。最初は触らなくて大丈夫です。
