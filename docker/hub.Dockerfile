FROM node:20-bookworm-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        ca-certificates \
        python3 \
        make \
        g++ \
    && update-ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN git clone --depth 1 \
    https://github.com/LucasBaccin/hub-de-leitura-integrado.git .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]