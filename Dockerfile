# ---- Build stage ----
FROM node:20-alpine AS build

WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# Angular's output can be either:
# - dist/<project>
# - dist/<project>/browser (depending on builder/config)
# Normalize to /app/dist-out for the runtime image.
RUN set -eux; \
  if [ -d "dist/ng-hexa/browser" ]; then \
    cp -R dist/ng-hexa/browser/. dist-out/; \
  else \
    cp -R dist/ng-hexa/. dist-out/; \
  fi

# ---- Runtime stage ----
FROM nginx:1.27-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist-out /usr/share/nginx/html

EXPOSE 80


