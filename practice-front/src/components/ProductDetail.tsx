import type { Product } from '../types/product'

type ProductDetailProps = {
  product: Product
  onBuy: () => void
}

export function ProductDetail({ product, onBuy }: ProductDetailProps) {
  const isSoldOut = product.stock === 0

  return (
    <div className="product-detail">
      <p className="eyebrow">selected item</p>
      <h2>{product.name}</h2>
      <p className="detail-description">{product.description}</p>

      <dl className="detail-list">
        <div>
          <dt>店舗</dt>
          <dd>{product.storeName}</dd>
        </div>
        <div>
          <dt>価格</dt>
          <dd>{product.price.toLocaleString()}円</dd>
        </div>
        <div>
          <dt>在庫</dt>
          <dd>{isSoldOut ? '売り切れ' : `${product.stock}個`}</dd>
        </div>
        <div>
          <dt>店舗ポイント</dt>
          <dd>+{product.pointReward} pt</dd>
        </div>
      </dl>

      <button
        className="primary-action"
        type="button"
        disabled={isSoldOut}
        onClick={onBuy}
      >
        {isSoldOut ? '売り切れ' : '購入して店舗を成長させる'}
      </button>

      <p className="hint-text">
        今はフロント練習用なので、実際のお金は使いません。
      </p>
    </div>
  )
}
