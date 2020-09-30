const APP_PORT = process.env.PORT || 3000;
const HOSTNAME = "localhost";
const APP_URL = `http://${HOSTNAME}:${APP_PORT}`;

module.exports = {
    APP_PORT: APP_PORT,
    HOSTNAME: HOSTNAME,
    APP_URL: APP_URL
}