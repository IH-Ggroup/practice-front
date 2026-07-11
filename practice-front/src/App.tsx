import { useMemo, useState } from 'react'
import './App.css'
import { ProductCard } from './components/ProductCard'
import { ProductCreateForm } from './components/ProductCreateForm'
import { ProductDetail } from './components/ProductDetail'
import { StoreDashboard } from './components/StoreDashboard'
import { initialProducts } from './data/sampleProducts'
import type { NewProductInput, Product, StoreStats } from './types/product'

type Page = 'market' | 'create' | 'dashboard'

function App() {
  const [page, setPage] = useState<Page>('market')
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [selectedProductId, setSelectedProductId] = useState<number>(
    initialProducts[0].id,
  )
  const [storeStats, setStoreStats] = useState<StoreStats>({
    storeName: 'Suwa & Sakurai Store',
    level: 1,
    points: 0,
    soldCount: 0,
    salesTotal: 0,
  })

  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId),
    [products, selectedProductId],
  )

  const handleBuyProduct = (productId: number) => {
    const targetProduct = products.find((product) => product.id === productId)

    if (!targetProduct || targetProduct.stock === 0) {
      return
    }

    const nextPoints = storeStats.points + targetProduct.pointReward
    const nextSoldCount = storeStats.soldCount + 1

    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              stock: product.stock - 1,
            }
          : product,
      ),
    )

    setStoreStats({
      ...storeStats,
      points: nextPoints,
      soldCount: nextSoldCount,
      salesTotal: storeStats.salesTotal + targetProduct.price,
      level: calculateStoreLevel(nextPoints, nextSoldCount),
    })

    setPage('dashboard')
  }

  const handleCreateProduct = (input: NewProductInput) => {
    const nextProduct: Product = {
      id: Date.now(),
      name: input.name,
      description: input.description,
      price: Number(input.price),
      stock: Number(input.stock),
      storeName: storeStats.storeName,
      pointReward: Math.max(10, Math.round(Number(input.price) / 100)),
      imageStyle: input.imageStyle,
    }

    setProducts((currentProducts) => [nextProduct, ...currentProducts])
    setSelectedProductId(nextProduct.id)
    setPage('market')
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">MineTenant practice-front</p>
          <h1>商品を買うと、店舗が育つ。</h1>
          <p className="lead">
            Reactの練習用に作った、MineTenantの小さなフロント試作品です。
          </p>
        </div>

        <div className="header-panel">
          <span>店舗Lv.{storeStats.level}</span>
          <strong>{storeStats.points} pt</strong>
          <small>販売数 {storeStats.soldCount}</small>
        </div>
      </header>

      <nav className="tab-nav" aria-label="画面切り替え">
        <button
          className={page === 'market' ? 'active' : ''}
          type="button"
          onClick={() => setPage('market')}
        >
          商品を見る
        </button>
        <button
          className={page === 'create' ? 'active' : ''}
          type="button"
          onClick={() => setPage('create')}
        >
          商品を出品
        </button>
        <button
          className={page === 'dashboard' ? 'active' : ''}
          type="button"
          onClick={() => setPage('dashboard')}
        >
          店舗管理
        </button>
      </nav>

      <main className="main-layout">
        {page === 'market' && (
          <>
            <section className="panel product-section">
              <div className="section-heading">
                <p className="eyebrow">market</p>
                <h2>商品一覧</h2>
                <p>
                  商品カードの見た目、クリック処理、在庫表示を練習する画面です。
                </p>
              </div>

              <div className="product-grid">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSelected={product.id === selectedProductId}
                    onSelect={() => setSelectedProductId(product.id)}
                  />
                ))}
              </div>
            </section>

            <aside className="panel sticky-panel">
              {selectedProduct && (
                <ProductDetail
                  product={selectedProduct}
                  onBuy={() => handleBuyProduct(selectedProduct.id)}
                />
              )}
            </aside>
          </>
        )}

        {page === 'create' && (
          <section className="panel full-width-panel">
            <ProductCreateForm onCreate={handleCreateProduct} />
          </section>
        )}

        {page === 'dashboard' && (
          <section className="panel full-width-panel">
            <StoreDashboard stats={storeStats} products={products} />
          </section>
        )}
      </main>
    </div>
  )
}

function calculateStoreLevel(points: number, soldCount: number) {
  if (points >= 180 || soldCount >= 8) return 5
  if (points >= 120 || soldCount >= 5) return 4
  if (points >= 70 || soldCount >= 3) return 3
  if (points >= 30 || soldCount >= 1) return 2
  return 1
}

export default App
