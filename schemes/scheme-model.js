const db = require('../data/db-config'); //db-config.js

module.exports = {
	all,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove,
};

function all() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db('steps as st')
		.where('scheme_id', id)
		.join('schemes as sc', 'st.scheme_id', '=', 'sc.id')
		.select('st.id', 'sc.scheme_name', 'st.steps_number', 'st.instructions')
		.orderBy('st.steps_number');
}

function add(scheme) {
	return db('schemes')
		.insert(scheme, 'id')
		.then((ids) => {
			return findById(ids[0]);
		});
}

function addStep(stepData, id) {
	return db('steps')
		.insert(stepData, 'id')
		.then((ids) => {
			return findById(ids[0]);
		});
}

function update(changes, id) {
	return db('schemes as sc')
		.where({ id }) //{id} where get whole project
		.update(changes)
		.then(() => {
			return findById(id);
		});
}

function remove(id) {
	return db('schemes as sc').where({ id }).del();
}
