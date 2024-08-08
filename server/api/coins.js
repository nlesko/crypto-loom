export default defineEventHandler(async (event) => {
    const { coinRankingBaseUrl, coinRankingApiKey } = useRuntimeConfig();

    const { data } = await $fetch(`${coinRankingBaseUrl}/coins`, {
        headers: {
            'x-access-token': coinRankingApiKey,
        },
    });

    const USDDollarFormat = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    });

    let coins = data.coins.map(coin => {
        
        return {
            ...coin,
            price: USDDollarFormat.format(coin.price),
            marketCap: USDDollarFormat.format(coin.marketCap),
            '24hVolume': USDDollarFormat.format(coin['24hVolume'])
        }
    })

    return {
        results: coins,
        total: data.stats.totalCoins,
    };
})