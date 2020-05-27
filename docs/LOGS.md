# Monitoring Slacklinegroups
----

This project uses the [Loki](https://marketplace.digitalocean.com/apps/grafana-loki) stack for log monitoring, at the moment you will need access to the cluster through `kubectl` to view logs.

To start, fetch the admin password needed for the grafana instance:

```
kubectl get secret --namespace loki loki-grafana -o jsonpath="{.data.admin-password}" | base64 --decode
```

Then, find the pod responsible for hosting the grafana instance

```
GRAFANA=$(kubectl get pods -n loki -l app=grafana -o name)
```

Finally, forward port 3000 on the pod and view logs at http://localhost:3000/explore

```
kubectl port-forward -n loki $GRAFANA 3000
```