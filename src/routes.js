const {
    addDataRegisHandler,
    getAllDataRegisHandler,
    allDataMateri,
    getDataMateri
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/regis',
        handler: addDataRegisHandler,
    },
    {
        method: 'GET',
        path: '/regis',
        handler: getAllDataRegisHandler,
    },
    {
        method: 'POST',
        path: '/materi',
        handler: allDataMateri,
    },
    {
        method: 'GET',
        path: '/materi',
        handler: getDataMateri,
    }
];

module.exports = routes;