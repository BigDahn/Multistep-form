import React, { useState } from 'react'
import { subscription,addOns } from './data'
import { useForm } from 'react-hook-form'

const Forminput = ({formNumber,setFormNumber}) => {

  const [start, setStart] = useState(subscription[0])
  const [value, setValue] = useState(true)
  const [plan, setPlan] = useState('Monthly')
  const [checked,setChecked] = useState(addOns.map((i)=>({...i, isSelected:false})))
  const [AddOns,setAddOns] = useState([])
  
  const handleStart = (index) => {
    
    setStart(subscription[index])
    
  }

  const TotalPrice = AddOns.reduce((i, d) => {
    return i + d.price
  }, 0)

 const {
   register,
   
  
   formState: { errors,isValid },
 } = useForm({mode: 'all'})

const renderPrevButton = ()=>{
  if (formNumber > 4 || formNumber < 2) {
        return undefined
  } else {
    return (
      <button
        type=" button"
        className="btn btn-sm bg-[#9699ab] "
        onClick={prevFormPage}
      >
        Go Back
      </button>
    )
  }
}
const renderNextButton = ()=>{
  if (formNumber > 4) {
    return undefined
  } else{
return (
  <button
    disabled={!isValid}
    type=" button"
    className="btn btn-primary btn-sm"
    onClick={nextFormPage}
  >
    {formNumber >= 4 ? <p>Confirm</p> : <p>Next Step</p>}
  </button>
)
  }
}
  
  const checkBoxChange = (id) =>{
    const newFile = checked.map((i)=>{
      if(i.id === id){
        return {
          ...i,
          isSelected:!i.isSelected
        } 
        
      }
      return i
    })
   
    setChecked(newFile)
    
    const newPort = newFile.filter((d)=>d.isSelected)
    setAddOns(newPort)
    
    
     
  }



  const handleChange = () => {
    setValue(!value)

    if (value) {
      setPlan('Yearly')
    } else {
      setPlan('Monthly')
    }
  }

  const nextFormPage = (e)=>{
    e.preventDefault()
        setFormNumber(formNumber + 1)
  }

  const prevFormPage = (e)=>{
     e.preventDefault()
     setPlan(plan)
     setFormNumber(formNumber - 1)
  }

  
  
  return (
    <div className="  ">
      <form action="" className=" " noValidate>
        {formNumber === 1 && (
          <section className="pl-4 max-w-[340px] lg:pl-0 lg:max-w-[100vh] lg:mr-0 lg:mb-0 lg:mt-0">
            <h3 className="pb-2 font-bold text-[25px] lg:pb-2 md:text-center lg:text-left">
              Personal Info
            </h3>
            <h4 className=" pb-2 text-[#9699ab] text-[16px] mr-2 lg:pb-6 lg:mr-2 md:text-center lg:text-left">
              Please provide your name,email address, and phone number
            </h4>
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-slate-500 text-left md:ml-2 lg:ml-0">
                Name
              </label>
              <span>
                {errors.name && (
                  <p className="text-red-600 text-[10px] ">
                    {errors.name.message}
                  </p>
                )}
              </span>
            </div>

            <div className="flex flex-row ">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e.g stephen king"
                className={
                  errors.name
                    ? 'cursor-pointer peer rounded-md w-[320px] bg-white border hover:border-[#473dff] focus:outline-none focus:ring-[#473dff] focus:border-red-600 text-sm p-2.5 md:w-[400px] md:ml-2 lg:w-full lg:ml-0'
                    : 'cursor-pointer peer rounded-md bg-white border hover:border-[#473dff] focus:ring-[#473dff] focus:outline-none focus:border-[#473dff]  w-[320px] text-sm p-2.5 md:w-[400px] md:ml-2 lg:w-full lg:ml-0'
                }
                {...register('name', {
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                })}
              />
            </div>

            <div className="mt-2">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-slate-500 text-left md:ml-2 lg:ml-0">
                  Email Address
                </label>
                <span>
                  {errors.email && (
                    <p className="text-red-600 text-[10px] ">
                      {errors.email.message}
                    </p>
                  )}
                </span>
              </div>

              <div className="flex flex-row">
                <input
                  type="text"
                  id="email address"
                  name="email address"
                  placeholder="e.g stephenking@gmail.com"
                  className={
                    errors.email
                      ? 'cursor-pointer peer rounded-md w-[320px] bg-white border hover:border-[#473dff] focus:outline-none focus:ring-[#473dff] focus:border-red-600   text-sm p-2.5 md:w-[400px] md:ml-2 lg:w-full lg:ml-0'
                      : 'cursor-pointer peer rounded-md bg-white border hover:border-[#473dff] focus:ring-[#473dff] focus:outline-none focus:border-[#473dff]  w-[320px] text-sm p-2.5 md:w-[400px] md:ml-2 lg:w-full lg:ml-0'
                  }
                  {...register('email', {
                    required: 'This field is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "make sure it's an email!",
                    },
                  })}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-slate-500 text-left md:ml-2 lg:ml-0">
                  Phone Number
                </label>
                <span>
                  {errors.number && (
                    <p className="text-red-600 text-[10px] ">
                      {errors.number.message}
                    </p>
                  )}
                </span>
              </div>

              <div className="flex flex-row">
                <input
                  type="text"
                  id="phone number"
                  name="phone number"
                  placeholder="e.g +1 234 567 890"
                  className={
                    errors.number
                      ? 'cursor-pointer peer rounded-md w-[320px] bg-white border hover:border-[#473dff] focus:outline-none focus:ring-[#473dff] focus:border-red-600 md:w-[400px] text-sm p-2.5 md:ml-2 lg:w-full lg:ml-0'
                      : 'cursor-pointer peer rounded-md bg-white border hover:border-[#473dff] focus:ring-[#473dff] focus:outline-none focus:border-[#473dff] w-[320px] text-sm p-2.5 md:w-[400px] md:ml-2 lg:w-full lg:ml-0'
                  }
                  {...register('number', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                />
              </div>
            </div>
          </section>
        )}
        {formNumber === 2 && (
          <section className="pl-4 max-w-[340px] lg:pl-0 lg:max-w-[100vh] lg:mr-0 lg:mb-0 lg:mt-0">
            <h3 className="pb-2 pt-4 font-bold text-[25px] md:text-center lg:text-left">
              Select your plan
            </h3>
            <p className=" text-[#9699ab] text-[16px] md:text-center lg:text-left">
              You have the option of monthly or yearly billing.
            </p>
            <div
              className="flex flex-col  gap-4 mt-2.5 lg:flex-row lg:mt-8  "
              key="id"
            >
              {subscription.map((item, index) => {
                const { id, title, img, price, details } = item
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleStart(index)}
                    className={`border w-[300px] h-22  rounded-md  lg:w-32 md:w-[300px] md:ml-4 lg:ml-0 ${
                      start.title === title && `border-[#473dff]`
                    }`}
                  >
                    <div className="flex lg:grid">
                      <img
                        src={img}
                        alt="plan"
                        className="pb-8 pt-4 pl-4 lg:pl-2 "
                      />
                      <div className="text-left   pl-4 pr-4 pt-3 pb-3  lg:pb-2 lg:pt-0 lg:pl-2">
                        <h3 className="font-semibold ">{title}</h3>

                        <h6 className="text-[#9699ab] text-sm">
                          {plan === 'Monthly' ? (
                            <h5>${price}/mo</h5>
                          ) : (
                            <h5>${price * 10}/yr</h5>
                          )}
                        </h6>
                        {plan === 'Yearly' && (
                          <p className="font-semibold text-sm">{details}</p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="bg-[#f0f6ff] flex justify-center w-[300px] md:w-[300px]   mt-2.5 pb-2 pt-2 lg:w-[420px] lg:mt-8 md:ml-4 lg:ml-0">
              <label
                className="inline-flex items-center cursor-pointer "
                key="id"
              >
                <span
                  className={`ms-3 text-sm font-medium  text-gray-300 ${
                    plan === 'Monthly' && `dark:text-gray-900`
                  } pr-2`}
                >
                  Monthly
                </span>
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={handleChange}
                />
                <div
                  className={`relative w-12 h-6  peer-focus:outline-none  rounded-full peer dark:bg-sky-950 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5  after:transition-all dark:border-gray-600 peer-checked:bg-sky-950 `}
                ></div>
                <span
                  className={`ms-3 text-sm font-medium  text-gray-300 ${
                    plan === 'Yearly' && `dark:text-gray-900`
                  } pr-2`}
                >
                  Yearly
                </span>
              </label>
            </div>
          </section>
        )}
        {formNumber === 3 && (
          <section className="pl-4 max-w-[340px] lg:pl-0 lg:max-w-[100vh] lg:mr-0 lg:mb-0 lg:mt-0">
            <h3 className="pb-2 pt-4 font-bold text-[25px] md:text-center lg:text-left">
              Pick add-ons
            </h3>
            <p className="text-[#9699ab] text-[15px] md:text-center lg:text-left">
              Add-ons help enhance your gaming experience.
            </p>
            <div className="flex flex-col  gap-4 mt-4">
              {checked.map((i) => {
                const { id, title, info, price } = i
                return (
                  <button
                    type="button"
                    key={id}
                    className={`border w-[320px] p-2.5 rounded-md lg:w-[440px] md:w-[32vh] md:ml-2 lg:ml-0 ${
                      i.isSelected && 'border-[#473dff]'
                    }`}
                    onClick={() => checkBoxChange(id)}
                  >
                    <div className="flex justify-between">
                      <input
                        type="checkbox"
                        className="ml-2"
                        checked={i.isSelected}
                        onChange={() => checkBoxChange(id)}
                      />

                      <span className="pt-2 lg:pt-2">
                        <h3 className="font-semibold text-[14px]">{title}</h3>
                        <p className="text-[12px] text-[#9699ab] pb-2">
                          {info}
                        </p>
                      </span>
                      <span className="pt-4 pr-2 font-medium text-[#473dff] ">
                        {plan === 'Monthly' ? (
                          <h5>+${price}/mo</h5>
                        ) : (
                          <h5>+${price * 10}/yr</h5>
                        )}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </section>
        )}
        {formNumber === 4 && (
          <section className="pl-4 max-w-[340px] lg:pl-0 lg:max-w-[100vh] lg:mr-0 lg:mb-0 lg:mt-0 ">
            <h3 className="pb-2 font-bold text-[25px]  md:text-center lg:text-left lg:pb-2">
              Finishing up
            </h3>
            <h4 className=" text-[#9699ab] text-[15px] pb-2 lg:pb-6 md:text-center lg:text-left">
              Double-check everything looks OK before confirming
            </h4>
            <div className="flex flex-col gap-4">
              <div className="bg-[#f0f6ff] rounded-md w-[320px] lg:w-[440px] md:w-[32vh] md:ml-2 lg:ml-0 ">
                <div className="flex justify-between pt-[12px] pb-2 pl-[20px] pr-4">
                  <div>
                    <p className="font-bold">
                      {start.title} ({plan})
                    </p>
                    <p className="text-sm underline pb-4 text-[#9699ab]">
                      change
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold">
                      {plan === 'Monthly' ? (
                        <p>${start.price}/mo</p>
                      ) : (
                        <p>${start.price * 10}/yr</p>
                      )}
                    </h5>
                  </div>
                </div>
                <div className="border-b ml-[20px] mr-4"></div>
                <div>
                  {AddOns.map((i) => {
                    const { id, title, price } = i
                    return (
                      <div
                        key={id}
                        className="flex justify-between pl-[20px] pr-4 pt-[6px] pb-[10px]"
                      >
                        <h3 className="text-[#9699ab]">{title}</h3>
                        <h6 className="text-sm font-semibold">
                          {plan === 'Monthly' ? (
                            <p>+${price}/mo</p>
                          ) : (
                            <p>+${price * 10}/yr</p>
                          )}
                        </h6>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="rounded-md pt-3 pb-3 pl-4 pr-4 flex justify-between md:ml-2 md:mr-14 lg:ml-0 lg:mr-0">
                <h4 className="text-[#9699ab]">
                  {plan === 'Monthly' ? (
                    <p> Total (per month)</p>
                  ) : (
                    <p>Total (per year)</p>
                  )}
                </h4>
                <div>
                  <h3 className="text-[#473dff] font-bold">
                    {plan === 'Monthly' ? (
                      <p>+${start.price + TotalPrice}/mo</p>
                    ) : (
                      <p>+${(start.price + TotalPrice) * 10}/yr</p>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </section>
        )}

        {formNumber > 4 && (
          <section className="pl-4 max-w-[46vh] lg:pl-0 lg:max-w-[100vh] lg:mr-0 lg:mb-0 lg:mt-0 ">
            <article className="flex flex-col justify-center items-center m-auto">
              <div className="m-auto mt-10 lg:mt-20 ">
                <img
                  src="/Multiform/icon-thank-you.svg"
                  alt="completed"
                  width="60px"
                />
              </div>
              <div className="text-center lg:w-[440px] md:w-[30vh] ">
                <h3 className="font-bold mt-4 text-[25px]">Thank You!</h3>
                <p className="text-center mt-4 text-md text-[#9699ab]">
                  Thanks for confirming your subscription! we hope you have fun
                  using our platform.If you ever need support, feel free to
                  email us at support@loremgamming.com
                </p>
              </div>
            </article>
          </section>
        )}
        <div className="flex justify-between mt-8 ml-4 mr-4 mb-4 lg:mt-14 lg:ml-0 lg:mr-0 md:ml-6 ">
          {renderPrevButton()}
          {renderNextButton()}
        </div>
      </form>
    </div>
  )
}

export default Forminput
