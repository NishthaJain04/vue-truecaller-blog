const express = require('express')
const app = express()
const port = 3000

app.get('/posts/related', async(_, res) => {
  const results = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/8012/related", {
      method: "POST"
  });
  const data = await results.json();
  res.send("HELLO WORLD");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})