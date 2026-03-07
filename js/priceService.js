const CORS = "https://api.allorigins.win/raw?url=";

export async function fetchNifty() {
  try {
    const url = encodeURIComponent(
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI"
    );

    const res = await fetch(CORS + url);
    const data = await res.json();

    return data.chart.result[0].meta.regularMarketPrice;
  } catch (e) {
    console.log("Nifty fetch error:", e);
    return "N/A";
  }
}

export async function fetchPrice(symbol) {
  try {
    const url = encodeURIComponent(
      `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`
    );

    const res = await fetch(CORS + url);
    const data = await res.json();

    return data.quoteResponse.result[0].regularMarketPrice;
  } catch (e) {
    console.log("Price fetch error:", e);
    return null;
  }
}
