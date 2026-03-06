let activePortfolio = "A";

function getKey() {
    return activePortfolio === "A" ? "portfolioA" : "portfolioB";
}

function loadPortfolio() {
    const data = localStorage.getItem(getKey());
    return data ? JSON.parse(data) : [];
}

function savePortfolio(portfolio) {
    localStorage.setItem(getKey(), JSON.stringify(portfolio));
}

function clearPortfolio() {
    localStorage.removeItem(getKey());
}

function switchPortfolio(type) {

    activePortfolio = type;

    showPortfolio();
}
