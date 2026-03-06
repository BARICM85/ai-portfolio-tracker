export async function fetchPrice(symbol) {

    try {

        const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

        const res = await fetch(url);

        const data = await res.json();

        if (
            data &&
            data.quoteResponse &&
            data.quoteResponse.result &&
            data.quoteResponse.result.length > 0
        ) {
            return data.quoteResponse.result[0].regularMarketPrice;
        }

        return null;

    } catch (error) {

        console.error("Price fetch error:", error);

        return null;
    }
}


export async function fetchNifty() {

    return await fetchPrice("^NSEI");

}
