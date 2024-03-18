<template>
  <div class="flex">
      <button
          @click="open = true"
          type="button"
          class="cursor-default sm:flex items-center w-72 text-left space-x-3 px-4 h-10 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 shadow-sm rounded-lg text-slate-500"
          >
          <MagnifyingGlassIcon class="flex-none text slate-500 h-4 w-4" />
          <span class="flex-auto text-sm">Search or jump to...</span
              ><span class="font-sans rounded-md border py-1 px-2 font-semibold text-xs"
          ><abbr title="Control" class="no-underline">/ </abbr>
      </span>
      </button>
  </div>

  <TransitionRoot as="template" :show="open">
      <Dialog
          as="div"
          class="fixed z-10 inset-0 overflow-y-auto"
          @close="open = false"
          >
          <div
              class="flex min-h-screen text-center md:block md:px-2 lg:px-4"
              style="font-size: 0"
              >
              <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                  >
                  <DialogOverlay
                      class="hidden fixed inset-0 bg-gray-500 bg-opacity-95 transition-opacity md:block"
                      />
              </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
              <span
                  class="hidden md:inline-block md:align-middle md:h-screen"
                  aria-hidden="true"
                  >&#8203;</span
                  >
              <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  enter-to="opacity-100 translate-y-0 md:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 md:scale-100"
                  leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                  >
                  <div
                      class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 mt-1 mb-4 md:align-top lg:max-w-6xl"
                      >
                      <div
                          class="w-full relative flex items-start bg-white rounded-lg h-96 px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                          >
                          <div
                              class="relative cursor-default flex items-center w-full pl-2 overflow-hidden text-gray-600"
                              >
                              <span class="absolute inset-y-0 left-0 flex items-center pl-4">
                                  <button
                                      type="submit"
                                      class="p-1 focus:outline-none cursor-default focus:shadow-none"
                                      >
                                      <MagnifyingGlassIcon
                                          class="flex-none text slate-500 h-6 w-4"
                                          />
                                  </button>
                              </span>
                              <input
                                  type="search"
                                  name="q"
                                  class="w-full py-2 pl-8 text-sm text-white focus:outline-none rounded-lg bg-transparent border border-slate-400 appearance-none focus:ring-slate-300 focus:border-slate-400"
                                  placeholder="Search..."
                                  autocomplete="off"
                                  />
                              <span class="absolute inset-y-0 right-0 flex items-center px-2">
                                  <button
                                      type="submit"
                                      class="p-1 focus:outline-none bg-gray-600 rounded-full focus:shadow-none"
                                      @click="open = false"
                                      >
                                      <XMarkIcon class="h-3 w-3 text-white" />
                                  </button>
                              </span>
                          </div>
                      </div>
                  </div>
              </TransitionChild>
          </div>
      </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
    Dialog,
    DialogOverlay,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";

const product = {
    name: "Basic Tee 6-Pack ",
    price: "$192",
    rating: 3.9,
    reviewCount: 117,
    href: "#",
    imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
    imageAlt: "Two each of gray, white, and black shirts arranged on table.",
    colors: [
        { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
        { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
        { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
        ],
    sizes: [
        { name: "XXS", inStock: true },
        { name: "XS", inStock: true },
        { name: "S", inStock: true },
        { name: "M", inStock: true },
        { name: "L", inStock: true },
        { name: "XL", inStock: true },
        { name: "XXL", inStock: true },
        { name: "XXXL", inStock: false },
        ],
};

export default {
    components: {
        Dialog,
        DialogOverlay,
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        TransitionChild,
        TransitionRoot,
        StarIcon,
        MagnifyingGlassIcon,
        XMarkIcon,
    },
    setup() {
        const open = ref(false);
        const selectedColor = ref(product.colors[0]);
        const selectedSize = ref(product.sizes[2]);

        return {
            product,
            open,
            selectedColor,
            selectedSize,
        };
    },
};
</script>
