import { useState } from 'react'
import type { NewProductInput, ProductImageStyle } from '../types/product'

type ProductCreateFormProps = {
  onCreate: (input: NewProductInput) => void
}

const initialInput: NewProductInput = {
  name: '',
  description: '',
  price: '1000',
  stock: '1',
  imageStyle: 'emerald',
}

const imageStyles: ProductImageStyle[] = [
  'emerald',
  'sunset',
  'ocean',
  'amethyst',
]

export function ProductCreateForm({ onCreate }: ProductCreateFormProps) {
  const [input, setInput] = useState<NewProductInput>(initialInput)
  const [errorMessage, setErrorMessage] = useState('')

  const updateInput = (key: keyof NewProductInput, value: string) => {
    setInput((currentInput) => ({
      ...currentInput,
      [key]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!input.name.trim()) {
      setErrorMessage('商品名を入力してください。')
      return
    }

    if (Number(input.price) <= 0 || Number(input.stock) < 0) {
      setErrorMessage('価格と在庫数を確認してください。')
      return
    }

    onCreate(input)
    setInput(initialInput)
    setErrorMessage('')
  }

  return (
    <div className="form-layout">
      <div>
        <p className="eyebrow">create item</p>
        <h2>商品を出品する</h2>
        <p>
          入力フォーム、状態管理、送信処理を練習するための画面です。
          送信すると商品一覧の先頭に追加されます。
        </p>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <label>
          商品名
          <input
            value={input.name}
            onChange={(event) => updateInput('name', event.target.value)}
            placeholder="例：夕焼け色のマグカップ"
          />
        </label>

        <label>
          商品説明
          <textarea
            value={input.description}
            onChange={(event) =>
              updateInput('description', event.target.value)
            }
            placeholder="商品の特徴を短く書いてください"
          />
        </label>

        <div className="form-grid">
          <label>
            価格
            <input
              min="1"
              type="number"
              value={input.price}
              onChange={(event) => updateInput('price', event.target.value)}
            />
          </label>

          <label>
            在庫数
            <input
              min="0"
              type="number"
              value={input.stock}
              onChange={(event) => updateInput('stock', event.target.value)}
            />
          </label>
        </div>

        <fieldset>
          <legend>商品画像の雰囲気</legend>
          <div className="style-options">
            {imageStyles.map((style) => (
              <label key={style}>
                <input
                  checked={input.imageStyle === style}
                  name="imageStyle"
                  type="radio"
                  value={style}
                  onChange={(event) =>
                    updateInput('imageStyle', event.target.value)
                  }
                />
                <span className={`style-chip ${style}`}>{style}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {errorMessage && <p className="error-text">{errorMessage}</p>}

        <button className="primary-action" type="submit">
          商品一覧に追加する
        </button>
      </form>
    </div>
  )
}
