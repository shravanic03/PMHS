import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
export function SurveyComponent(props) {
    

    return (
        <>
        <Navbar />
<div class="w-full bg-gradient-to-r from-[#a9acec] to-white py-8 mt-9">
  <h1 class="text-4xl font-bold text-center text-gray-500 whitespace-nowrap max-w-none">
    YOUR FEEDBACK IS VALUABLE TO US
  </h1>
</div>


<form class="max-w-xl mx-auto border-2 border-[#a9acec] p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#a9acec] to-white mb-9 mt-6">


  <div class="relative z-0 w-full mb-10 group mt-9">
    <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
  </div>

 
  <div class="relative z-0 w-full mb-5 group">
    <input type="text" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
  </div>


  <div class="relative z-0 w-full mb-5 group">
    <input type="text" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
  </div>

  
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Class</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Registration Number</label>
    </div>
  </div>

  <div class="flex items-center space-x-6 mb-5">
    <div class="relative z-0 w-full group">
      <input type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Phone Number</label>
    </div>
    <div class="relative z-0 w-full group">
      <input type="date" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform translate-y-0 scale-100 top-0 peer-focus:scale-100 peer-focus:-translate-y-0">Date of Appointment</label>
    </div>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">How satisfied were you with the overall mental health support services?(1-10)</label>
      <input type="number" required min="0" max= "10" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Did you feel heard and understood during your session or interaction?(Yes/No)</label>
      <input type="text" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">How comfortable did you feel talking to your mental health professional or support team?(1-10)</label>
      <input type="number"  min ="0" max ="10" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Did you find the available resources helpful(Yes/No)</label>
      <input type="text" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Was the mental health platform easy to use and navigate? (Yes/No)</label>
      <input type="text" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Do you feel any improvements in your mental health after receiving support?(Yes/No)</label>
      <input type="text" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>
  <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Did you feel that your privacy and confidentiality were respected? (Yes/No)</label>
      <input type="text" required id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8"/>
  </div>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-9">Submit</button>
</form>


<Footer />

            
        </>
    )
}
