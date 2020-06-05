<template>
  <div class="flex flex-col w-full h-screen overflow-hidden antialiased bg-gray-200">
    <div class="relative flex w-full h-screen overflow-hidden font-sans antialiased">
      <!-- left -->
      <div class="relative hidden flex flex-col h-full lg:block bg-white border-r border-gray-300 shadow-xl" style="width: 24rem">
        <div class="flex justify-between px-3 pt-1 text-white">
          <div class="flex items-center w-full py-2">
            <button aria-haspopup="true" class="p-2 text-gray-700 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200">
              <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="nonzero" d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"/>
              </svg>
            </button>
            <div class="relative flex items-center w-full pl-2 overflow-hidden text-gray-600 focus-within:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-none">
                        <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill-rule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"/>
                        </svg>
                    </button>
                </span>
              <input type="search" name="q"
                     class="w-full py-2 pl-12 text-sm text-white bg-gray-200 border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px"
                     placeholder="Search..." autocomplete="off">
            </div>
          </div>
        </div>
        <div class="border-b shadow-bot">
          <ul class="flex flex-row items-center inline-block px-2 list-none select-none">
            <li class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
              <a class="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                All
              </a>
            </li>
            <li class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
              <a class="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                Work
              </a>
            </li>
            <li class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
              <a class="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                Private
                <span class="flex items-center justify-center w-5 h-5 ml-1 text-xs text-white bg-blue-500 rounded-full">2</span>
              </a>
            </li>
            <li class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
              <a class="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                Groups
              </a>
            </li>
            <li class="flex-auto px-1 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
              <a class="flex items-center justify-center block py-2 text-xs font-semibold leading-normal tracking-wide border-b-2 border-transparent">
                Channels
              </a>
            </li>
          </ul>
        </div>
        <div class="relative mb-4 overflow-y-auto overflow-x-hidden scrolling-touch lg:max-h-sm mt-2 scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray">
          <ul class="flex flex-col inline-block w-full h-screen px-2 select-none">
            <li class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200" style="padding-top: 0.65rem; padding-bottom: 0.65rem">
              <div class="flex justify-between w-full focus:outline-none">
                <div class="flex w-full justify-between">
                  <div class="flex relative items-center justify-center w-12 h-12 mr-3 text-xl ml-2 font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                    <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1433588616917-dcbcc63429f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=" alt="">
                    <div class="bg-white rounded-full absolute flex items-center justify-center bottom-0 right-0" style="width: 0.80rem; height: 0.80rem">
                      <div class="bg-green-500 rounded-full" style="width: 0.6rem; height: 0.6rem"></div>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0 items-center">
                    <div class="flex justify-between mb-1">
                      <h2 class="text-sm text-black font-semibold">Lauri Edmon</h2>
                      <div class="flex">
                        <svg class="text-green-500 fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14">
                          <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"/>
                        </svg>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" style="color: transparent">
                          <path fill-rule="nonzero" d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"/>
                        </svg>
                        <span class="text-gray-600 font-medium text-xs ml-1">12.52</span>
                      </div>
                    </div>
                    <div class="text-sm flex justify-between truncate leading-none">
                      <span>Writing...</span>
                      <span v-else class="text-xs text-right w-5 h-5 flex items-center justify-center text-white bg-green-500 rounded-full">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200" style="padding-top: 0.65rem; padding-bottom: 0.65rem">
              <div class="flex justify-between w-full focus:outline-none">
                <div class="flex w-full justify-between">
                  <div class="flex relative items-center justify-center w-12 h-12 mr-3 text-xl ml-2 font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                    <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1589349133269-183a6c90fbfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100" alt="">
                    <div class="bg-white rounded-full absolute flex items-center justify-center bottom-0 right-0" style="width: 0.80rem; height: 0.80rem">
                      <div class="bg-green-500 rounded-full" style="width: 0.6rem; height: 0.6rem"></div>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0 items-center">
                    <div class="flex justify-between mb-1">
                      <h2 class="text-sm text-black font-semibold">Julian Gruber</h2>
                      <div class="flex">
                        <svg class="text-green-500 fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14">
                          <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"/>
                        </svg>
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" style="color: transparent">
                          <path fill-rule="nonzero" d="M7.96833846,10.0490996 L14.5108251,2.571972 C14.7472185,2.30180819 15.1578642,2.27443181 15.428028,2.51082515 C15.6711754,2.72357915 15.717665,3.07747757 15.5522007,3.34307913 L15.4891749,3.428028 L8.48917485,11.428028 C8.2663359,11.6827011 7.89144111,11.7199091 7.62486888,11.5309823 L7.54038059,11.4596194 L4.54038059,8.45961941 C4.2865398,8.20577862 4.2865398,7.79422138 4.54038059,7.54038059 C4.7688373,7.31192388 5.12504434,7.28907821 5.37905111,7.47184358 L5.45961941,7.54038059 L7.96833846,10.0490996 L14.5108251,2.571972 L7.96833846,10.0490996 Z"/>
                        </svg>
                        <span class="text-gray-600 font-medium text-xs ml-1">20.25</span>
                      </div>
                    </div>
                    <div class="text-sm flex justify-between truncate leading-none">
                      <span>Send audio...</span>
                      <span v-else class="text-xs text-right w-5 h-5 flex items-center justify-center text-white bg-green-500 rounded-full">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200" style="padding-top: 0.65rem; padding-bottom: 0.65rem">
              <div class="flex justify-between w-full focus:outline-none">
                <div class="flex w-full justify-between">
                  <div class="flex relative items-center justify-center w-12 h-12 mr-3 text-xl ml-2 font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                    <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1589222331438-0511a448dbc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100" alt="">
                  </div>
                  <div class="flex-1 min-w-0 items-center">
                    <div class="flex justify-between mb-1">
                      <h2 class="text-sm text-black font-semibold">Karlien Nihen</h2>
                      <div class="flex">
                        <span class="text-gray-600 font-medium text-xs ml-1">2.28</span>
                      </div>
                    </div>
                    <div class="text-sm flex justify-between truncate leading-none">
                      <span>Writing...</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200" style="padding-top: 0.65rem; padding-bottom: 0.65rem">
              <div class="flex justify-between w-full focus:outline-none">
                <div class="flex w-full justify-between">
                  <div class="flex relative items-center justify-center w-12 h-12 mr-3 text-xl ml-2 font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                    <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1589351189946-b8eb5e170ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100" alt="">
                  </div>
                  <div class="flex-1 min-w-0 items-center">
                    <div class="flex justify-between mb-1">
                      <h2 class="text-sm text-black font-semibold">Meg Rigden</h2>
                      <div class="flex">
                        <span class="text-gray-600 font-medium text-xs ml-1">12.52</span>
                      </div>
                    </div>
                    <div class="text-sm flex justify-between truncate leading-none">
                      <span>Washington D.C.</span>
                      <span v-else class="text-xs text-right w-5 h-5 flex items-center justify-center text-white bg-green-500 rounded-full">2</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="flex flex-no-wrap items-center pr-3 text-black rounded-lg cursor-pointer mt-200 py-65 hover:bg-gray-200" style="padding-top: 0.65rem; padding-bottom: 0.65rem">
              <div class="flex justify-between w-full focus:outline-none">
                <div class="flex w-full justify-between">
                  <div class="flex relative items-center justify-center w-12 h-12 mr-3 text-xl ml-2 font-semibold text-white bg-blue-500 rounded-full flex-no-shrink">
                    <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1589127097756-b2750896a728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100" alt="">
                    <div class="bg-white rounded-full absolute flex items-center justify-center bottom-0 right-0" style="width: 0.80rem; height: 0.80rem">
                      <div class="bg-green-500 rounded-full" style="width: 0.6rem; height: 0.6rem"></div>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0 items-center">
                    <div class="flex justify-between mb-1">
                      <h2 class="text-sm text-black font-semibold">Mark Green</h2>
                      <div class="flex">
                        <span class="text-gray-600 font-medium text-xs ml-1">05:41</span>
                      </div>
                    </div>
                    <div class="text-sm flex justify-between truncate leading-none">
                      <span>I do not remember anything</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="fixed absolute bottom-0 right-0 z-40 mb-6 mr-4">
          <button class="flex items-center justify-center w-12 h-12 mr-3 text-xl font-semibold text-white bg-blue-500 rounded-full focus:outline-none flex-no-shrink">
            <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                 height="24" viewBox="0 0 24 24">
              <path fill-rule="nonzero"
                    d="M3,17.46 L3,20.5 C3,20.78 3.22,21 3.5,21 L6.54,21 C6.67,21 6.8,20.95 6.89,20.85 L17.4562847,10.2933914 C17.6300744,10.1200486 17.6494989,9.85064903 17.514594,9.65572084 L17.4564466,9.58644661 L17.4564466,9.58644661 L14.4135534,6.54355339 C14.2182912,6.34829124 13.9017088,6.34829124 13.7064466,6.54355339 L3.15,17.1 C3.05,17.2 3,17.32 3,17.46 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.4835534,4.76644661 C15.2882912,4.96170876 15.2882912,5.27829124 15.4835534,5.47355339 L18.5264466,8.51644661 C18.7217088,8.71170876 19.0382912,8.71170876 19.2335534,8.51644661 L20.71,7.04 Z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- center -->
      <div class="relative flex flex-col flex-1">
        <div class="z-20 flex flex-grow-0 flex-shrink-0 w-full pr-3 bg-white border-b">
          <div class="w-12 h-12 mx-4 my-2 bg-blue-500 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer"
          style="background-image: url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50)">
          </div>
          <div class="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer">
            <div class="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap">Karen</div>
            <div class="overflow-hidden text-sm font-medium leading-tight text-gray-600 whitespace-no-wrap">Online</div>
          </div>
          <div class="relative hidden lg:block w-48 pl-2 my-3 border-l-2 border-blue-500 cursor-pointer">
            <div class="text-base font-medium text-blue-500">Pinned message</div>
            <div class="text-sm font-normal text-gray-800">Today star contest</div>
          </div>
          <button class="flex self-center p-2 ml-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-300">
            <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="nonzero" d="M11,20 L13,20 C13.5522847,20 14,20.4477153 14,21 C14,21.5128358 13.6139598,21.9355072 13.1166211,21.9932723 L13,22 L11,22 C10.4477153,22 10,21.5522847 10,21 C10,20.4871642 10.3860402,20.0644928 10.8833789,20.0067277 L11,20 L13,20 L11,20 Z M3.30352462,2.28241931 C3.6693482,1.92735525 4.23692991,1.908094 4.62462533,2.21893936 L4.71758069,2.30352462 L21.2175807,19.3035246 C21.6022334,19.6998335 21.5927842,20.332928 21.1964754,20.7175807 C20.8306518,21.0726447 20.2630701,21.091906 19.8753747,20.7810606 L19.7824193,20.6964754 L18.127874,18.9919007 L18,18.9999993 L4,18.9999993 C3.23933773,18.9999993 2.77101468,18.1926118 3.11084891,17.5416503 L3.16794971,17.4452998 L5,14.6972244 L5,8.9999993 C5,7.98873702 5.21529462,7.00715088 5.62359521,6.10821117 L3.28241931,3.69647538 C2.89776658,3.3001665 2.90721575,2.66707204 3.30352462,2.28241931 Z M7.00817933,8.71121787 L7,9 L7,14.6972244 C7,15.0356672 6.91413188,15.3676193 6.75167088,15.6624466 L6.66410059,15.8066248 L5.86851709,17 L16.1953186,17 L7.16961011,7.7028948 C7.08210009,8.02986218 7.02771758,8.36725335 7.00817933,8.71121787 Z M12,2 C15.7854517,2 18.8690987,5.00478338 18.995941,8.75935025 L19,9 L19,12 C19,12.5522847 18.5522847,13 18,13 C17.4871642,13 17.0644928,12.6139598 17.0067277,12.1166211 L17,12 L17,9 C17,6.23857625 14.7614237,4 12,4 C11.3902636,4 10.7970241,4.10872043 10.239851,4.31831953 C9.72293204,4.51277572 9.14624852,4.25136798 8.95179232,3.734449 C8.75733613,3.21753002 9.01874387,2.6408465 9.53566285,2.4463903 C10.3171048,2.15242503 11.1488212,2 12,2 Z"/>
            </svg>
          </button>
          <button class="flex self-center p-2 ml-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-300">
            <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"/>
            </svg>
          </button>
          <button type="button" id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true" class="flex hidden lg:block self-center p-2 ml-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-300">
            <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="nonzero" d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"/>
            </svg>
          </button>
          <button aria-haspopup="true" class="p-2 text-gray-700 rounded-full lg:hidden focus:outline-none hover:text-gray-600 hover:bg-gray-200">
            <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill-rule="nonzero" d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"/>
            </svg>
          </button>
        </div>
        <div class="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
          <div class="flex-1 overflow-y-scroll max-w-xl self-center w-full">
            <div class="flex flex-col px-3 py-1 m-auto relative">
              <div class="self-center px-2 py-1 mx-0 my-1 text-sm text-white rounded-tg border border-gray-200 shadow bg-white text-gray-700 rounded-full">Channel was created</div>
              <div class="self-center px-2 py-1 mx-0 my-1 text-sm text-white rounded-tg border border-gray-200 shadow bg-white text-gray-700 rounded-full">May 6</div>
              <div class="w-3/4 self-start my-2">
                <div class="bg-white rounded-lg p-4 text-sm shadow">
                  Don't forget to check on all responsive sizes.
                </div>
              </div>
              <div class="w-3/4 self-end my-2">
                <div class="bg-white rounded-lg p-4 text-sm shadow">
                  Use the buttons above the editor to test on them
                </div>
              </div>
            </div>
          </div>
          <div class="relative flex items-center p-4 overflow-hidden max-w-xl self-center w-full text-gray-600 focus-within:text-gray-400">
            <div class="w-full">
              <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-none">
                  <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill-rule="nonzero" d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"/>
                  </svg>
                </button>
              </span>
                <span class="absolute inset-y-0 right-0 pr-6 flex items-center">
                <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                  <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill-rule="nonzero" d="M6.43800037,12.0002892 L6.13580063,11.9537056 C5.24777712,11.8168182 4.5354688,11.1477159 4.34335422,10.2699825 L2.98281085,4.05392998 C2.89811796,3.66698496 2.94471512,3.2628533 3.11524595,2.90533607 C3.53909521,2.01673772 4.60304421,1.63998415 5.49164255,2.06383341 L22.9496381,10.3910586 C23.3182476,10.5668802 23.6153089,10.8639388 23.7911339,11.2325467 C24.2149912,12.1211412 23.8382472,13.1850936 22.9496527,13.6089509 L5.49168111,21.9363579 C5.13415437,22.1068972 4.73000953,22.1534955 4.34305349,22.0687957 C3.38131558,21.8582835 2.77232686,20.907987 2.9828391,19.946249 L4.34336621,13.7305987 C4.53547362,12.8529444 5.24768451,12.1838819 6.1356181,12.0469283 L6.43800037,12.0002892 Z M5.03153725,4.06023585 L6.29710294,9.84235424 C6.31247211,9.91257291 6.36945677,9.96610109 6.44049865,9.97705209 L11.8982869,10.8183616 C12.5509191,10.9189638 12.9984278,11.5295809 12.8978255,12.182213 C12.818361,12.6977198 12.4138909,13.1022256 11.8983911,13.1817356 L6.44049037,14.0235549 C6.36945568,14.0345112 6.31247881,14.0880362 6.29711022,14.1582485 L5.03153725,19.9399547 L21.6772443,12.0000105 L5.03153725,4.06023585 Z"/>
                  </svg>
                </button>
              </span>
              <input type="search" name="q"
                     class="w-full py-2 pl-10 text-sm text-white bg-white border border-transparent appearance-none rounded-tg focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px"
                     placeholder="Search..." autocomplete="off">
            </div>
          </div>
        </div>
      </div>

      <!-- right -->
      <nav class="right-0 flex flex-col pb-2 bg-white border-l hidden xl:block border-gray-300" style="width: 24rem">
          <div class="flex items-center justify-between w-full p-3">
            <button @click="$emit('update:showRight', true)" class="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200">
              <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="nonzero" d="M5.20970461,5.38710056 L5.29289322,5.29289322 C5.65337718,4.93240926 6.22060824,4.90467972 6.61289944,5.20970461 L6.70710678,5.29289322 L12,10.585 L17.2928932,5.29289322 C17.6834175,4.90236893 18.3165825,4.90236893 18.7071068,5.29289322 C19.0976311,5.68341751 19.0976311,6.31658249 18.7071068,6.70710678 L13.415,12 L18.7071068,17.2928932 C19.0675907,17.6533772 19.0953203,18.2206082 18.7902954,18.6128994 L18.7071068,18.7071068 C18.3466228,19.0675907 17.7793918,19.0953203 17.3871006,18.7902954 L17.2928932,18.7071068 L12,13.415 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 C4.90236893,18.3165825 4.90236893,17.6834175 5.29289322,17.2928932 L10.585,12 L5.29289322,6.70710678 C4.93240926,6.34662282 4.90467972,5.77939176 5.20970461,5.38710056 L5.29289322,5.29289322 L5.20970461,5.38710056 Z"/>
              </svg>
            </button>
            <div class="ml-4 mr-auto text-lg font-medium">Info</div>
            <button type="button" class="p-2 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200">
              <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="nonzero" d="M7.70710678,20.7071068 C7.5195704,20.8946432 7.26521649,21 7,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,17 C3,16.7347835 3.10535684,16.4804296 3.29289322,16.2928932 L16.5857864,3 C17.3257272,2.26005924 18.5012114,2.22111499 19.2869988,2.88316725 L19.4142136,3 L21,4.58578644 C21.7399408,5.3257272 21.778885,6.50121136 21.1168328,7.28699879 L21,7.41421356 L7.70710678,20.7071068 Z M5,17.4142136 L5,19 L6.58578644,19 L16.5857864,9 L15,7.41421356 L5,17.4142136 Z M18,4.41421356 L16.414,5.99921356 L18,7.58521356 L19.5857864,6 L18,4.41421356 Z"/>
              </svg>
            </button>
            <button type="button" class="p-2 ml-1 text-gray-500 rounded-full focus:outline-none hover:text-gray-600 hover:bg-gray-200">
              <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="nonzero" d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"/>
              </svg>
            </button>
          </div>
          <div>
            <div class="flex justify-center mb-4">
              <button type="button" class="content-center block w-32 h-32 p-1 overflow-hidden text-center rounded-full focus:outline-none">
                <img class="content-center object-cover w-full h-full border-2 border-gray-200 rounded-full" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50" alt="">
              </button>
            </div>
            <p class="text-lg font-semibold text-center text-gray-800">Karen J.</p>
            <p class="text-sm font-medium text-center text-blue-500">online</p>
          </div>
          <div class="flex items-center w-full px-3 mt-6 ">
            <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
              <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-rule="nonzero" d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 Z M12,11 C12.5128358,11 12.9355072,11.3860402 12.9932723,11.8833789 L13,12 L13,17 C13,17.5522847 12.5522847,18 12,18 C11.4871642,18 11.0644928,17.6139598 11.0067277,17.1166211 L11,17 L11,12 C11,11.4477153 11.4477153,11 12,11 Z M12,6.5 C12.8284271,6.5 13.5,7.17157288 13.5,8 C13.5,8.82842712 12.8284271,9.5 12,9.5 C11.1715729,9.5 10.5,8.82842712 10.5,8 C10.5,7.17157288 11.1715729,6.5 12,6.5 Z"/>
              </svg>
            </div>
            <div class="ml-4">
              <div class="mr-auto text-sm font-semibold text-gray-800">25 y.o traveler</div>
              <div class="mr-auto mt-1 text-sm font-semibold leading-none text-gray-600">Bio</div>
            </div>
          </div>
          <div>
            <div class="flex items-center w-full px-3 mt-4 ">
              <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
                <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill-rule="nonzero" d="M12,1 C18.0751322,1 23,5.92486775 23,12 C23,15.2534621 21.3575416,17.4078375 19.0415827,17.5042247 C17.5448049,17.5665187 16.2418767,16.729824 15.5433162,15.3661459 C14.6550197,16.3039294 13.3958222,16.8888889 12,16.8888889 C9.29994122,16.8888889 7.11111111,14.7000588 7.11111111,12 C7.11111111,9.29994122 9.29994122,7.11111111 12,7.11111111 C13.1311057,7.11111111 14.1724943,7.49523561 15.000833,8.14015176 L15,8 C15,7.44771525 15.4477153,7 16,7 C16.5128358,7 16.9355072,7.38604019 16.9932723,7.88337887 L17,8 L17,13 C17,14.5880914 17.9057778,15.5497641 18.9584173,15.5059546 C20.0913022,15.4588053 21,14.2668872 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 C12.7993259,21 13.583948,20.8960375 14.3403366,20.6929627 C14.8737319,20.549757 15.4222254,20.8660682 15.5654311,21.3994635 C15.7086368,21.9328588 15.3923256,22.4813523 14.8589303,22.624558 C13.9337959,22.8729377 12.9748353,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 Z M12,9.11111111 C10.4045107,9.11111111 9.11111111,10.4045107 9.11111111,12 C9.11111111,13.5954893 10.4045107,14.8888889 12,14.8888889 C13.5954893,14.8888889 14.8888889,13.5954893 14.8888889,12 C14.8888889,10.4045107 13.5954893,9.11111111 12,9.11111111 Z"/>
                </svg>
              </div>
              <div>
                <div class="ml-4 mr-auto text-sm font-semibold text-gray-800">@karen</div>
                <div class="ml-4 mt-1 mr-auto text-sm font-semibold leading-none text-gray-600">Username</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center w-full px-3 mt-4 ">
              <div class="px-2 text-gray-500 rounded-full hover:text-gray-600">
                <svg class="w-6 h-6 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill-rule="nonzero" d="M7.23584729,12.5662193 L9.59157842,9.95106331 C10.1552393,9.38932119 10.4467339,8.55220389 10.3497484,7.70703944 L10.091414,5.46219074 C9.9242391,4.0550699 8.7398983,3 7.3255142,3 L5.78463506,3 C4.20042472,3 2.90721409,4.32400855 3.00518508,5.90554894 C3.50830004,14.0123888 9.98998589,20.491257 18.0941879,20.9948033 C19.6759108,21.0927867 21.0001332,19.7995671 21.0001332,18.2153552 L21.0001332,16.6744677 C21.013787,15.2731573 19.9556245,14.0848636 18.5502962,13.917893 L16.2834192,13.6590644 C15.4388246,13.562143 14.601708,13.8536405 14.0021558,14.453196 L11.4339669,16.7640867 C9.87568608,15.7549411 8.52871768,14.4473269 7.47401517,12.9220367 L7.23584729,12.5662193 Z M13.2949234,17.779617 L15.3784355,15.9034093 C15.5842713,15.6995067 15.8165698,15.6186166 16.0559758,15.6460896 L18.3188767,15.9044538 C18.7112475,15.951083 19.003823,16.2796389 19.0000842,16.6646639 L19,18.2153552 C19,18.6635336 18.6307181,19.0242061 18.218031,18.9986413 C16.4722141,18.8901667 14.8122275,18.4649122 13.2949234,17.779617 Z M6.220439,10.7056813 C5.53504105,9.18831553 5.10972952,7.52810348 5.00135169,5.7817795 C4.97579551,5.36922745 5.33643432,5 5.78463506,5 L7.3255142,5 C7.72533936,5 8.0576092,5.29600256 8.10495475,5.6944964 L8.36282472,7.93536896 C8.39026139,8.17446174 8.30937042,8.40676528 8.14147101,8.5746656 L6.220439,10.7056813 Z"/>
                </svg>
              </div>
              <div class="ml-4">
                <div class="mr-auto text-sm font-semibold text-gray-800">+1 38594 38538</div>
                <div class="mt-1 mr-auto text-sm font-semibold leading-none text-gray-600">Phone</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center w-full px-3 mt-4 mb-2">
              <div class="px-2 text-gray-500 cursor-pointer">
                <svg class="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill-rule="nonzero" d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M17.2928932,7.29289322 L10,14.5857864 L6.70710678,11.2928932 C6.31658249,10.9023689 5.68341751,10.9023689 5.29289322,11.2928932 C4.90236893,11.6834175 4.90236893,12.3165825 5.29289322,12.7071068 L9.29289322,16.7071068 C9.68341751,17.0976311 10.3165825,17.0976311 10.7071068,16.7071068 L18.7071068,8.70710678 C19.0976311,8.31658249 19.0976311,7.68341751 18.7071068,7.29289322 C18.3165825,6.90236893 17.6834175,6.90236893 17.2928932,7.29289322 Z"/>
                </svg>
              </div>
              <div class="ml-4">
                <div class="mr-auto text-sm font-semibold text-gray-800">Notification</div>
                <div class="mr-auto mt-1 text-sm font-semibold leading-none text-gray-600">Enabled</div>
              </div>
            </div>
          </div>
        <ul class="flex flex-row justify-around items-center px-3 mb-1 list-none border-b select-none">
          <li class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
            <a class="block py-3 text-xs font-bold leading-normal uppercase text-blue-500 border-b-4 border-blue-500">
              Media
            </a>
          </li>
          <li class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
            <a class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent">
              Docs
            </a>
          </li>
          <li class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
            <a class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent">
              Links
            </a>
          </li>
          <li class="flex-auto px-4 mx-1 -mb-px text-center rounded-t-lg cursor-pointer last:mr-0 hover:bg-gray-200">
            <a class="block py-3 text-xs font-bold leading-normal uppercase border-b-4 border-transparent">
              Audio
            </a>
          </li>
        </ul>
<!--        </div>-->

        <!-- start img gallery -->
      </nav>
    </div>
  </div>
</template>
