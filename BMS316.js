  function toggleTrend() {
    const trendElement = document.getElementById('trend');
    if (trendElement.style.display === "none") {
      trendElement.style.display = "block";
    } else {
      trendElement.style.display = "none";
    }
  }