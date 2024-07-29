export default defineEventHandler(async (event) => {
    const { coinRankingBaseUrl, coinRankingApiKey } = useRuntimeConfig();

    const { data } = await $fetch(`${coinRankingBaseUrl}/coins`, {
        headers: {
            'x-access-token': coinRankingApiKey,
        },
    });

    return {
        results: data.coins,
        total: data.stats.totalCoins,
    };
})