import Products from "../components/users/products"
import { useEffect, useState } from "react"
import { getAll } from "../api/products"
import { IProducts } from "../models"
const Home = () => {
    const [products, setProducts] = useState<IProducts[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            // console.log(data.);
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <>
    <h1 className="mt-5  ml-10 font-bold">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
    <div className=" grid grid-cols-5 gap-3 ">
    {products.map(product => <Products
                data={product}
                key={product.id} />)}
 


    </div>

    </>
}

export default Home