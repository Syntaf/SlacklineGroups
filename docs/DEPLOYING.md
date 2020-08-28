# Deploying Slacklinegroups
----

This project is hosted on DigitalOcean via Kubernetes. The steps below outline how to deploy the project to a K8 stack on DigitalOcean.

### Prerequisites

- A `secrets.yaml` file (see `secrets.yaml.example`)
- [doctl](https://github.com/digitalocean/doctl) installed and authenticated with your cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed

## Building Production Images

Before building a production image, determine a tag version to use. Ideally, you should increment the tag version by one from the current production tag.

Once you know your tag version, run the following command to build a production image for slacklinegroups:

```zsh
# replace vX with your version tag

$ docker build -t <author>/slacklinegroups:vX --build-arg RAILS_ENV=production --build-arg USER_ID=1000 --build-arg GROUP_ID=1000 -f ./slacklinegroups/Dockerfile.production ./slacklinegroups
```

Once built, push your production image:

```
$ docker push <author>/slacklinegroups:vX
```

_Note:_ Production images are automatically built via Semaphore CI/CD. Go [here](https://hub.docker.com/repository/registry-1.docker.io/syntaf/slacklinegroups/tags?page=1) to see the latest tags.

## Initial deployment to K8s

The steps below assume your `kubectl` tool is current set to your cluster context, and not the default local context. If you aren't sure what context you're in, run `kubectl config current-context`.

If you're hosting this project on a brand new cluster (digital ocean), you'll want to first start with installing cert-manager for https support:

```zsh
# Create custom resource definitions for certificate management
$ kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.15.0/cert-manager.crds.yaml

# Add jetstack repository
helm repo add jetstack https://charts.jetstack.io

# Install cert-manager under a separate namespace
# feature gate: https://github.com/jetstack/cert-manager/issues/2712
$ helm install --set featureGates=ExperimentalCertificateControllers=true cert-manager --namespace cert-manager jetstack/cert-manager

# Create issuers for cert challengers & management
$ kubectl apply -f k8s/issuers
```

Afterwards, you can install the helm chart for slacklinegroups

```zsh
$ helm install -f secrets.yaml slacklinegroups k8s/slacklinegroups
```

## Upgrading previous deployments on K8s

Assuming you've named your release `slacklinegroups` like above, and that you've incremented the chart version in `slacklinegroups/Chart.yaml`, run the following command to rollout a new deployment:

```zsh
$ helm upgrade -n slacklinegroups -f secrets.yaml slacklinegroups k8s/slacklinegroups
```