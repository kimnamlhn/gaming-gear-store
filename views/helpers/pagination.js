module.exports = (page, count) => {
    let result = "";
    page++;
    if (page > count) {return "";}
    switch(count) {
        case 0: 
            return ""; 
        case 1:
            return `<li class="active">${page}</li>`;
        case 2: {
            if(page === 1) return `<li class="active">${page}</li><li><a href="?page=${page}">${page+1}</a></li>`;
            else return `<li><a href="?page=${page-2}">${page-1}</a></li><li class="active">${page}</li>`;
        }
        case 3: case 4: {
            for (let i = 0; i < count; i++) {
                if (page-1 === i) result += `<li class="active">${page}</li>`;
                else result += `<li><a href="?page=${i}">${i+1}</a></li>`;
            }
            return result;
        }
        default: {
            if(page-1 !== 0 && page!==count)
                result += `
                <li><a href="?page=0"><i class="fa fa-angle-double-left"></i></a></li>
                <li><a href="?page=${page-2}"><i class="fa fa-angle-left"></i></a></li>
                <li><a href="?page=${page-2}">${page-1}</a></li>
                <li class="active">${page}</li>
                <li><a href="?page=${page}">${page+1}</a></li>
                <li><a href="?page=${page}"><i class="fa fa-angle-right"></i></a></li>
                <li><a href="?page=${count-1}"><i class="fa fa-angle-double-right"></i></a></li>`;
            else {
                if (page-1 === 0) result += `
                <li class="active">${page}</li>
                <li><a href="?page=${page}">${page+1}</a></li>
                <li><a href="?page=${page+1}">${page+2}</a></li>
                <li><a href="?page=${page}"><i class="fa fa-angle-right"></i></a></li>
                <li><a href="?page=${count-1}"><i class="fa fa-angle-double-right"></i></a></li>`;
                else {
                    result+= `
                    <li><a href="?page=0"><i class="fa fa-angle-double-left"></i></a></li>
                    <li><a href="?page=${count-2}"><i class="fa fa-angle-left"></i></a></li>
                    <li><a href="?page=${count-3}">${count-2}</a></li>
                    <li><a href="?page=${count-2}">${count-1}</a></li>
                    <li class="active">${count}</li>`;
                }
            } 
            return result;
        }
    }
}