# Deploying Slacklinegroups
----

This project is hosted on DigitalOcean via Kubernetes. The steps below outline how to deploy the project to a K8 stack on DigitalOcean.

### Prerequisites

- A `secrets.yaml` file containing your digital ocean API token (see `secrets.yaml.example`)
- [doctl](https://github.com/digitalocean/doctl) installed and authenticated with your cluster
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed

## Building Production Images

Before building a production image, determine a tag version to use. Ideally, you should increment the tag version by one from the current production tag.

Once you know your tag version, run the following command to build a production image for slacklinegroups:

```
# replace vX with your version tag

$ docker build -t syntaf/slacklinegroups:vX \
    --build-arg RAILS_ENV=production \
    --build-arg USER_ID=$(id -u) \
    --build-arg GROUP_ID=1000 \
    -f ./slacklinegroups/Dockerfile.production \
    ./slacklinegroups
```

Once built, push your production image:

```
$ docker push syntaf/slacklinegroups:vX
```

## Initial deployment to K8s

If you're hosting this project on a brand new cluster, run the following command to install the project on the cluster:

```
$ helm install -f secrets.yaml slacklinegroups k8s/slacklinegroups
```

The above command assumes your `kubectl` tool is current set to your cluster context, and not the default local context. Run `kubectl config current-context` to verify, otherwise set the context correctly before running the above command.

## Upgrading previous deployments on K8s

Assuming you've named your release `slacklinegroups` like above, and that you've incremented the chart version in `slacklinegroups/Chart.yaml`, run the following command to rollout a new deployment:

```
$ helm upgrade -f secrets.yaml slacklinegroups k8s/slacklinegroups
```