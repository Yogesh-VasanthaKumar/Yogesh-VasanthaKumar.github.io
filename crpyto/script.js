
async function displayTopCoins() {
    const topCoinsSection = document.getElementById("topCoins");
    topCoinsSection.innerHTML = "";

    try {
       
        const apiKey = 'E0AB9B02-A886-4F88-849A-9A9320156CE8';
        const response = await fetch(`https://rest.coinapi.io/v1/assets?apikey=${apiKey}&limit=3&order=market_cap_desc`);
      
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const coinsData = await response.json();

        coinsData.forEach((coin) => {
            //console.log(coin)
            const coinCard = document.createElement("div");
            coinCard.className = "coin-card";
            coinCard.innerHTML = `
                <h3>${coin.name} (${coin.asset_id})</h3>
                <p>Price: $${coin.price_usd}</p>
            `;
            coinCard.addEventListener("click", () => displayCryptoDetails(coin.asset_id));
            topCoinsSection.appendChild(coinCard);
        });
    } catch (error) {
        console.error("Error fetching top coins:", error);
    }
}

async function displayCrypto(assetId) {
    const cryptoDetailsSection = document.getElementById("topCoins");
    cryptoDetailsSection.innerHTML = "";
    
    try {
       
        const apiKey = 'E0AB9B02-A886-4F88-849A-9A9320156CE8';
        const response = await fetch(`https://rest.coinapi.io/v1/assets/${assetId}?apikey=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const cryptoData = await response.json();
        
        cryptoData.forEach((coin) => {
            console.log(coin)
            const coinCard = document.createElement("div");
            coinCard.className = "coin-card";
            coinCard.innerHTML = `
                <h3>${coin.name} (${coin.asset_id})</h3>
                <p>Price: $${coin.price_usd}</p>
            `;
            
            cryptoDetailsSection.appendChild(coinCard);
        });
    } catch (error) {
        console.error("Error fetching crypto details:", error);
    }
}


const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput) {
        
        displayCrypto(searchInput.toLowerCase());
    }
});

async function displayCryptoDetails(assetId) {
    const cryptoDetailsSection = document.getElementById("topCoins");
    cryptoDetailsSection.innerHTML = "";

    try {
        
        const apiKey = 'E0AB9B02-A886-4F88-849A-9A9320156CE8';
        const response = await fetch(`https://rest.coinapi.io/v1/assets/${assetId}?apikey=${apiKey}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const cryptoData = await response.json();
        console.log(cryptoData)
        console.log(cryptoDetailsSection)
        cryptoDetailsSection.innerHTML = `
            <h2>${cryptoData[0].name} (${cryptoData[0].asset_id})</h2>
            <p>Price: $${cryptoData[0].price_usd}</p>
            <p>SymbolCount: $${cryptoData[0].data_symbols_count}</p>
            
        `;
        console.log(cryptoDetailsSection);
    } catch (error) {
        console.error("Error fetching crypto details:", error);
    }
}
displayTopCoins();
