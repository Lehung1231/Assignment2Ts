import * as Yup from 'yup'

export interface IProducts {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images: {base_url: string}[],
    brand: {
        id: number,
        name: string,
        slug: string
    },
    specifications: ISpecification[]
}

export interface ISpecification {
    name: string;
    attributes: Array<{
      code: string;
      name: string;
      value: string;
    }>;
  }

export const signupSchema = Yup.object({
   //firstName: Yup.string().required("Trường dữ liệu bắt buộc"),
  //  lastName: Yup.string().required("Trường dữ liệu bắt buộc"),
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Mật khẩu không khớp"),
})

export type SignupForm = Yup.InferType<typeof signupSchema>

export const signinSchema = Yup.object({
    email: Yup.string().email("Email sai định dạng").required("Trường dữ liệu bắt buộc"),
    password: Yup.string().min(6).required("Trường dữ liệu bắt buộc"),
    role: Yup.number()
})

export type SigninForm = Yup.InferType<typeof signinSchema>

export const updateSchema = Yup.object({
  name: Yup.string().required("Trường dữ liệu bắt buộc"),
  price: Yup.string().required("Trường dữ liệu bắt buộc"),
  original_price: Yup.string().required("Trường dữ liệu bắt buộc"),
  description: Yup.string().min(10, "Tối thiếu 10 ký tự").required("Trường dữ liệu bắt buộc"),
  images: Yup.array()
    .of(
      Yup.object().shape({
        base_url: Yup.string().required("Trường dữ liệu bắt buộc"),
      })
    )
    .required("Trường dữ liệu bắt buộc"),
  specifications: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string(),
        attributes: Yup.array().of(
          Yup.object().shape({
            code: Yup.string().required("Trường dữ liệu bắt buộc"),
    name: Yup.string().required("Trường dữ liệu bắt buộc"),
    value: Yup.string().required("Trường dữ liệu bắt buộc"),
          })
        ),
      })
    )
    .nullable(),
});

export type updateForm = Yup.InferType<typeof updateSchema>