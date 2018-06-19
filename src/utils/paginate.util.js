
exports.paginate = (pg, tot) => {

    const page = Number(pg) || 1
    const total = Number(tot) || 5

    const offset = (page < 1 ? 0 : page-1) * total;
    
    return {
        limit: parseInt(total),
        offset: parseInt(offset)
    }

}