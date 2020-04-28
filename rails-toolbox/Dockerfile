FROM ruby:2.7

ARG USER_ID
ARG GROUP_ID

RUN addgroup --gid $GROUP_ID user
RUN adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID user

ENV INSTALL_PATH /opt/app
RUN mkdir -p $INSTALL_PATH

RUN gem install rails bundler
RUN chown -R user:user /opt/app

WORKDIR /opt/app

USER $USER_ID
CMD ["/bin/sh"]