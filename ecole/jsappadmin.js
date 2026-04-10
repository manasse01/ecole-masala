const ctx = document.getElementById("chart");

if(ctx){
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Messages", "Inscriptions"],
            datasets: [{
                label: "Statistiques",
                data: [100, 70]
            }]
        }
    });
}