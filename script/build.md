# Build

## API/App Services

- Services in the App
- Traffic flow
<img src="./images/sentence-api-diagram.png" width=50% height=50%>
- Show curling to the API endpoints
- Show the HTTP frontend

## XC Deploy

- App is deployed as a CE in Azure. This could be AKS (or another CSP distro), your standard k8s build, or an App Server. XC can then discover your services through DNS, Consul, or from the kube API.
- Here I've deployed to a "virtual kubernetes" cluster -- think managed Namespace. This allows us to distribute services across sites and protect/gather telemetry on east/west traffic.

## Exposing the Application

- Show HTTP Loadbalancer config
- Generate load against the API