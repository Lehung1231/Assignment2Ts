import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom"
import { IProducts } from "../../models"
import { getById } from "../../api/products"
import numeral from 'numeral';
const ProductDetail = () => {
    const specAttributes = ['','','','','','','','','','','','','',''];
    const [product, setProduct] = useState<IProducts>({} as IProducts);
    const [mainImage, setMainImage] = useState("");
    const {id} = useParams()

    function changeMainImage(src: string) {
        setMainImage(src);
    }
    
    const fetchProductById = async () => {
        const {data} = await getById(id!)
        setProduct(data)
        setMainImage(data.images[0].base_url);
    }

    useEffect(() =>{
        fetchProductById()
    },[])
  
  return <>
    <div>
        <div className="flex text-left ">
             <a href="" className="mr-10 ml-20">Trang chủ</a>
             <a href="" className="mr-10">Điện thoại</a>
             <a href="" className="mr-10 ">Samsung </a>
             <a href="" className="mr-10 "> {product.name} </a>
        </div>
        <div className="bg-slate-100 p-4 pr-20 pl-20">
         {product.name}  
        </div>
        <div className="min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={mainImage}  className="w-full relative z-10" alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase text-2xl mb-5 text-red-600">{numeral(product.price).format('0,0 ')}Đ</h1>
                    <p className="mb-5 line-through">{numeral(product.original_price).format('0,0 ')}Đ</p> 
                    <p className="text-sm">{product.description}</p>
                </div>
                <div>
            
                    <div className="inline-block align-bottom">
                        <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                        <button className="ml-10 p-2 border-2"><img src="/shopping-cart (1).png" alt=""  /></button>
                    </div>
                </div>
                <div className="p-2 flex gap-7 mt-10">
                  <Link to="" className=" w-1/5 border-2">    <img src={product.images?.[0].base_url} alt={product.name} onClick={() => changeMainImage(product.images?.[0].base_url)} /></Link>
                  <Link to="" className=" w-1/5 border-2">    <img src={product.images?.[1].base_url} alt={product.name} onClick={() => changeMainImage(product.images?.[1].base_url)} /></Link>
                    </div>
                    
            </div>
           
        </div>
       
    </div>
   
</div>
           <div className=" mr-20  ml-20 pt-5 pb-5">
           <table className="table-fixed w-full">
  <thead>
    {product.specifications && Array.isArray(product.specifications) && product.specifications.slice(0, 4).map((spec, index) => (
      <tr key={`spec-${index}`} className="bg-gray-100">
        {spec.attributes.slice(0, 7).map((attr, index) => (
          <th className="w-1/7 py-2 px-4 font-semibold text-left" key={index}>
            {attr?.name || specAttributes[index]}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody>
    {product.specifications && Array.isArray(product.specifications) && product.specifications.slice(0, 4).map((spec, index) => (
      <tr key={`spec-row-${index}`} className="border-b">
        {spec.attributes.slice(0, 7).map((attr, index) => (
          <td className="py-2 px-4" key={index}>
            {attr?.value || '-'}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
<table className="table-fixed w-full">
  <thead>
    {product.specifications && Array.isArray(product.specifications) && product.specifications.slice(0, 4).map((spec, index) => (
      <tr key={`spec-${index}`} className="bg-gray-100">
        {spec.attributes.slice(7, 14).map((attr, index) => (
          <th className="w-1/7 py-2 px-4 font-semibold text-left" key={index}>
            {attr?.name || specAttributes[index]}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody>
    {product.specifications && Array.isArray(product.specifications) && product.specifications.slice(0, 4).map((spec, index) => (
      <tr key={`spec-row-${index}`} className="border-b">
        {spec.attributes.slice(7, 14).map((attr, index) => (
          <td className="py-2 px-4" key={index}>
            {attr?.value || '-'}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
            </div>
         
        
           

    </div>
  </>
}

export default ProductDetail