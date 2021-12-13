const rating_star = (star) => {
    let result = "";
    let floor = Math.floor(star);
    for (let i = 0; i < 5;i++) {
        if (i<floor) result+=`<i class="fa fa-star"></i> `;
        else result+=`<i class="fa fa-star-o"></i> `;
    }
    return result;
}

const rating_count = (rating, checkingRating, totalRating) => {
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