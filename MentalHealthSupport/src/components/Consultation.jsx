import React from 'react';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

console.log("consultation");
export function Consultation() {
    const [selectedDate, setSelectedDate] = useState('');
    // const [availableSlots, setAvailableSlots] = useState([]);
    const [bookSlot, setBookSlot]=useState(false);
    const navigate = useNavigate();
    

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleViewTimeSlots = () => {
        // Here, you would fetch or filter time slots based on the selectedDate.
        // For demonstration, we're using static slots. Replace this with actual logic.
        const slots = {
            '2024-06-30': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM'],
        };

        // setAvailableSlots(slots[selectedDate] || []);
    };
const confirmation =()=>
{
      alert("Appointment Confirmed!")
   navigate ="/"
};
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-12">
                {/* Centering the card */}
                <a
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-[24rem] md:h-[24rem] md:w-[24rem] md:rounded-none md:rounded-s-lg"
                        src="https://i.pinimg.com/474x/0b/78/c1/0b78c19d3d32723075561cb26d3991f5.jpg"
                        alt="Counselor"
                    />
                    <div className="flex flex-col justify-between p-6 leading-normal">
                        <h5 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            MEET OUR COUNSELLOR
                        </h5>
                        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                            Information about the counsellor
                        </p>
                    </div>
                </a>
            </div>

            {/* Time slots button */}
           
            <div className="w-full bg-gradient-to-r from-[#a9acec] to-white py-8 mt-16 flex justify-center">
            <h1 className="text-gray-600 dark:text-gray-400 text-3xl font-bold mb-6">
                    BOOK AN APPOINTMENT
                </h1>
                <div className="flex flex-col items-center pt-5 border-t border-gray-200 dark:border-gray-800 w-full max-w-4xl">
                    <div className="mb-5">
                        <input
                            type="date"
                            className="border-gray-300 dark:border-gray-700"
                            aria-label="Select date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="w-full sm:w-auto text-center">
                        <h3 className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
                            {selectedDate ? new Date(selectedDate).toDateString() : 'Select a date'}
                        </h3>
                    </div>
                </div>
            </div>
            <ul id="timetable" class="grid w-full grid-cols-2 gap-2 mt-16">
         <li>
            <input type="radio" id="10-am" value="" class="hidden peer" name="timetable"/>
            <label for="10-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            10:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="10-30-am" value="" class="hidden peer" name="timetable"/>
            <label for="10-30-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            10:30 AM
            </label>
         </li>
         <li>
            <input type="radio" id="11-am" value="" class="hidden peer" name="timetable"/>
            <label for="11-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            11:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="11-30-am" value="" class="hidden peer" name="timetable"/>
            <label for="11-30-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            11:30 AM
            </label>
         </li>
         <li>
            <input type="radio" id="12-am" value="" class="hidden peer" name="timetable" />
            <label for="12-am"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            12:00 AM
            </label>
         </li>
         <li>
            <input type="radio" id="12-30-pm" value="" class="hidden peer" name="timetable"/>
            <label for="12-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            12:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="1-pm" value="" class="hidden peer" name="timetable"/>
            <label for="1-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            01:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="1-30-pm" value="" class="hidden peer" name="timetable"/>
            <label for="1-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            01:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="2-pm" value="" class="hidden peer" name="timetable"/>
            <label for="2-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            02:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="2-30-pm" value="" class="hidden peer" name="timetable"/>
            <label for="2-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            02:30 PM
            </label>
         </li>
         <li>
            <input type="radio" id="3-pm" value="" class="hidden peer" name="timetable"/>
            <label for="3-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            03:00 PM
            </label>
         </li>
         <li>
            <input type="radio" id="3-30-pm" value="" class="hidden peer" name="timetable"/>
            <label for="3-30-pm"
               class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500">
            03:30 PM
            </label>
         </li>
      </ul>
      <button type="button" onClick={confirmation} class="px-5 py-3 text-base font-medium text-center inline-flex items-center text-grey bg-[#a9acec] rounded-lg hover:bg-[#515595] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-16 mb-16">
<svg class="w-4 h-4 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
Book the slot
</button>
            <Footer />
        </>
    );
}
