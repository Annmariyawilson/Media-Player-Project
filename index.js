const jsonserver = require("json-server");
const cors = require("cors"); 

const mpServer = jsonserver.create();
const middleware = jsonserver.defaults();
const router = jsonserver.router("db.json");

mpServer.use(cors({
  origin: "https://media-five-red.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));

mpServer.use(middleware);
mpServer.use(router);

const PORT = process.env.PORT || 3002;
mpServer.listen(PORT, () => {
  console.log("Server running at PORT:" + PORT);
});
