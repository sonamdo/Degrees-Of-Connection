FROM ruby:2.7.3

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install
EXPOSE 3000

COPY . /myapp

CMD ["rails", "server", "-b", "0.0.0.0"]