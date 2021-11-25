module.exports = (rating,totalRating) => {
    let result = "";
    let sum = 0;
    for (let e of rating) {
        sum+= e.rating*e.ratingcount;
    }
    sum/=totalRating;
    result += `<span>${sum}</span><div class="rating-stars">`;
    sum = Math.floor(sum);
    for (let i = 0; i < 5;i++) {
        if(i < sum) result +=`<i class="fa fa-star"></i> `;
        else result += `<i class="fa fa-star-o"></i> `;
    }
    result += `</div>`;
    return result;
}