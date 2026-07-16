import type { Product } from '../types/product'

export const initialProducts: Product[] = [
  {
    id: 1,
    name: '夜空色のパーカー',
    description:
      '文化祭や普段着にも使いやすい、落ち着いた色の古着パーカーです。',
    price: 3200,
    stock: 3,
    storeName: 'Sky Block Wear',
    pointReward: 32,
    imageStyle: 'ocean',
  },
  {
    id: 2,
    name: '小さな読書ランプ',
    description:
      '机の上に置きやすいライトです。店舗レベルアップの練習用商品です。',
    price: 1800,
    stock: 2,
    storeName: 'Lumen Works',
    pointReward: 18,
    imageStyle: 'sunset',
  },
  {
    id: 3,
    name: 'エメラルド風リング',
    description:
      'Minecraftらしい色味を意識したアクセサリー。ギフト想定の商品です。',
    price: 2400,
    stock: 1,
    storeName: 'Craft Jewel',
    pointReward: 24,
    imageStyle: 'emerald',
  },
  {
    id: 4,
    name: '展示会用ミニチェア',
    description:
      '家具カテゴリを想定した商品。あとでMinecraft内の家具棚と連携します。',
    price: 4200,
    stock: 0,
    storeName: 'Block Interior',
    pointReward: 42,
    imageStyle: 'amethyst',
  },
  {
    id: 5,
    name: '風船',
    description:
      '見る人を楽しませてくれる商品。',
    price: 3200,
    stock: 3,
    storeName: 'Block Interior',
    pointReward: 42,
    imageStyle: 'amethyst',
  }
]
