import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IProducts } from '../../models';
import { getById, update } from '../../api/products';
import { updateForm, updateSchema } from '../../models';

const AdminEdit = () => {

    const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProducts>({} as IProducts);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageUrl1, setImageUrl1] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetchProductById(id);
      }
    },
  });

  const onSubmit = async (data: updateForm) => {
    try {
        if (id) {
          const updatedData = {...data, images: [{base_url: imageUrl}, {base_url: imageUrl1}]};
          const response = await update(id, updatedData);
          console.log(response);
          navigate('/admin');
        }
      } catch (err) {
        console.log(err);
      }
  };

  const fetchProductById = async (id: string) => {
    const { data } = await getById(id);
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const product = await fetchProductById(id);
        setProduct(product);
        setImageUrl(product.images[0]?.base_url || '');
        setImageUrl1(product.images[1]?.base_url || '');
      }
    };
    fetchData();
  }, [id]);

  const handleImageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

    return <>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-col md:flex-row w-full">
   
  <div className="md:w-2/5 p-4">
      <h2 className="text-xl font-bold mb-4">Cập nhật sản phẩm </h2>
      <label htmlFor="file-upload" className="relative ">
  <img src={imageUrl} alt={product.name} width="800" height="500"/>
  <p className="text-center mr-20">Link ảnh chính</p>
  <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className='border border-gray-400 p-2 rounded-lg'/>
  <img src={imageUrl1} alt={product.name} width="800" height="500"/>
  <p className="text-center mr-20">Link ảnh phụ</p>
  <input type="text" value={imageUrl1} onChange={(e) => setImageUrl1(e.target.value)} className='border border-gray-400 p-2 rounded-lg'/>
</label>
 
  </div>

  <div className="w-full">
      <h1 className="text-lg mt-7">Thông tin sản phẩm</h1>
      <hr className="my-4" />
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <div className="w-full md:w-1/2 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                 Name
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="text" placeholder="Nhập tên" {...register("name")} />
              <p className='text-red-600 text-[10px]'>
                {errors.name && errors.name.message}
              </p>
          </div>
      </div>
      <div className="price flex">
          <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                  Giá gốc sản phẩm
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number" placeholder="Nhập giá gốc sản phẩm" {...register("price")} />
              <p className='text-red-600 text-[10px]'>
                {errors.price && errors.price.message}
              </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                  Giá Khuyến Mãi
              </label>
              <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number" placeholder="Giá Khuyến Mãi" {...register("original_price")} />
              <p className='text-red-600 text-[10px]'>
                {errors.original_price && errors.original_price.message}
              </p>
          </div>
      </div>
      <div className='grid grid-cols-2 mr-5 px-3 mb-6 md:mb-0 gap-11'>
        <div>
        {[...Array(7)].map((_, index) => (
  <div key={index}>
    <label htmlFor={register(`specifications.0.attributes.${index}.name`).name} >     
      <input {...register(`specifications.0.attributes.${index}.name`)} style={{ pointerEvents: "none" }} /> 
    </label>
    <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="" type="text"  {...register(`specifications.0.attributes.${index}.value`)}/>
    <p className='text-red-600 text-[10px]'>
  {errors?.specifications?.[0]?.attributes?.[index]?.value?.message}
</p>
  </div>
))}
        </div>
        <div>
        {[...Array(7)].map((_, index) => {
  const attributeIndex = index + 7; 
  return (
    <div key={attributeIndex}>
      <label htmlFor={register(`specifications.0.attributes.${attributeIndex}.name`).name}>
        <input {...register(`specifications.0.attributes.${attributeIndex}.name`)} style={{ pointerEvents: "none" }} />
      </label>
      <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="" type="text"  {...register(`specifications.0.attributes.${attributeIndex}.value`)} />
      <p className='text-red-600 text-[10px]'>
  {errors?.specifications?.[0]?.attributes?.[index]?.value?.message}
</p>
    </div>
  );
})}
        </div>
   
      </div>

      <button className="bg-[#00B0D7] hover:bg-blue-400 p-2 rounded-md font-bold text-white">Cập nhật</button>
  </div>
  </div >
  </form>
    </>
  }
  
  export default AdminEdit