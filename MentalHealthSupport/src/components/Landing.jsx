import React from "react";
import { Navbar } from "./Navbar";
//import { Footer } from "flowbite-react";
import { Footer } from "./Footer";

export function Landing(props) {
  return (
    <>
    <Navbar/>
    
      <div className="flex justify-center items-center mt-12"> {/* Centering the card */}
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-[24rem] md:h-[24rem] md:w-[24rem] md:rounded-none md:rounded-s-lg"
            src="https://m.economictimes.com/thumb/msid-64362847,width-1200,height-900,resizemode-4,imgsize-239016/mental-health-and-support-groups-telling-your-stories-and-listening-to-others-can-hasten-the-healing-process.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-6 leading-normal"> 
            <h5 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              What is Mental Health Support?
            </h5> 
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            At <b>PICT Pune</b>, we are committed to creating an inclusive environment where everyone feels heard, valued, and supported in their journey towards mental and emotional health. Mental health support is essential for fostering well-being, resilience, and personal growth. It involves providing a safe space where individuals can seek help, share their feelings, and receive guidance from trained professionals. Whether it's through counseling, peer support, or resources for self-care, mental health support helps address emotional challenges, reduce stress, and promote overall wellness.
            </p>
          </div>
        </a>
      </div>

      <nav
  className="flex px-5 py-6 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 mt-8"
  aria-label="Breadcrumb"
>
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse justify-center w-full">
    <li className="inline-flex items-center space-x-2">
      <img 
        src="https://t4.ftcdn.net/jpg/07/55/59/39/360_F_755593909_EtHKIgsv6c9KrBMZ6zxPfYU9krAwgxiZ.jpg"
        className="w-10 h-10 object-cover"
      />
      <a
        href="#"
        className="text-xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      >
        Trained Counsellor
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <svg
        className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <img 
        src="https://t4.ftcdn.net/jpg/07/55/59/39/360_F_755593909_EtHKIgsv6c9KrBMZ6zxPfYU9krAwgxiZ.jpg"
        className="w-10 h-10 object-cover"
      />
      <a
        href="#"
        className="text-xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      >
        Private and Confidential
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <svg
        className="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <img 
        src="https://t4.ftcdn.net/jpg/07/55/59/39/360_F_755593909_EtHKIgsv6c9KrBMZ6zxPfYU9krAwgxiZ.jpg"
        className="w-10 h-10 object-cover"
      />
      <span className="text-xl font-medium text-gray-500 dark:text-gray-400">
        Operate 24x7
      </span>
    </li>
  </ol>
</nav>


<div class="w-full bg-gradient-to-r from-[#a9acec] to-white py-8 mt-16">
  <h1 class="text-4xl font-bold text-center max-w-sm mx-auto">RECOMMENDATIONS</h1>
</div>

<div class="flex items-center justify-center mt-16 ml-24 ">

<div className="flex justify-center items-center mr-36 -ml-10 -mt-10">
  {/* Centering the card */}
  <a
    href="#"
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      className="object-cover w-full rounded-t-lg h-[36rem] md:h-[36rem] md:w-80 md:rounded-none md:rounded-s-lg"
      src="https://i.pinimg.com/564x/af/6a/17/af6a17d3c362e3ca3ffcb06870557467.jpg"
      alt=""
    />
    <div className="flex flex-col justify-between p-8 leading-normal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Why Mental Health and Well-Being Matter?
      </h5>
      <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
      At <b>PICT Pune</b>, we believe that supporting mental health is essential for academic success, personal growth, and a thriving college environment. Mental health and well-being are crucial for living a balanced and fulfilling life. They impact how we think, feel, and interact with others, as well as our ability to handle stress, overcome challenges, and achieve our goals. Good mental health allows us to cope with the ups and downs of life, build meaningful relationships, and contribute positively to our community. Prioritizing mental well-being is not just about managing stress or emotional difficulties—it's about nurturing a sense of purpose, resilience, and happiness.
        </p>
    </div>
  </a>
</div>





  
  <div class="flex flex-col space-y-8 mr-10 mb-32">

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MUSIC</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Listening to calming music can be a powerful way to soothe the mind and relax the body. Gentle melodies, soft instrumentals, or even nature sounds can help reduce stress and create a peaceful atmosphere.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

   
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BOOKS</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Reading a good book can be an excellent way to relax and find inner peace. Whether it’s a novel that takes you on a journey, a self-help book offering mindfulness techniques, or a collection of poetry that speaks to your heart, books can provide comfort and perspective. </p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

   
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MOVIES</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Watching a feel-good movie can provide a comforting escape and help you unwind. Movies with uplifting stories, beautiful visuals, or light-hearted humor can elevate your mood and offer a refreshing break from daily stress.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<Footer/>

     
    </>
  );
}
