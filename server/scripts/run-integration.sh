docker-compose up -d

echo '🟡 - Waiting for database to be ready...'

./script/wait-for-it.sh "mongodb://localhost:27017/test-db" -- echo '🟢 - Database is ready!'

cross-env NODE_ENV=test dotenv -e .env.test -- jest --testMatch '**/tests/integration/**/*.test.ts'

docker-compose down