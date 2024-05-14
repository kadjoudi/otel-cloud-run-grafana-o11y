# Cloud Run Observability with OTel and Grafana Application Observability

In this blog post, we explore enhancing observability in serverless environments, particularly focusing on Google Cloud Run, leveraging OpenTelemetry (OTel) and Grafana Application Observability (app o11y). We highlight the challenges posed by serverless platforms like Cloud Run and how OTel push-based telemetry approach addresses them. We highlight Google recent update introducing Multicontainer deployment, enabling sidecar containers alongside the main service, facilitating observability and other functionalities.

## Setting up Cloud Run Multicontainer Deployment

With Multicontainer deployment, we can now deploy the OTelCollector alongside the Cloud Run service, allowing us to capture telemetry data effectively.

## Leveraging Grafana Application Observability

Grafana Application Observability offers a comprehensive observability solution, seamlessly integrating with OpenTelemetry semantic conventions. It simplifies data collection, provides prebuilt dashboards and workflows, and facilitates anomaly detection.

## Auto-instrumentation with Node.js

We demonstrate auto-instrumentation with Node.js applications, leveraging OpenTelemetry capabilities to export telemetry data efficiently. We prepare the Node.js application, configure auto-instrumentation, and create Docker images for deployment.

## Configuring OpenTelemetry Collector for Grafana Cloud

We configure the OpenTelemetry Collector to connect with Grafana Application Observability, leveraging OTLP natively. We create a configuration file for the collector, generate Docker images, and prepare for deployment.

## Deploying Cloud Run Service

We deploy the Cloud Run service, ensuring proper container startup order to capture telemetry data effectively. We utilize container dependency and startup health check probes for seamless operation.

## Observing Data on Grafana Cloud Application Observability

Finally, we observe data on Grafana Cloud Application Observability, exploring services inventory, services map, and services overview pages. We emphasize the power of combining OpenTelemetry and Grafana Application Observability for comprehensive observability in serverless environments.

## Conclusion

By combining OpenTelemetry and Grafana Application Observability, organizations can achieve enhanced observability in serverless environments, proactively identifying and addressing issues to optimize application performance and reliability.

Your feedback is invaluable in our journey of continuous improvement. Please share your thoughts and experiences with us, and feel free to reach out to our team in the Grafana Labs Community Slack.

Get started with Grafana Cloud today with our forever-free tier, offering essential metrics, logs, traces, and more. Sign up for a free account and experience the power of observability firsthand!

