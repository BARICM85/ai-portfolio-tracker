<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>AI Portfolio Tracker</title>

<link rel="stylesheet" href="style.css">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Excel Library -->
<script src="https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js"></script>

</head>

<body>

<div class="app-container">

<!-- SIDEBAR -->

<div class="sidebar">

<h2>📊 Portfolio AI</h2>

<button onclick="showDashboard()">Dashboard</button>

<button onclick="showPortfolio()">Portfolio</button>

<button onclick="showAddStock()">Add Stock</button>

<button onclick="showUpload()">Upload Excel</button>

<button onclick="showAllocation()">Allocation</button>

<button onclick="showBenchmark()">Benchmark</button>

<button onclick="showRisk()">Risk</button>

<button onclick="exportPortfolio()">Download Excel</button>

<hr>

<h3>Switch Portfolio</h3>

<button onclick="switchPortfolio('A')">Portfolio A</button>

<button onclick="switchPortfolio('B')">Portfolio B</button>

<hr>

<button onclick="clearPortfolio('A')">Clear Portfolio A</button>

<button onclick="clearPortfolio('B')">Clear Portfolio B</button>

</div>


<!-- MAIN CONTENT -->

<div class="main-content">

<div class="topbar">

<h1>AI Portfolio Dashboard</h1>

</div>

<div id="content" class="dashboard-content">

<!-- Dashboard loads here -->

</div>

</div>

</div>


<!-- MODULE SCRIPT -->

<script type="module" src="js/app.js"></script>

</body>

</html>
