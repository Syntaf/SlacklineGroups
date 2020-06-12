# Package Management
----

## Upgrading / Downgrading a Gem

This process can be a bit convoluted at the moment, I'm writing this document to that future-me can still perform upgrades/downgrades through docker images. Assuming you have a built development image:

1. Remove your local `node_modules`, otherwise `docker-compose build` might error out in a later step
2. Make your version upgrade/downgrade change in the `Gemfile`:
   ```ruby
   # Manually downgrade sprockets to prevent seg fault in some cases
   gem 'sprockets', '3.7.2'
   ```
3. Open `Dockerfile.development` and add this additional line:
   ```Dockerfile
   WORKDIR /opt/app/slacklinegroups
   RUN bundle update sprockets # <--- Add this line, replacing 'sprockets' with your package
   RUN bundle install
   ```
4. Run `docker-compose build` to cause that additional line to now be executed. This won't change your lockfile yet however, as you'll need to run the step one more time with the finished image
5. Run `docker-compose run slacklinegroups bundle update sprockets`, and don't forget to re-install node_modules after with `docker-compose run slacklinegroups yarn install --check-files`