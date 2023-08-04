import { useNavigate, useParams } from "react-router";

import { Image, Shimmer } from 'react-shimmer';
import { Card, Typography } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { baseUrl } from "../../features/constant";
import { useGetProductByIdQuery } from "../../features/product/productApi";




const ProductDetail = () => {



  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { data: product, isLoading, isError, error } = useGetProductByIdQuery(id);

  const formik = useFormik({
    initialValues: {
      qty: 1
    }
  });

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://lottie.host/01986b4b-7629-473a-8223-f06d23ec4120/LelU3WnIJp.json" background="#fff" speed="1" loop autoplay ></lottie-player>
    </div>
  }




  return (
    <div className="grid grid-cols-3 p-7 gap-5">

      <div>
        <Image
          src={`${baseUrl}${product.product_image}`}
          fallback={<Shimmer width={800} height={600} className="w-full h-full" />}
        />
      </div>


      <div className="text-gray-700 space-y-4">
        <h1 className="font-bold">{product.product_name}</h1>

        <p className="border-y-2 py-1 border-gray-500">Rs.{product.product_price}</p>
        <p>{product.product_detail}</p>
      </div>



      <div>



        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">

            <tbody>

              <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Price
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {product.product_price}
                  </Typography>
                </td>



              </tr>
              <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    item in stock
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {product.countInStock}
                  </Typography>
                </td>



              </tr>
              <tr className="text-center">
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Qty
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50 bg-blue-gray-50/50">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    <select onChange={(e) => formik.setFieldValue('qty', e.target.value)} className="p-2" name="" id="">

                      {[...Array(product.countInStock).keys()].map((v, i) => {
                        return <option key={i} value={v + 1}>{v + 1}</option>
                      })}
                    </select>
                  </Typography>
                </td>



              </tr>




              <tr className="text-center ">
                <td colSpan={2}>
                  <button onClick={() => {
                    dispatch(addToCart({
                      name: product.product_name,
                      qty: formik.values.qty,
                      image: product.product_image,
                      price: product.product_price,
                      product: product._id
                    }));
                    nav('/user/cart');
                  }} className=' w-[50%] bg-black my-5 text-white mx-auto py-1 rounded-sm'>Add To Cart</button>

                </td>
              </tr>
            </tbody>






          </table>
        </Card>
      </div>


    </div>
  )
}
export default ProductDetail