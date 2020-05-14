const db = require('../data/db-config'); //db-config.js

module.exports = {
	all,
	findById,
	add,
	update,
	remove,
};

function all() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function add(schemeData) {
	return db('schemes')
		.insert(schemeData, 'id')
		.then((ids) => {
			return findById(ids[0]);
		});
}

function update(id, changes) {
	return db('schemes').where({ id }).update(changes);
}

function remove(id) {
	return db('schemes').where({ id }).del();
}
