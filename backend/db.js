const Pool = require("pg").Pool;

const pool = new Pool({
    user: "todoapp_t0hu_user",
    password: "s2Q0SXaQfI2WKPrvqrL6YdyFCxBoxnXI",
    host: "dpg-cq9jqctds78s739et4pg-a.ohio-postgres.render.com",
    port: 5432,
    database: "todoapp_t0hu",
    ssl: true
});

module.exports = pool;