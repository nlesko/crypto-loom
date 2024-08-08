<template>
    <section class="visual-demos py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div class="container mx-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
            <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th v-for="header in headers" :key="header"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-500">
                <tr v-for="item in data.results" :key="item.uuid">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div>
                            <NuxtLink :href="`/prices/${item.uuid}`" class="flex gap-2 content-center">
                                <div class="flex flex-col content-center justy-center">
                                    <img :src="item.iconUrl" class="block h-6 w-6"/>
                                </div>
                                <div class="flex flex-col">
                                    <h5>{{ item.name }}</h5>
                                    <div>{{ item.symbol }}</div>
                                </div>
                            </NuxtLink>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{ item.price }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{ item.marketCap }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        {{ item['24hVolume'] }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div :class="item.change > 0 ? 'bg-green-500 dark:bg-green-800' : 'bg-red-500 dark:bg-red-800'" class="inline-block py-1 px-2">
                            {{ item.change > 0 ? '+' : '' }}{{ item.change }}%
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <div class="py-2">
            <button @click="prevPage" :disabled="page === 1"
                class="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2">Previous</button>
            <button @click="nextPage" :disabled="page === pageCount"
                class="px-4 py-2 bg-gray-300 text-gray-800 rounded">Next</button>
        </div> -->
    </div>
    </section>
    <!-- <div>
        <div v-for="coin in data?.results">
            <div>{{ coin.name }}</div>
            <div>{{ coin.symbol }}</div>
            <div>{{ coin.price }}</div>
        </div>
    </div> -->
</template>
<script setup>
definePageMeta({
    layout: 'public'
});

const url = '/api/coins';
const { data, error } = useFetch(url);
console.log('data', data)
const headers = ref(['Name', 'Price', 'Market Cap', '24h Volume', '24h %']);
// const page = ref(1);
// const perPage = 10;
// const pageCount = computed(() => Math.ceil(data?.results?.length / perPage));
// const paginatedData = computed(() => {
//     const start = (page.value - 1) * perPage;
//     const end = start + perPage;
//     return data?.results?.slice(start, end);
// });

</script>