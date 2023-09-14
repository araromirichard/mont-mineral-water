<template>
    <div class="container mx-auto px-6 md:px-8 py-8 bg-slate-700">
        <div class="max-w-4xl mx-auto bg-white rounded shadow p-10">
            <div class="flex items-center justify-between">
                <ApplicationLogo class="h-18 w-auto fill-current text-gray-800" />
                <div class=" inline-block justify-items-end">
                    <h2 class=" font-sans text-4xl text-primary-500 uppercase font-extrabold py-2">Invoice</h2>
                    <p class="text-base">Invoice No: {{ invoice.invoicenumber }}</p>
                </div>
            </div>
            <p class="text-base py-6">
                To:
            </p>
            <p class="font-sans font-bold text-base text-primary-500 py-2">
                Nsyria Nelson
            </p>
            <div class="w-full h-auto flex justify-between">
                <div class=" max-w-xs">
                    <p class="text-xs">
                        No 8, Abelekpe street, <br>
                        beside Accra Mall, <br>
                        East Legon <br>
                        Accra.
                    </p>

                    <p class="text-xs py-3">018 7737 738 8737</p>
                </div>
                <div class="text-xs">
                    <h2>Invoice Date: {{ invoice.date }}</h2>
                    <p>
                        19, Swaniker Street, <br>
                        Abelemkpe <br>
                        Accra
                    </p>
                </div>
            </div>
            <div class="w-full">
                <table class=" min-w-full text-center uppercase">
                    <thead class="bg-primary-400 font-normal px-4">
                        <tr class="h-14 text-white text-base font-normal">
                            <th class=" w-1/12 border border-neutral-300 ">S/N</th>
                            <th class=" w-5/12 border border-neutral-300 ">Items </th>
                            <th class=" w-2/12 border border-neutral-300 ">Qty <br><span class="lowercase text-sm">(per
                                    pack)</span></th>
                            <th class=" w-2/12 border border-neutral-300 ">Price <br><span class=" text-sm">(GHC)</span>
                            </th>
                            <th class=" w-2/12 border border-neutral-300 ">amt <br><span class=" text-sm">(GHC)</span></th>
                        </tr>
                    </thead>
                    <tbody class="bg-neutral-200">
                        <tr v-for="(item, index) in invoice.items" :key="index" class=" h-16 text-primary-100">
                            <td class=" w-1/12 border border-neutral-300 ">{{ index }}</td>
                            <td class=" w-5/12 border border-neutral-300 ">{{ item.name }}</td>
                            <td class=" w-2/12 border border-neutral-300 ">{{ item.quantity }}</td>
                            <td class=" w-2/12 border border-neutral-300 ">{{ item.price }}</td>
                            <td class=" w-2/12 border border-neutral-300 ">{{ item.quantity * item.price }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="grid grid-cols-12 w-full h-auto  text-neutral-50 mt-4 font-semibold">
                <!-- Define the first column -->
                <div class=" col-start-2 col-span-5 bg-primary-400 px-6 py-4 text-center">
                    <p>Total Amount:</p>
                </div>
                <div class=" col-start-7 col-span-4 bg-primary-400 px-6 py-4 text-center">

                </div>
                <!-- Define the second column -->
                <div class="col-span-2 col-start-11 col-end-13 bg-primary-400 px-6 py-4 text-center">
                    <p>{{ calculateTotal() }}</p>
                </div>
            </div>

            <div class="w-full h-auto flex flex-col items-end py-8">
                <!-- Position the signature image to the right -->
                <img src="/signature.png" alt="Signature" class="mr-6 w-44 h-auto"><br>
                <p class="mr-6">Manager’s Signature</p>
            </div>
            <div class="text-center text-xs pt-4">
                <p>Goods purchased are non-refundable</p>
                <p>Thank you</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

const invoice = ref({
    date: '30 April 2024',

    invoicenumber: "#Mo1223",
    dueDate: '2023-09-30',
    items: [
        {
            description: 'Product 1',
            quantity: 2,
            price: 50,
        },
        {
            description: 'Product 2',
            quantity: 3,
            price: 30,
        },
        // Add more items as needed
    ],
});

const calculateTotal = () => {
    return invoice.value.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );
};
</script>
  
<style scoped>
p {
    margin-bottom: 0px;
}

th {
    font-weight: 300;
}
</style>
  