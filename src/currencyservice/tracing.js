"use strict";

const process = require('process');
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { CollectorTraceExporter } = require("@opentelemetry/exporter-collector-grpc");

// Create an OpenTelemetry Collector exporter for traces
const traceExporter = new CollectorTraceExporter({
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT
});

// create the OpenTelemetry NodeSDK trace provider
const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: process.env.SERVICE_NAME,
    [ 'ip' ]: process.env.POD_IP,
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()] // enable all Auto Instrumentations
});

// Start the OpenTelemetry tracing SDK
sdk.start()
    .then(() => console.log('Tracing initialized'))
    .catch((error) => console.log('Error initializing tracing', error));

// On shutdown, ensure we flush all telemetry first
process.on('SIGTERM', () => {
  sdk.shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0));
});
