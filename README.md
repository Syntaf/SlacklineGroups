# vigilant-broccoli ![CI](https://syntaf.semaphoreci.com/badges/vigilant-broccoli.svg)

Home of slacklinegroups.com - A community project on Rails 6 + React + ElasticSearch

<img src="docs/img/rails.png" width="150"><img src="docs/img/react.png" width="50"><img src="docs/img/sidekiq.png" width="50"><img src="docs/img/redis.png" width="140"><img src="docs/img/sass.png" width="50"><img src="docs/img/psql.png" width="50"><img src="docs/img/elasticsearch.png" width="50">

Table of contents:
  - [Getting Started](#Getting-Started)
  - [Contributing](#Contributing)
    - [Coding Guidelines](#Coding-Guidelines)
    - [Installing New Dependencies](#Installing-new-dependencies)
  - [Deploying to K8s](/docs/DEPLOYING.md)
  - [Monitoring Logs](/docs/LOGS.md)

## Getting Started
----

1. Clone the repository
   ```bash
   $ git clone git@github.com:Syntaf/vigilant-broccoli
   ```

2. Create a new docker volume for persistant database storage
   ```bash
   $ cd vigilant-broccoli
   $ docker volume create slacklinegroups-postgres
   $ docker volume create slacklinegroups-redis
   ```

3. Copy the example env file to create a default `.env`
   ```bash
   $ cp .env.example .env
   ```

4. Build docker images
   ```
   $ docker-compose build
   ```

5. Install javascript dependencies
   ```
   $ docker-compose run slacklinegroups yarn install --check-files
   ```

6. Create and migrate the database
   ```
   $ docker-compose run slacklinegroups rails db:create
   $ docker-compose run slacklinegroups rails db:migrate
   ```

7. Spin up the server and start contributing
   ```
   $ docker-compose up
   ```

   _Note:_ If you encounter a "permission denied" error while attempting to bring the webpacker container up, run `chmox +x slacklinegroups/bin/webpack-dev-server` and try again.

Once running you can visit the app at https://localhost:3000 and starting developing!

## Contributing
----

If you're interested in helping out with the project, visit the [issues](https://github.com/Syntaf/vigilant-broccoli/issues) tab for some ideas on where to contribute first. When you're ready to start developing, create a fork and a branch on your fork which describes the work you'll be doing.

### Coding Guidelines

It's highly recommended that you have [Rubocop](https://github.com/rubocop-hq/rubocop) linting your code as you develop, as this project is based on those guidelines. The following rules are disabled on this projects linting spec:

- `Style/HashSyntax` (Recommended but not required)
- `Style/Documentation`
- `Metrics/ClassLength`
- `Metrics/AbcSize`
- `Metrics/MethodLength`

If you're using Visual Studio Code, you can get Rubocop by installing the [Ruby Solargraph](https://marketplace.visualstudio.com/items?itemName=castwide.solargraph) extension and enabling linting.

### Installing New Dependencies

If you're adding a new JS dependency to the project, you need to perform the following steps for it to install properly:

  - Bring down all running containers
  - Run `docker-compose run slacklinegroups yarn add <dependency>`
