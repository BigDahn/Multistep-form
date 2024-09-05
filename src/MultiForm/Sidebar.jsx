import { useWindowSize } from '@react-hook/window-size'
import { useEffect, useState } from 'react'
import Forminput from './Form'

const Sidebar = () => {
  const [img, setImg] = useState()
  const [formNumber,setFormNumber] = useState(1)
  const [width] = useWindowSize()
  useEffect(()=>{
     if (width >=1280 ) {
       setImg('/Multiform/bg-sidebar-desktop.svg')
     } else {
      setImg('/Multiform/bg-sidebar-mobile.svg')
     }
    
  },[width])
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className=" pl-0   lg:pl-4 lg:pt-6 lg:pb-6 ">
        <img
          src={img}
          className="relative w-full  lg:h-[500px] lg:w-60 "
          alt=""
        />
        <div className="flex flex-row gap-4 absolute top-[5%]  left-[10vh]  md:mt-0 md:ml-4 lg:flex-col md:top-[5%] md:left-[32%]  lg:bottom-[55%] lg:left-[22%] lg:top-40">
          <div className="flex ">
            <div
              className={`border w-10 h-10  rounded-full ${
                formNumber === 1 ? 'bg-blue-400 text-black ' : 'text-white'
              }`}
            >
              <h3 className=" text-center mt-1.5 ">1</h3>
            </div>

            <span className="pl-4  hidden lg:block text-white">
              <h3 className="">STEP 1</h3>
              <h4>YOUR INFO</h4>
            </span>
          </div>
          <div className="flex ">
            <div
              className={`border ml-2 lg:ml-0 w-10 h-10 rounded-full  ${
                formNumber === 2 ? 'bg-blue-400 text-black ' : 'text-white'
              }`}
            >
              <h3 className="text-center mt-1.5">2</h3>
            </div>
            <span className="pl-4 hidden lg:block text-white">
              <h3>STEP 2</h3>
              <h4>SELECT PLAN</h4>
            </span>
          </div>
          <div className="flex">
            <div
              className={`border ml-2 w-10 h-10 lg:ml-0 rounded-full ${
                formNumber === 3 ? 'bg-blue-400 text-black ' : 'text-white'
              }`}
            >
              <h3 className="text-center mt-1.5">3</h3>
            </div>
            <span className="pl-4 hidden lg:block text-white">
              <h3>STEP 3</h3>
              <h4>ADD-ONS</h4>
            </span>
          </div>
          <div className="flex ">
            <div
              className={`border ml-2 lg:ml-0  w-10 h-10  rounded-full  ${
                formNumber === 4 ? 'bg-blue-400 text-black ' : 'text-white'
              }`}
            >
              <h3 className="text-center mt-1.5">4</h3>
            </div>
            <span className="pl-4 hidden lg:block text-white">
              <h3>STEP 4</h3>
              <h4>SUMMARY</h4>
            </span>
          </div>
        </div>
      </div>

      <div className="pt-2 w-100vh lg:pt-10 lg:pr-10 ">
        <Forminput formNumber={formNumber} setFormNumber={setFormNumber} />
      </div>
    </div>
  )
}

export default Sidebar
