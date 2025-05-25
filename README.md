
# MONITORING OR OBERVABILITY

This is a small project to understand how observabilty and monitoring works with a server to display its metrcis and logs and traces using promoetheus and loki and traces and for data viswalization we will use graffana.




## OBSERVABILITY

Observability in Monitoring refers to the ability to understand the internal state of a system based on the data it produces, such as logs, metrics, and traces. 
## CORE PILLARS OF OBERVABILITY

📊 Core Pillars of Observability

1) Metrics

Quantitative data (e.g., CPU usage, response time) — useful for real-time monitoring and alerting.

2)
Logs:
Text records of events — useful for troubleshooting and audit trails.

3)
Traces

Show how a request flows through a system (especially in microservices) — useful for understanding latency and service interactions.
## TOOLS I HAVE USED HERE

FOR METRICS - PROMETHEUS

FOR LOGS  - LOKI


FOR TRACES - OpenTelemetry
## PREREQUIST

1)Basic Knowlege of Node.js and Express Framework

2)Basic to Intermediate knowledge in Docker and Containerization -  Learn Docker Containerization
## HOW THE SETUP WORKS

https://jumpshare.com/s/c3Jza0nsBf0QJeEprvq4
## Installation and Setup

1. Prometheus Server
Create a prometheus-config.yml file and copy the following configration. Don't forget to replace <NDOEJS_SERVER_ADDRESS> with actual value.

global:
  scrape_interval: 4s

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets: ["<NDOEJS_SERVER_ADDRESS>"]
Start the Prometheus Server using docker compose
version: "3"

 services:

  prom-server:
    image: prom/prometheus
    ports:
      - 9090:9090
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
     Great, The prometheus server is now up and running at PORT 9090

2. Setup Grafana

docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss
grafana

3. Setup Loki Server

docker run -d --name=loki -p 3100:3100 grafana/loki


