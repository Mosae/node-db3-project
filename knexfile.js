// Update with your config settings.
// const connectionString =
// 	process.env.DATABASE_URL || 'postgresql:Mosae/northwind.db3';

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true, // needed for sqlite
		connection: {
			filename: './data/schemes.db3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		// add the following
		pool: {
			afterCreate: (conn, done) => {
				// runs after a connection is made to the sqlite engine
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			},
		},
	},
};
// 	staging: {
// 		client: 'pg',
// 		connection: {
// 			host: 'localhost', // add this
// 			database: 'my_db',
// 			user: 'username',
// 			password: 'password',
// 		},
// 		pool: {
// 			min: 2,
// 			max: 10,
// 		},
// 		migrations: {
// 			directory: './data/migrations',
// 		},
// 	},

// 	production: {
// 		client: 'pg', // remember to npm i pg
// 		connection: connectionString,
// 		pool: {
// 			min: 2,
// 			max: 10,
// 		},
// 		migrations: {
// 			directory: './data/migrations',
// 		},
// 	},
// };
