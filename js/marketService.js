export async function fetchMarketData(symbol) {

    const url =
    "https://query1.finance.yahoo.com/v8/finance/chart/" + symbol;

    try {

        const res = await fetch(url);
        const data = await res.json();

        const price =
        data.chart.result[0].meta.regularMarketPrice;

        const prev =
        data.chart.result[0].meta.previousClose;

        const changePercent =
        ((price - prev) / prev) * 100;

        return {
            price,
            changePercent
        };

    } catch {

        return null;

    }
}
