module.exports = (rating) => {
    let result = "";
    let floor = Math.floor(rating);
    for (let i = 0; i < 5;i++) {
        if (i<floor) result+=`<i class="fa fa-star"></i> `;
        else result+=`<i class="fa fa-star-o"></i> `;
    }
    return result;
}