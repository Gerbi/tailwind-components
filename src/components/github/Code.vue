<template>
  <div>
    <div class="md:flex">
      <div class="mr-4 w-full md:w-3/4">
        <div class="flex justify-between">
          <button
            type="button"
            class="flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none"
          >
            <svg
              class="mr-1 h-5 w-5 fill-current text-gray-600"
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
            <span class="self-center text-sm font-medium">master</span>
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
          </button>
          <div class="flex hidden md:block md:flex">
            <button
              type="button"
              class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none"
            >
              <span class="self-center text-sm font-medium">Go to file</span>
            </button>
            <button
              type="button"
              class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-4 py-1 text-center hover:bg-gray-300 focus:outline-none"
            >
              <span class="self-center text-sm font-medium">Add file</span>
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
            </button>
            <button
              type="button"
              class="ml-2 flex items-center justify-center rounded-lg border border-green-700 bg-green-600 px-4 py-1 text-center text-white hover:bg-green-700 focus:outline-none"
            >
              <svg
                class="mr-1 h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <span class="self-center text-sm font-medium">Clone</span>
              <svg
                class="ml-1 h-3 w-3 fill-current"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <button
            type="button"
            class="ml-2 flex items-center justify-center rounded-lg border border-gray-400 bg-gray-100 px-6 py-1 text-center hover:bg-gray-300 focus:outline-none md:hidden"
          >
            <svg
              class="h-5 w-5 fill-current text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="my-4">
          <div
            class="flex justify-between rounded-t-lg border border-gray-200 bg-gray-100 px-4 py-3"
          >
            <div class="flex items-center">
              <img
                class="mr-2 h-6 w-6 rounded-full"
                src="https://avatars.githubusercontent.com/u/4323180?s=48&v=4"
                alt=""
              />
              <p class="text-sm font-semibold">adanwathan</p>
              <a
                href="#"
                class="ml-2 text-sm text-gray-600 hover:text-blue-400 hover:underline"
                >Update LICENSE</a
              >
            </div>
            <div class="hidden md:block md:flex">
              <a
                href=""
                class="mb-1 flex items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline"
              >
                <svg
                  class="mr-2 h-4 w-4 fill-current"
                  height="16"
                  text="gray"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                  ></path>
                </svg>
                4,485 commits
              </a>
              <a
                href=""
                class="mb-1 ml-4 flex hidden items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline lg:block lg:flex"
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
                22 branches
              </a>
              <a
                href=""
                class="mb-1 ml-4 hidden items-center text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline lg:block lg:flex"
              >
                <svg
                  class="mr-1 h-4 w-4"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
                76 tags
              </a>
            </div>
          </div>
          <div
            class="hidden rounded-b-lg border-b border-l border-r text-center md:block"
          >
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  .github
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline"
              >
                Drop fs-extra version to..
              </p>
              <p class="w-1/4 text-right">2 months ago</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  dist
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-600 hover:underline"
              >
                Add empty .npmignore so dist files are distributed with releases
              </p>
              <p class="ml-2 w-1/4 text-right">3 years ago</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  scripts
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-600 hover:underline"
              >
                Don't generate color opacity code in color plugins if not
                necessary
              </p>
              <p class="ml-2 w-1/4 text-right">3 months ago</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  src
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-600 hover:underline"
              >
                Throw if contains a class
              </p>
              <p class="ml-2 w-1/4 text-right">last months</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  LICENSE
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline"
              >
                Avoid updating license every year
              </p>
              <p class="ml-2 w-1/4 text-right">3 years ago</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  README.md
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline"
              >
                Replace logo in README
              </p>
              <p class="ml-2 w-1/4 text-right">2 months ago</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  package.json
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline"
              >
                1.4.6
              </p>
              <p class="ml-2 w-1/4 text-right">last month</p>
            </div>
            <div class="flex px-4 py-2 text-sm hover:bg-gray-100">
              <div class="flex w-1/4">
                <svg
                  class="h-6 w-6 text-blue-400"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  class="ml-2 cursor-pointer hover:text-blue-500 hover:underline"
                >
                  tailwind.css
                </p>
              </div>
              <p
                class="w-1/2 cursor-pointer text-left hover:text-blue-500 hover:underline"
              >
                Undo accidental changes to CDN build process
              </p>
              <p class="ml-2 w-1/4 text-right">6 months ago</p>
            </div>
          </div>
          <div
            class="rounded-b-lg border-b border-l border-r py-2 text-center md:hidden"
          >
            <p class="cursor-pointer text-blue-600 hover:underline">
              View code
            </p>
          </div>
        </div>
        <div class="border-b py-6 md:rounded-lg md:border md:px-8">
          <div class="font-semibold text-black">README.md</div>
          <div class="my-6">
            <img
              class="w-64"
              src="https://camo.githubusercontent.com/87d7034892fd41dc88f3606bb44b853f87cd2c51/68747470733a2f2f7265666163746f72696e6775692e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f7461696c77696e642d6c6f676f2e737667"
              alt=""
            />
            <p>
              A utility-first CSS framework for rapidly building custom user
              interfaces.
            </p>
            <div class="flex">
              <div class="my-4 mr-2 flex items-center">
                <div
                  class="flex cursor-pointer items-center rounded-l-md bg-gray-800 px-2 py-1 leading-none text-white"
                >
                  <span class="self-center text-xs font-medium">build</span>
                </div>
                <div
                  class="cursor-pointer rounded-r-md bg-green-500 px-2 py-1 text-xs font-semibold leading-none text-white"
                >
                  passing
                </div>
              </div>
              <div class="my-4 mr-2 flex items-center">
                <div
                  class="flex cursor-pointer items-center rounded-l-md bg-gray-800 px-2 py-1 leading-none text-white"
                >
                  <span class="self-center text-xs font-medium">downloads</span>
                </div>
                <div
                  class="cursor-pointer rounded-r-md bg-green-500 px-2 py-1 text-xs font-semibold leading-none text-white"
                >
                  8.7M
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="mb-6">
            <div
              class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700"
            >
              <svg
                class="mr-1 h-4 w-4 cursor-pointer"
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
              <p class="text-black">Documentation</p>
            </div>
            <hr />
            <div class="my-4">
              For full documentation, visit
              <a href="#" class="text-blue-600 hover:underline"
                >tailwindcss.com</a
              >
            </div>
          </div>
          <div class="mb-6">
            <div
              class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700"
            >
              <svg
                class="mr-1 h-4 w-4 cursor-pointer"
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
              <p class="text-black">Community</p>
            </div>
            <hr />
            <div class="my-4">
              For help, discussion about best practices, or any other
              conversation that would benefit from being searchable:
            </div>
            <a href="#" class="my-4 text-blue-600 hover:underline"
              >Discuss Tailwind CSS on GitHub</a
            >
            <div class="my-4">
              For casual chit-chat with others using the framework:
            </div>
            <a href="#" class="my-4 text-blue-600 hover:underline"
              >Join the Tailwind CSS Discord Server</a
            >
          </div>
          <div class="mb-6">
            <div
              class="-mx-4 flex items-center pb-2 text-lg font-bold leading-normal text-transparent hover:text-gray-700"
            >
              <svg
                class="mr-1 h-4 w-4 cursor-pointer"
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
              <p class="text-black">Contributing</p>
            </div>
            <hr />
            <div class="my-4">
              If you're interested in contributing to Tailwind CSS, please read
              our
              <a href="#" class="text-blue-600 hover:underline"
                >contributing docs</a
              >
              <span class="font-semibold text-black"
                >before submitting a pull request.</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="ml-4 md:w-1/4">
        <div class="hidden md:block">
          <p class="text-base font-semibold text-black">About</p>
          <div class="mt-4 border-b pb-2">
            <span class="text-sm lg:text-base">
              A utility-first CSS framework for rapid UI development.
            </span>
            <div class="my-4">
              <a
                class="mb-2 flex items-center text-base font-semibold text-blue-600 hover:underline"
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
              <div class="my-4 flex flex-wrap gap-2">
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >tailwindcss</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >css</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >css-framework</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >postcss</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >functional-css</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >utility-classes</a
                >
                <a
                  href="#"
                  class="rounded-full bg-blue-100 px-2 py-1 text-xs leading-none text-blue-600 hover:bg-blue-200"
                  >responsive</a
                >
              </div>
              <a
                href=""
                class="mb-2 flex items-center text-base font-medium text-gray-700 hover:underline"
              >
                <svg
                  class="mr-2 h-4 w-4 fill-current text-gray-700"
                  height="16"
                  mr="2"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                Readme
              </a>
              <a
                href=""
                class="mb-2 flex items-center text-base font-medium text-gray-700 hover:underline"
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
            </div>
          </div>
        </div>
        <div class="-mx-10 border-b px-6 py-6 md:mx-0 md:px-0">
          <p class="text-base font-semibold text-black">Latest release</p>
          <div class="mt-4 flex text-sm font-semibold text-black">
            <svg
              class="mt-1 mr-2 h-4 w-4 text-green-600"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            <div>
              v1.4.6 <br />
              <span class="text-xs text-gray-600">on May 8</span>
            </div>
          </div>
          <div class="mt-4 text-xs text-blue-600">+ 75 releases</div>
        </div>
        <div class="-mx-10 border-b px-6 py-6 md:mx-0 md:px-0">
          <p class="text-base font-semibold text-black">
            User by
            <span
              class="ml-1 h-4 w-4 rounded-full bg-gray-300 px-2 py-1 text-xs"
              >5,000 +</span
            >
          </p>
          <div
            class="mt-4 flex cursor-pointer items-center overflow-hidden text-blue-600 hover:underline"
          >
            <img
              class="inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1553521041-d168abd31de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
              alt=""
            />
            <img
              class="-ml-2 inline-block h-10 w-10 rounded-full border-2 border-gray-400 object-cover text-white shadow-sm"
              src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80"
              alt=""
            />
            <p class="pl-2 text-sm font-medium text-blue-600">+ 49,635</p>
          </div>
        </div>
        <div class="-mx-10 border-b px-6 py-6 md:mx-0 md:px-0">
          <p class="text-base font-semibold text-black">
            Contributors
            <span
              class="ml-1 h-4 w-4 rounded-full bg-gray-300 px-2 py-1 text-xs"
              >109</span
            >
          </p>
          <div class="-mx-2 mt-4 flex flex-wrap items-center overflow-hidden">
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1553521041-d168abd31de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              class="mx-2 mt-2 h-10 w-10 cursor-pointer rounded-full border-2 border-gray-400 object-cover text-white shadow-sm md:mt-0"
              src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1240&q=80"
              alt=""
            />
          </div>
          <p class="pt-2 text-xs font-medium text-blue-700 hover:underline">
            + 98 contributors
          </p>
        </div>
        <div class="-mx-10 border-b px-6 py-6 md:mx-0 md:px-0">
          <p class="text-base font-semibold text-black">Languages</p>
          <div class="mt-4 w-full rounded-full bg-yellow-500 shadow">
            <div
              class="w-11/12 rounded-full bg-purple-800 py-1 text-center text-xs leading-none text-white"
            ></div>
          </div>
          <div class="mt-4 flex">
            <div class="flex items-center text-sm">
              <div class="mr-2 h-2 w-2 rounded-full bg-purple-800"></div>
              CSS 94.1 %
            </div>
            <div class="ml-4 flex items-center text-sm">
              <div class="mr-2 h-2 w-2 rounded-full bg-yellow-500"></div>
              Javascript 5.9%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <div class="mx-auto hidden w-full px-8 md:container md:block">
        <div class="items-center justify-between border-t py-8 md:flex">
          <div
            class="flex justify-start justify-between text-xs md:mt-0 md:w-2/5"
          >
            <div class="mr-4 text-gray-600">&copy; 2020 GitHub, Inc.</div>
            <div class="mr-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Terms
              </a>
            </div>
            <div class="mr-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Privacy
              </a>
            </div>
            <div class="mr-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Security
              </a>
            </div>
            <div class="mr-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Status
              </a>
            </div>
            <div class="mr-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Help
              </a>
            </div>
          </div>
          <div class="hidden w-1/5 justify-center text-center md:block">
            <svg
              class="mx-auto h-6 w-6 cursor-pointer fill-current text-gray-500 hover:text-gray-600"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </div>
          <div
            class="mt-2 flex justify-end justify-between text-right text-xs md:mt-0 md:w-2/5"
          >
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Contact GitHub
              </a>
            </div>
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Pricing
              </a>
            </div>
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Api
              </a>
            </div>
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Training
              </a>
            </div>
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                Blog
              </a>
            </div>
            <div class="ml-4">
              <a
                href="#"
                class="text-blue-600 hover:underline focus:outline-none"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-12 border-t border-gray-200 pt-8 md:hidden">
      <p class="text-base leading-6 text-gray-600 xl:text-center">
        © 2020 GitHub, Inc.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Code",
};
</script>

<style scoped></style>
