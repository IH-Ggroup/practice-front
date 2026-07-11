# 04. ファイル案内

どのファイルが何をしているかをまとめます。

## `src/App.tsx`

アプリ全体の中心です。

ここでやっていること：

- 今どの画面を表示するか決める
- 商品データを持つ
- 選択中の商品を決める
- 購入した時に在庫を減らす
- 店舗ポイントを増やす
- 店舗レベルを計算する

## `src/App.css`

見た目のほとんどを決めています。

ここで変えられるもの：

- 余白
- 色
- カードの形
- ボタンの見た目
- 商品一覧の並び方
- 店舗管理画面の見た目

## `src/index.css`

アプリ全体に共通する色や文字を決めています。

最初に見る場所：

```css
--accent: #2f7d4b;
```

この色を変えると、ボタンなどのメインカラーが変わります。

## `src/types/product.ts`

商品や店舗データの形を決めています。

例：

```ts
export type Product = {
  id: number
  name: string
  price: number
}
```

TypeScriptでは、データの形を決めておくとミスに気づきやすくなります。

## `src/data/sampleProducts.ts`

練習用の商品データです。

本番ではSpring Bootから商品データを受け取りますが、今はこのファイルのデータを表示しています。

## `src/components/ProductCard.tsx`

商品一覧に出る、1つの商品カードです。

## `src/components/ProductDetail.tsx`

選択した商品の詳しい情報を表示します。

## `src/components/ProductCreateForm.tsx`

商品を出品する入力フォームです。

## `src/components/StoreDashboard.tsx`

店舗レベル、ポイント、販売数などを表示する画面です。

## 迷ったら

まずは次の順番で見てください。

1. `src/App.tsx`
2. `src/data/sampleProducts.ts`
3. `src/components/ProductCard.tsx`
4. `src/App.css`
