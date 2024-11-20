import Head from 'next/head';

export default function Home() {
    return (
        <>
            <div className="bg-gray-950 h-screen flex p-10">
                {/* Sidebar */}
                <div className="bg-gray-800 rounded-3xl h-full w-[5%] p-5">
                    <div>
                        <img src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="Logo" />
                    </div>

                    {/* Navbar */}
                        <ul className="text-slate-400 text-center py-20 text-sm font-semibold">
                            <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                                <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
                                <li className="mb-16">Weather</li>
                            </div>

                            <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                                <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                <li className="mb-16">Cities</li>
                            </div>

                            <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                                <svg className="mb-2 mx-[28%] feather feather-map" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                                <li className="mb-16">Map</li>
                            </div>

                            <div className="hover:text-white hover:stroke-white transition delay-150 duration-700 cursor-pointer">
                                <svg className="mb-2 mx-[28%]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                                <li className="mb-16">Settings</li>
                            </div>
                        </ul>
                </div>

                {/* Main Content */}
                <div className="w-[90%] h-full mx-10 flex flex-col">

                    {/* Search button */}
                    <div className="bg-gray-800 w-full h-[6%] rounded-2xl">
                        <p className="text-slate-400 text-start my-4 mx-4 font-semibold text-sm">Search for cities</p>
                    </div>

                    {/* Ulaanbaatar */}
                    <div className="bg-transparent w-full h-[30%] mt-6 rounded-2xl">
                        <h1 className="text-4xl font-semibold text-white mx-12 my-2 ">Ulaanbaatar</h1>
                        <p className="text-slate-400 mx-12 my-3">Chance of rain: 0%</p>
                        <h2 className="text-6xl text-white font-semibold mx-12 my-14">31°</h2>
                        <svg className="mx-[75%] -my-[20%] stroke-amber-500 hover:animate-spin" xmlns="http://www.w3.org/2000/svg" width="180" height="180  " viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    </div>

                    {/* Today's forecast */}
                    <div className="bg-gray-800 w-full h-[30%] mt-6 rounded-2xl">
                        <p className="text-slate-400 text-sm font-semibold text-start my-7 mx-10">TODAY'S FORECAST</p>
                        <div className="grid grid-flow-col gap-5">
                            <div className="border-r-2 border-slate-400">
                                <p className="text-slate-400 font-semibold mx-16">6:00 AM</p> 
                                <svg className="mx-[35%] my-2 stroke-sky-500" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
                                <p className="text-white font-semibold text-2xl mx-[40%] cursor-pointer">25°</p>
                            </div>
                            <div className="border-r-2 border-slate-400">
                                <p className="text-slate-400 font-semibold mx-16">9:00 AM</p> 
                                <svg className="mx-[32%] my-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                                <p className="text-white font-semibold text-2xl mx-[37%] cursor-pointer">28°</p>
                            </div>
                            <div className="border-r-2 border-slate-400">
                                <p className="text-slate-400 font-semibold mx-16">12:00 PM</p> 
                                <svg className="mx-[32%] my-2 stroke-amber-500 hover:animate-spin" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                <p className="text-white font-semibold text-2xl mx-[37%] cursor-pointer">33°</p>
                            </div>
                            <div className="border-r-2 border-slate-400">
                                <p className="text-slate-400 font-semibold mx-16">3:00 PM</p> 
                                <svg className="mx-[32%] my-2 stroke-gray-300" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                                <p className="text-white font-semibold text-2xl mx-[37%] cursor-pointer">34°</p>
                            </div>
                            <div>
                                <p className="text-slate-400 font-semibold mx-14">6:00 AM</p> 
                                <svg className="mx-[32%] my-2" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>
                                <p className="text-white font-semibold text-2xl mx-[37%] cursor-pointer">32°</p>
                            </div>
                        </div>
                    </div>

                    {/* Air condition */}
                    <div className="bg-gray-800 w-full h-[30%] mt-6 rounded-2xl flex flex-col justify-between">
                        <div className="w-full flex justify-between">
                            <p className="text-slate-400 text-sm font-semibold text-start my-7 mx-10">AIR CONDITIONS</p>
                            {/* See more */}
                            <button className="rounded-full bg-sky-500 hover:bg-sky-600 transition delay-150 duration-700 h-7 w-24 p-3 my-6 mx-16">
                            <p className="text-white font-semibold text-sm text-center -my-2">See more</p>
                        </button>
                        </div>

                        {/* Air Condition Statistics */}
                        <div className="w-full h-44 grid grid-flow-col grid-rows-2">
                            
                            <div>
                                <svg className="mx-10 -my-[1.5%] stroke-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
                                <p className="text-slate-400  text-xl -my-7 mx-[15%]">Real Feel</p>
                                <h2 className="text-white text-4xl font-semibold my-[5.5%] mx-[15%] cursor-pointer">30°</h2>
                            </div>

                            <div>
                                <svg className="mx-10 -my-[2%] stroke-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
                                <p className="text-slate-400 text-xl -my-7 mx-[15%]">Chance of rain</p>
                                <h2 className="text-white text-4xl font-semibold my-[5.5%] mx-[15%] cursor-pointer">0%</h2>
                            </div>
                            
                            <div>
                                <svg className="mx-10 -my-[1%] stroke-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
                                <p className="text-slate-400  text-xl -my-[5.6%] mx-[15%]">Wind</p>
                                <h2 className="text-white text-4xl font-semibold my-[5.9%] mx-[15%] cursor-pointer">0.2 km/h</h2>
                            </div>

                            <div>
                                <svg className="mx-10 -my-[1%] stroke-slate-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                <p className="text-slate-400  text-xl -my-[5.6%] mx-[15%]">UV Index</p>
                                <h2 className="text-white text-4xl font-semibold my-[5.5%] mx-[15%] cursor-pointer">3</h2>
                            </div>  
                        </div>
                    </div>
                </div>

                {/* 7-day forecast */}

                <div className="bg-gray-800 w-[50%] h-[93%] mx-2 rounded-3xl my-16">
                    <p className="text-slate-400 text-sm font-semibold text-start my-7 mx-10">7-DAY FORECAST</p>

                    {/* Sunny */}
                    <div>
                        <p className="text-slate-400 font-semibold mx-10 py-4">Today</p>
                        <svg className="stroke-amber-500  mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Sunny</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">36/22</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>  

                    {/* Cloudy */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6">Tue</p>
                        <svg className="stroke-white mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Cloudy</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">37/21</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>

                    {/* Rainy */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6"> Wed</p>
                        <svg className="stroke-sky-600 mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Rainy</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">35/21</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>

                    {/* Storm */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6">Thus</p>
                        <svg className="stroke-yellow-600 mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Storm</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">34/19</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>

                    {/* Cloudy */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6">Fri</p>
                        <svg className="stroke-white mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Cloudy</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">34/22</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>

                    {/* Sunny */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6">Sat</p>
                        <svg className="stroke-amber-500  mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Sunny</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">36/25</p>
                        <hr className="my-[16%] w-[85%] mx-[8%]"></hr>
                    </div>

                    {/* Sunny */}
                    <div className="-my-[14%]">
                        <p className="text-slate-400 font-semibold mx-10 py-6">Sun</p>
                        <svg className="stroke-amber-500  mx-[40%] -my-[9.5%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        <p className="text-slate-300 font-semibold mx-[50%] my-[4.1%]">Sunny</p>
                        <p className="text-slate-300 font-semibold -my-[8.2%] mx-[85%]">37/25</p>
                    </div>
                </div>
            </div>
        </>
    );
}