module.exports = (rating, checkingRating, totalRating) => {
    let result = "";
    let percentage = 0;
    let count = 0;
    for (let e of rating) {
        if (e.rating !== checkingRating) continue;
        else {
            percentage = (e.ratingcount / totalRating) * 100;
            count = e.ratingcount;
        }
    }
    result = `
    <div class="rating-progress">
    <div style="width: ${percentage}%;"></div>
    </div>
    <span class="sum">${count}</span>
    `;
    return result;
}