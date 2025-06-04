export function initResultsSection() {
    const cafeData = [
        {
            name: "Cafe Kopi Santuy",
            address: "Jl. Melati No.10, Jakarta",
            gmaps: "https://maps.google.com",
            rating: "4,6"
        },
        {
            name: "Ngopi Dulu",
            address: "Jl. Kenangan Indah No.5, Bandung",
            gmaps: "https://maps.google.com",
            rating: "4,6"
        }
    ];

    const resultsContainer = document.getElementById("results-container");
    if (!resultsContainer) return;

    cafeData.forEach(cafe => {
        const cafeItem = `
        <div class="result__item" style="display: flex; align-items: center; background-color: #ddd; padding: 20px; margin-top: 20px;">
            <div class="result__image" style="width: 80px; height: 100px; background-color: white; margin-right: 20px;"></div>
            <div class="result__info" style="flex-grow: 1;">
                <div class="result__name" style="font-weight: bold;">${cafe.name}</div>
                <div class="result__address">${cafe.address} (<a href="${cafe.gmaps}" target="_blank" style="color: black;">link gmaps</a>)</div>
            </div>
            <div class="result__rating" style="text-align: right;">
                <div style="font-weight: bold;">Rating</div>
                <div>${cafe.rating}</div>
            </div>
        </div>`;
        resultsContainer.innerHTML += cafeItem;
    });
}
