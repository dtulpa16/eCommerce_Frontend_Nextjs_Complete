import Image from 'next/image'
import ProductList from './components/ProductList'

export default async function Home() {
  const products = await fetch("http://localhost:5000/api/products",{next: { tags: ["productFetch"] }})
  const data = await products.json()
  return (
    <main>
      <ProductList products={data}/>
    </main>
  )
}
