<template>
  <nav class="bg-slate-50 border-b-2">
    <div class="mx-auto max-w-full px-4">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <button
              @click="activeMenu = !activeMenu"
              class="inline-flex border border-slate-400 items-center justify-center rounded-md p-2 mr-4 text-gray-400 focus:outline-none"
            >
              <svg
                class="block h-4 w-4"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button class="justify-center text-center cursor-default">
              <svg
                class="mx-auto h-8 w-8 fill-current text-gray-700"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </button>
            <div class="flex">
              <a class="mx-3" href="#">tailwindlabs / tailwindcss</a>
            </div>
          </div>
        </div>

        <div class="hidden md:block">
          <div class="ml-4 flex items-center justify-center md:ml-6">
            <Search></Search>
            <div
              class="relative flex items-center w-full pl-2 overflow-hidden text-gray-600 focus-within:text-gray-400"
            >
              <span class="absolute inset-y-0 left-0 flex items-center pl-4">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-none"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M9.5,3 C13.0898509,3 16,5.91014913 16,9.5 C16,10.9337106 15.5358211,12.2590065 14.7495478,13.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3466228,20.0675907 18.7793918,20.0953203 18.3871006,19.7902954 L18.2928932,19.7071068 L13.3338028,14.7495478 C12.2590065,15.5358211 10.9337106,16 9.5,16 C5.91014913,16 3,13.0898509 3,9.5 C3,5.91014913 5.91014913,3 9.5,3 Z M9.5,5 C7.01471863,5 5,7.01471863 5,9.5 C5,11.9852814 7.01471863,14 9.5,14 C11.9852814,14 14,11.9852814 14,9.5 C14,7.01471863 11.9852814,5 9.5,5 Z"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <button
              class="relative rounded-full border-2 border-transparent p-1 text-gray-400 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
              aria-label="Notifications"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div
                class="absolute top-0 right-0 mt-1 mr-1 rounded-full border-2 border-transparent bg-gray-800"
              >
                <div class="h-2 w-2 rounded-full bg-blue-600"></div>
              </div>
            </button>
            <div class="relative ml-3">
              <div class="flex inline-block">
                <button
                  class="focus:shadow-solid flex max-w-xs items-center rounded-full h-8 w-8 border border-gray-700 text-sm text-white focus:outline-none"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1579952880875-9fb85efa75d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            class="relative rounded-full border-2 border-transparent p-1 text-gray-400 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
            aria-label="Notifications"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <div
              class="absolute top-0 right-0 mt-1 mr-1 rounded-full border-2 border-transparent bg-gray-800"
            >
              <div class="h-2 w-2 rounded-full bg-blue-600"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div class="mt-4 overflow-x-hidden px-6 lg:px-10">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div class="flex items-center">
        <svg
          class="mr-2 h-4 w-4 fill-current text-gray-600"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <div
          class="cursor-pointer text-xl font-normal text-blue-700 hover:underline"
        >
          tailwindlabs
        </div>
        <span class="mx-1 text-xl font-medium text-gray-800">/</span>
        <div
          class="cursor-pointer text-xl font-semibold text-blue-700 hover:underline"
        >
          tailwindcss
        </div>
      </div>
      <div class="mt-4 mb-2 md:hidden">
        <span class="text-sm">
          A utility-first CSS framework for rapid UI development.
        </span>
        <div class="my-2">
          <a
            class="mb-1 flex items-center text-sm font-semibold text-blue-600 hover:underline"
            href="#"
          >
            <svg
              class="mr-2 h-4 w-4 text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            tailwindcss.com/</a
          >
          <a
            href=""
            class="mb-1 flex items-center text-sm font-medium text-gray-700 hover:underline"
          >
            <svg
              height="16"
              class="mr-2 h-4 w-4 fill-current text-gray-700"
              mr="2"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"
              ></path>
            </svg>
            MIT License
          </a>
          <div class="flex">
            <a
              href=""
              class="mb-1 flex items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline"
            >
              <svg
                class="mr-2 h-4 w-4 fill-current"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
              24.1k stars
            </a>
            <a
              href=""
              class="mb-1 ml-2 flex items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline"
            >
              <svg
                class="mr-1 h-4 w-4 fill-current"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                ></path>
              </svg>
              1.1k forks
            </a>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:flex md:justify-between">
        <div class="flex rounded-lg border text-center md:border-none">
          <div
            class="flex cursor-pointer items-center border-gray-400 bg-gray-200 px-2 py-1 hover:bg-gray-300 md:rounded-l-lg md:border-t md:border-l md:border-b"
          >
            <svg
              class="mr-1 hidden h-4 w-4 text-gray-700 md:block"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            <span class="self-center text-sm font-medium">Watch</span>
            <svg
              class="ml-1 h-3 w-3 fill-current text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <div
            class="cursor-pointer rounded-r-lg border border-t border-gray-400 px-2 py-1 text-sm font-semibold hover:text-blue-600"
          >
            423
          </div>
        </div>
        <div class="mx-4 flex">
          <div
            class="flex cursor-pointer items-center rounded-l-lg border-t border-b border-l border-gray-400 bg-gray-200 px-2 py-1 hover:bg-gray-300"
          >
            <svg
              class="mr-1 h-4 w-4 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <span class="self-center text-sm font-medium">Unstar</span>
          </div>
          <div
            class="cursor-pointer rounded-r-lg border border-t border-gray-400 px-2 py-1 text-sm font-semibold hover:text-blue-600"
          >
            24.1k
          </div>
        </div>
        <div class="flex">
          <div
            class="flex cursor-pointer items-center rounded-l-lg border-t border-b border-l border-gray-400 bg-gray-200 px-2 py-1 hover:bg-gray-200"
          >
            <svg
              class="mr-1 h-4 w-4 text-gray-700"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
              ></path>
            </svg>
            <span class="self-center text-sm font-medium">Fork</span>
          </div>
          <div
            class="cursor-pointer rounded-r-lg border border-t border-gray-400 px-2 py-1 text-sm font-semibold hover:text-blue-600"
          >
            1.1k
          </div>
        </div>
      </div>
      <div class="flex justify-between md:hidden">
        <button
          type="button"
          class="mr-2 flex w-1/2 justify-center rounded-lg border border-gray-400 bg-gray-100 py-1 text-center hover:bg-gray-200 focus:outline-none"
        >
          <div class="flex items-center px-2">
            <svg
              class="mr-1 h-4 w-4 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
            <span class="self-center text-sm font-medium">Unstar</span>
          </div>
        </button>
        <button
          type="button"
          class="ml-2 flex w-1/2 justify-center rounded-lg border border-gray-400 bg-gray-100 py-1 text-center hover:bg-gray-300 focus:outline-none"
        >
          <div class="flex items-center px-2">
            <svg
              class="mr-1 h-4 w-4 text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            <span class="self-center text-sm font-medium">Watch</span>
            <svg
              class="ml-1 h-3 w-3 fill-current text-gray-700"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
    <div
      class="-mx-10 mt-6 flex select-none items-center justify-between border-b px-10 md:mt-4"
    >
      <div class="flex">
        <router-link
          :class="{ 'border-orange-400': 'true', '': 'border-transparent' }"
          to="code"
          class="flex cursor-pointer items-center border-b-2 px-4 pb-2 text-sm"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Code
        </router-link>
        <router-link
          to="issues"
          class="flex cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Issues
          <span
            class="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 text-xs"
            >129</span
          >
        </router-link>
        <router-link
          to="pulls"
          class="flex cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300"
        >
          <svg
            class="mr-1 hidden h-5 w-5 fill-current text-gray-600 md:block"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          Pull requests
          <span
            class="ml-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 text-xs"
            >38</span
          >
        </router-link>
        <router-link
          to="discussions"
          class="flex hidden cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300 md:block md:flex"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            ></path>
          </svg>
          Discussions
        </router-link>
        <router-link
          to="actions"
          class="flex hidden cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300 md:block md:flex"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Actions
        </router-link>
        <router-link
          to="security"
          class="flex hidden cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300 lg:block lg:flex"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            ></path>
          </svg>
          Security
        </router-link>
        <router-link
          to="insights"
          class="flex hidden cursor-pointer items-center border-b-2 border-transparent px-4 pb-2 text-sm hover:border-gray-300 lg:block lg:flex"
        >
          <svg
            class="mr-1 hidden h-5 w-5 text-gray-700 md:block"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          Insights
        </router-link>
      </div>
      <div class="flex cursor-pointer items-start pb-2 md:hidden">
        <svg
          class="h-5 w-5 fill-current text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="container mx-auto mt-8 pb-10">
      <router-view></router-view>
    </div>
  </div>
  <TransitionRoot as="div" :show="activeMenu">
    <Dialog as="div" class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <DialogOverlay class="absolute inset-0" />
        <div
          class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10"
        >
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <div class="pointer-events-auto w-screen max-w-sm">
              <div
                class="flex h-full flex-col overflow-hidden bg-white py-4 shadow-xl rounded-xl"
              >
                <div class="px-4">
                  <div class="flex items-start justify-between">
                    <button class="justify-center text-center cursor-default">
                      <svg
                        class="mx-auto h-8 w-8 fill-current text-gray-700"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                      </svg>
                    </button>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="rounded-md border bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                        @click="activeMenu = !activeMenu"
                      >
                        <span class="sr-only">Close panel</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex-1">
                  <!-- Replace with your content -->
                  <nav class="mt-4 flex-1 px-3 bg-white space-y-1">
                    <a
                      v-for="item in navigation"
                      :key="item.name"
                      :href="item.href"
                      :class="[
                        item.current
                          ? 'bg-gray-100 text-slate-900'
                          : 'text-gray-800 hover:bg-gray-50 hover:text-slate-900',
                        'group flex items-center px-2 py-[5px] text-sm font-medium rounded-md',
                      ]"
                    >
                      <component
                        :is="item.icon"
                        :class="[
                          item.current
                            ? 'text-gray-500'
                            : 'text-gray-700 group-hover:text-gray-800',
                          'mr-2 flex-shrink-0 h-5 w-5',
                        ]"
                        aria-hidden="true"
                      />
                      {{ item.name }}
                    </a>
                  </nav>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  ArrowUpOnSquareStackIcon,
  BugAntIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  ServerStackIcon,
  SwatchIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import Search from '../components/github/Search.vue';

const activeMenu = ref(false);

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Issues", href: "#", icon: BugAntIcon, current: false },
  {
    name: "Pull requests",
    href: "#",
    icon: ArrowUpOnSquareStackIcon,
    current: false,
  },
  { name: "Projects", href: "#", icon: SwatchIcon, current: false },
  {
    name: "Discussions",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  { name: "Codespaces", href: "#", icon: ServerStackIcon, current: false },
];
</script>

<style scoped></style>
