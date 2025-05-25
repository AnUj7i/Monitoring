const express = require('express');
const client = require('prom-client');

const app = express();
const port = 8000;

// Create a Registry to register the metrics
const register = new client.Registry();

// Enable collection of default metrics
client.collectDefaultMetrics({ register });

// Custom Counter Metric
const requestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});
register.registerMetric(requestCounter);

// Middleware to count all incoming requests
app.use((req, res, next) => {
  res.on('finish', () => {
    requestCounter.inc({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Node.js server with Prometheus metrics!');
});

// Metrics route for Prometheus to scrape
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
