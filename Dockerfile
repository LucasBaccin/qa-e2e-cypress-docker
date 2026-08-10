FROM cypress/included:14.5.4

USER root

RUN apt-get update \
    && apt-get install -y --no-install-recommends default-jre-headless \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /e2e

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npx", "cypress", "run"]