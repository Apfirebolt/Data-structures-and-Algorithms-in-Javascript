<template>
  <div class="min-h-screen bg-info flex items-center justify-center">
    <div class="max-w-2xl bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-4xl font-bold text-primary mb-4">
        Array Sample Questions
      </h1>
      <p class="text-dark leading-relaxed mb-4">
        Practice and improve your understanding of arrays with these sample
        questions:
      </p>
      <ul class="list-disc pl-6 mb-4 text-dark">
        <li>Find the maximum and minimum element in an array.</li>
        <li>Reverse an array in place.</li>
        <li>Find the "Kth" largest element in an array.</li>
        <li>Remove duplicates from a sorted array.</li>
        <li>Find the subarray with the maximum sum (Kadane’s Algorithm).</li>
      </ul>
      <button
        class="bg-primary text-white px-4 py-2 rounded hover:bg-green-700"
        @click="openModal"
      >
        Try More Questions
      </button>
    </div>
    <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>

                <textarea
                  v-model="inputValue"
                  placeholder="Enter your answer"
                  class="mt-4 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Submit!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);
const inputValue = ref("");

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

function closeModal() {
  isOpen.value = false;
  // check if inputValue is not empty then convert it to an array of integers
  if (inputValue.value.trim() !== "") {
    const inputArray = inputValue.value
      .split(" ")
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));
    const sortedArray = bubbleSort(inputArray);
    console.log("Sorted Array:", sortedArray);

    // print sorted array in the console
    alert(`Sorted Array: ${sortedArray.join(", ")}`);
    inputValue.value = ""; // clear the input field
  }
}
function openModal() {
  isOpen.value = true;
}
</script>
