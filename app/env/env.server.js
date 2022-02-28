const serverPort = process.env.SERVER_PORT || process.env.PORT || 5000;
const isDev = process.env.NODE_ENV === "development"

if (!serverPort) {
  throw new Error(
    ".env is missing the definition of a SERVER_PORT environmental variable",
  );
}

module.exports = {
  isDev,
  serverPort
}