import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
export function Signup(props) {
    

    return (
        <>
         <Navbar/>   

         <form class="max-w-xl mx-auto border-2 border-[#a9acec] p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#a9acec] to-white mb-9 mt-7">


<div class="relative z-0 w-full mb-10 group mt-9">
  <input type="mail" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail</label>
</div>


<div class="relative z-0 w-full mb-5 group">
  <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
</div>


<div class="relative z-0 w-full mb-5 group">
  <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password </label>
</div>


<div class="grid md:grid-cols-2 md:gap-6">
  <div class="relative z-0 w-full mb-5 group">
    <input type="text" required name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">First Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Last Name</label>
  </div>
</div>

<div class="flex items-center space-x-6 mb-5">
  <div class="relative z-0 w-full group">
    <input type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Phone Number</label>
  </div>
  <div class="relative z-0 w-full group">
    <input type="string" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Registration Number</label>
  </div>
</div>

<button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-9 mt-5">Sign up </button>
</form>

  
<Footer/>
        </>
    )
}
