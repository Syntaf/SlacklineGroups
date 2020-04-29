# vigilant-broccoli
Future home of slacklinegroups.com - Rails 6 + React + ElasticSearch

## To-Do
----
- Write some example tests
- Configure CI/CD
- Production

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

3. Build docker images
   ```
   $ docker-compose build
   ```

4. Create and migrate the database
   ```bash
   $ docker-compose run slacklinegroups rails db:create
   $ docker-compose run slacklinegroups rails db:migrate
   ```

5. Spin up the server and start contributing
   ```
   $ docker-compose up
   ```

Once running you can visit the app at https://localhost:8020