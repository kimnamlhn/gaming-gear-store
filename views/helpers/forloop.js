module.exports = (from, to, incr, content) => {
    let accum = '';
    for(let i = from; i < to; i += incr)
        accum += content.fn(i);
    return accum;
}