## Rails Toolbox
----
This directory contains an image for running rails commands from within a container, and was used to initialize the slacklinegroups project.

### Building

```bash
~$: docker build -t rails-toolbox \
        --build-arg USER_ID=$(id -u) \
        --build-arg GROUP_ID=$(id -g) \
        .
```

### Running

```bash
~$: docker run -it -v ${PWD}:/opt/app rails-toolbox new \
        -B \
        --skip-webpack-install \
        --webpack=react \
        --database=postgresql \
        slacklinegroups
```

_Note:_ If on linux or unix you can simply use `$PWD`, the example above was run on powershell.