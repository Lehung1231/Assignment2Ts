import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import { SigninForm, SignupForm, signinSchema, signupSchema } from '../../models';
import { signin, signup } from '../../api/auth';
import { useLocalStorage } from '../../hooks';
import { Link } from 'react-router-dom';

const Usersingin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(signinSchema)
    })

    const navigate = useNavigate()

    const [user, setUser] = useLocalStorage("user", null)

    const onSubmit = async (data: SigninForm) => {
        try {
            const {data: {accessToken, user}} = await signin(data)
            
            setUser({
                accessToken,
                ...user
            })
            if (user.role ) {
                navigate('/admin')
            } else {
                navigate('/')
            }
            
        }catch(err) {
            console.log(err);
            alert("Không đúng")
        }

    }


    
    return <>
          <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div className=" flex  bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#F8F8F8] dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                      <input  
                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                        {...register('email')} 
                         />
                     <p className='text-red-600 text-[10px]'>
{errors.email && errors.email.message}
</p>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                      <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('password')} />
                      <p className='text-red-600 text-[10px]'>

{errors.password && errors.password.message}
</p>
                    
                  </div>

                  <button type="submit" className="w-full text-white bg-primary-600 bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Đăng Nhập</button>
                  <div>
                    <p className="text-center">Chưa có tài khoản ? <a href="./singup" className='font-bold'>Đăng ký</a></p>
              
                  </div>
              </form>
          </div>
          <div className="bg-[#F8F8F8] flex justify-center items-center px-16">
          <img src="./logo.png" alt="" />
          </div> 
      </div>
  </div>
  
</section>
    </>
  
 
  }
  
  export default Usersingin