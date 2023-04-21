# MS Build Demo

## API App Overview

## Distributed Cloud Infrastructure

## Deploy

```shell
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=docker-auth.json \
    --type=kubernetes.io/dockerconfigjson
```

## References
Thanks to Anton for the [demo app](https://gitlab.com/sentence-ap) and Matthieu for walkthrough guidance.