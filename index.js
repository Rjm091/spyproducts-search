const express = require('express');
const app = express();
app.use(express.static('public'));

// List your products here:
const products = [
  {
    id: "stealthpen",
    title: "StealthPen Audio Recorder",
    description: "Records up to 144 hours inside a working pen.",
    url: "https://spyproducts.com.au/stealthpen"
  }
  // → add more products below if you like
];

app.get('/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = products.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ results: results.slice(0,5) });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
