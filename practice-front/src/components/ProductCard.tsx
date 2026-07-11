import type { Product } from '../types/product'

type ProductCardProps = {
  product: Product
  isSelected: boolean
  onSelect: () => void
}

export function ProductCard({
  product,
  isSelected,
  onSelect,
}: ProductCardProps) {
  const isSoldOut = product.stock === 0

  return (
    <button
      className={`product-card ${isSelected ? 'selected' : ''}`}
      type="button"
      onClick={onSelect}
    >
      <span className={`product-art ${product.imageStyle}`} aria-hidden="true">
        <span className="product-art-block"></span>
      </span>

      <span className="product-card-body">
        <span className="product-store">{product.storeName}</span>
        <strong>{product.name}</strong>
        <span className="product-meta">
          <span>{product.price.toLocaleString()}円</span>
          <span className={isSoldOut ? 'sold-out' : ''}>
            {isSoldOut ? '売り切れ' : `在庫 ${product.stock}`}
          </span>
        </span>
      </span>
    </button>
  )
}
