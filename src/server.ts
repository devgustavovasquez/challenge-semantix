import app from "./app";
const port = process.env.APP_PORT || 3030;

app.listen(port, () => {
  console.log("Listening of port", port);
});
