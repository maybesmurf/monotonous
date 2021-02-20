#!/bin/bash

dropdb monotonous
createdb monotonous
npx prisma db push --preview-feature
# npx prisma migrate dev --preview-feature
yarn
# npx ts-node ./scripts/seed_dev/index.ts
ps -ef | grep prisma | grep -v grep | awk '{print $2}' | xargs kill