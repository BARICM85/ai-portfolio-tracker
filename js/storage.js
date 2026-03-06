export function loadPortfolio(type = "A") {

    const data = localStorage.getItem("portfolio_" + type);

    return data ? JSON.parse(data) : [];

}

export function savePortfolio(type = "A", portfolio) {

    localStorage.setItem("portfolio_" + type, JSON.stringify(portfolio));

}
