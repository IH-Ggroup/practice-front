# 07. 次の段階：バックエンド接続

今は、商品データを `src/data/sampleProducts.ts` から読み込んでいます。

本番では、Spring Bootから商品データを受け取ります。

## 今の状態

```text
React
↓
sampleProducts.ts
```

## 次の状態

```text
React
↓
Spring Boot
↓
MySQL
```

## 最初につなぐAPI

最初につなぐのは、次の3つだけで十分です。

```text
GET /api/products
商品一覧を取得する

POST /api/products
商品を出品する

POST /api/products/{id}/purchase
商品を購入する
```

## フロント側で後から作るファイル

```text
src/api/products.ts
```

このファイルに、Spring Bootと通信する処理をまとめます。

## まだやらないこと

- ログイン
- WebSocket
- Minecraft同期
- 商品画像アップロード
- 管理者画面

## 接続時に大事なこと

画面側で在庫を勝手に決めないこと。

購入できるかどうかは、Spring Bootに聞いて決めます。

理由：

```text
Webから購入
Minecraftから購入
```

この両方があるので、在庫の正しい判断はバックエンド側で行う必要があります。
