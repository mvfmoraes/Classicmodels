module.exports = app => {

    const { one, all } = app.services.airline;

    app.route('/airline').get(all);
    app.route('/airline/:airline_id').get(one);
}