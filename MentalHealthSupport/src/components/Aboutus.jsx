import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { useState } from 'react';
export function Aboutus(props) {
    const [openAccordion, setOpenAccordion] = useState(null);

    // Function to handle accordion toggle
    const toggleAccordion = (accordionNumber) => {
      setOpenAccordion(openAccordion === accordionNumber ? null : accordionNumber);
    };

    return (
        <>
        <Navbar/>
        <div
      id="accordion-open"
      className="flex flex-col w-full h-screen bg-gradient-to-r from-[#a9acec] to-white max-w-6xl px-4 mx-auto my-8"
    >
      {/* Accordion Item 1 */}
      <div className="flex-grow">
      <h2 id="accordion-open-heading-1">
  <button
    type="button"
    className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
    onClick={() => toggleAccordion(1)}
  >
    <span className="w-full flex justify-center items-center text-4xl">VISION</span>
    <svg
      data-accordion-icon
      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
        openAccordion === 1 ? 'rotate-180' : ''
      }`}
      fill="none"
      viewBox="0 0 10 6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5 5 1 1 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  </button>
</h2>
        <div
          className={`${
            openAccordion === 1 ? 'block' : 'hidden'
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          To create a compassionate and supportive environment where every individual feels valued, heard, and empowered to achieve their full potential by prioritizing mental health and well-being
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
             
            </a>{' '}
           
          </p>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="flex-grow">
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleAccordion(2)}
          >
            <span className="w-full flex justify-center items-center text-4xl">MISSION</span>
            <svg
              data-accordion-icon
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openAccordion === 2 ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5 5 1 1 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            openAccordion === 2 ? 'block' : 'hidden'
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our mission is to provide accessible and confidential mental health support to the PICT community. We aim to promote awareness, encourage open conversations, and offer resources that foster emotional resilience, self-care, and a sense of belonging among students, faculty, and staff.
          </p>
          
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="flex-grow">
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleAccordion(3)}
          >
            <span className="w-full flex justify-center items-center text-4xl">WHAT DO WE HELP WITH?</span>
            <svg
              data-accordion-icon
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openAccordion === 3 ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5 5 1 1 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            openAccordion === 3 ? 'block' : 'hidden'
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Stress and Anxiety Management:
We provide tools and techniques to help manage stress and anxiety, whether related to academics, relationships, or personal challenges. Our support includes mindfulness practices, breathing exercises, and personalized strategies to reduce tension and promote calmness.<br/>

Emotional Support and Counseling:
Our professional counselors are here to offer a safe, confidential space where you can express your feelings and concerns. Whether you're dealing with sadness, loneliness, anger, or any other emotional difficulty, we are here to listen and help you work through your emotions.<br/>
Crisis Intervention and Immediate Support:
For those in urgent need, we offer crisis intervention services to provide immediate support and guidance. We help connect you to appropriate resources, whether it's emergency contacts, mental health professionals, or external services that can provide further assistance.<br/>

Mindfulness and Relaxation Techniques:
We promote the practice of mindfulness and relaxation through guided meditation, yoga sessions, and other calming activities designed to enhance mental clarity, reduce stress, and improve overall well-being.<br/>

Resource Library and Self-Help Tools:
Our website features a comprehensive resource library, including articles, videos, podcasts, and self-help tools on various topics related to mental health. These resources are available to help you gain insights, learn coping strategies, and explore new ways to enhance your mental wellness.<br/>

Personal Development and Resilience Building:
We offer support to help you build resilience and develop positive coping mechanisms for dealing with life's challenges. This includes goal-setting, time management, building self-esteem, and fostering healthy habits for long-term well-being.<br/>
          </p>
         
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="flex-grow">
        <h2 id="accordion-open-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => toggleAccordion(4)}
          >
           <span className="w-full flex justify-center items-center text-4xl">MEET THE TEAM</span>
            <svg
              data-accordion-icon
              className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                openAccordion === 4 ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 10 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5 5 1 1 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </h2>
        <div
          className={`${
            openAccordion === 4 ? 'block' : 'hidden'
          } p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p>
        </div>
      </div>
    </div>              <Footer/>
            
        </>
    )
}
