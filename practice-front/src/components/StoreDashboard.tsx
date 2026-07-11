import type { Product, StoreStats } from '../types/product'

type StoreDashboardProps = {
  stats: StoreStats
  products: Product[]
}

export function StoreDashboard({ stats, products }: StoreDashboardProps) {
  const nextLevelPoint = getNextLevelPoint(stats.level)
  const progress =
    stats.level >= 5
      ? 100
      : Math.min(100, Math.round((stats.points / nextLevelPoint) * 100))

  return (
    <div className="dashboard-layout">
      <div className="section-heading">
        <p className="eyebrow">store dashboard</p>
        <h2>{stats.storeName}</h2>
        <p>
          MineTenantの「買う」ではなく「店舗を育てる」部分を見せる画面です。
        </p>
      </div>

      <div className="stats-grid">
        <article>
          <span>店舗レベル</span>
          <strong>Lv.{stats.level}</strong>
        </article>
        <article>
          <span>店舗ポイント</span>
          <strong>{stats.points} pt</strong>
        </article>
        <article>
          <span>販売数</span>
          <strong>{stats.soldCount}</strong>
        </article>
        <article>
          <span>売上合計</span>
          <strong>{stats.salesTotal.toLocaleString()}円</strong>
        </article>
      </div>

      <section className="level-panel">
        <div>
          <h3>次の店舗レベルまで</h3>
          <p>
            商品が売れるとポイントが増え、一定数で店舗レベルが上がります。
          </p>
        </div>
        <div className="progress-track" aria-label={`進捗 ${progress}%`}>
          <span style={{ width: `${progress}%` }}></span>
        </div>
        <small>
          {stats.level >= 5
            ? '最大レベルです。'
            : `${progress}% 達成中。あと ${Math.max(
                0,
                nextLevelPoint - stats.points,
              )} pt`}
        </small>
      </section>

      <section className="table-panel">
        <h3>出品中の商品</h3>
        <div className="product-table">
          {products.map((product) => (
            <div key={product.id} className="product-row">
              <span>{product.name}</span>
              <span>{product.price.toLocaleString()}円</span>
              <span>{product.stock === 0 ? '売り切れ' : `在庫 ${product.stock}`}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function getNextLevelPoint(level: number) {
  if (level <= 1) return 30
  if (level === 2) return 70
  if (level === 3) return 120
  if (level === 4) return 180
  return 180
}
