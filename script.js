async function fetchTokenData() {
    const tokenAddress = "0x3C5fdF0ee37D62C774025599E3b692D027746E24";
    try {
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
        const data = await response.json();
        const pair = data.pairs[0];

        document.getElementById('marketCap').textContent = `Market Cap: $${Math.round(pair.marketCap).toLocaleString()} - Bubble Kings rule!`;
        document.getElementById('price').textContent = `Price: $${pair.priceUsd} - Cheap as a meme!`;
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        document.getElementById('marketCap').textContent = "Market Cap: Bubble popped!";
        document.getElementById('price').textContent = "Price: Still bubbling...";
    }
}

fetchTokenData();
setInterval(fetchTokenData, 10000);
