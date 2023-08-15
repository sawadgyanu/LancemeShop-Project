import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#01021D]">
      <div className="relative z-10 mx-auto max-w-7xl px-4  ml-[8rem] mr-[8rem]">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span className="ml-4 text-white font-bold">Lenceme Shop.</span>
                </div>
                <p className='flex items-center justify-between ml-4 text-white '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cupiditate iure maiores facilis, illum harum consectetur ratione dolores debitis facere at aut qui. Ullam dolor omnis est? Optio, dignissimos cupiditate!</p>
              <div className="flex items-center space-x-4 ml-4 text-white mt-4">
             <a href="#" text-white className="text-white  hover:text-[#4267B2]">
                    <FaFacebookF className="w-6 h-6" />
                   </a>
                   <a href="#" className=" hover:text-[#1DA1F2] text-white ">
                     <FaTwitter className="w-6 h-6" />
                   </a>
                   <a href="#" className="text-white  hover:text-pink-700">
                     <FaInstagram className="w-6 h-6" />
                   </a>
                   <a href="#" className="text-white  hover:text-[#0072b1]">
                     <FaLinkedinIn className="w-6 h-6" />
                   </a>
                 </div>
            </div>
          </div>
          <div className="w-full p-3 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                About
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-3 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Patnership
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-3 md:w-1/2 lg:w-3/12 ">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Informations
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-white hover:text-gray-700" href="#">
                     Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
        </div>
      </div>
      <hr className=' mt-10 '/>
      <div className='flex'>
    <p className='items-center justify-center text-white mx-auto '>
    &copy; Copyright 2022. All Rights Reserved by Lenceme Shop. 
     </p>
     </div>
  </section>
  )
}
