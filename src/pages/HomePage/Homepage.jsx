import React, { useState } from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperProduct, WrapperTypeProduct } from './style'
import SlideComponient from '../../components/SlideComponient/SlideComponient'
import slide1 from '../../Imagess/Image/Slide1.webp'
import slide2 from '../../Imagess/Image/Slide2.webp'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'




const Homepage = () => {
  const arr = ['Iphone', 'Oppo', 'Samsung']
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(6)
  
  const fetchProductAll = async () => {
    const res = await ProductService.getAllProduct()
    console.log('res', res)
    // const limit = context?.queryKey && context?.queryKey[1]
    // const search = context?.queryKey && context?.queryKey[2]
    // const res = await ProductService.getAllProduct(search, limit)

    return res

  }
  const {isLoading, data: products } = useQuery(["products",], fetchProductAll ,{ retry: 3, retryDelay: 1000})
  console.log('products', products)





  return (
    <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
      <SlideComponient arrImage={[slide1, slide2]} />
      <WrapperProduct>
            {products?.data?.map((product) => {
              return (
                <CardComponent 
                  key={product._id}
                  countInStock={product.countInStock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  // id={product._id}
                />
                )
              })}
            
      </WrapperProduct>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <ButtonComponent textButton="Thêm" type="outline" styleButton={{
          border: '2px solid #ADD8E6', background: '#ADD8E6', color: 'blue', borderRadius: '4px', style: 'groove', width: '240px'
        }} />
      </div>
    </div>
  )
}

export default Homepage