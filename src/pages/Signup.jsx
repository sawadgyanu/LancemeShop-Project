// import React, { useRef } from 'react'
// import { Link } from 'react-router-dom'

// const Signup = () => {

//     const handleClick  = ()=>{
//         console.log('not working');
//     }
    




//   return (
//     <>
//         <div className=' h-screen flex justify-center items-center hover:bg-[var(--secondary-color)]'>
//             <div className=" flex flex-col gap-[60px] w-[500px] bg-black/10 shadow-xl border-2 border-white  rounded-lg p-[40px]  h-max" >
//                 <p className='text-2xl font-bold text-center'><span className='text-3xl text-[var(--primary-color)] font-bold '>Lanceme</span> Shop</p>
//                 <div className='flex gap-2 flex-col'>
//                     <label className='text-xl text-gray-600' >E-mail</label>
//                     <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2'  placeholder='Enter your email...' type="email" />
//                 </div>
//                 <div className='flex gap-2 flex-col'>
//                     <label className='text-xl' >Password</label>
//                     <input className='w-full pl-3 text-black bg-slate-300 outline-[var(--primary-color)] rounded-lg py-2'placeholder=' Enter your password..' type="password" />
//                 </div>
//                 <button  className='p-3 text-xl bg-[var(--primary-color)] hover:bg-[var(--secondary-color)]   text-white cursor-pointer rounded-lg '>Sign Up</button>
//                 {/* <p>Already Have Account ? Click here </p> */}
//                 <p>Already Have  Account ? <Link className='font-bold cursor-pointer text-[var(--primary-color)]' to={'/login'}  >Click here</Link>  </p>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Signup