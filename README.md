## README.md (Sorry, still wip)

## Get Started

### Install 
```
npm install
```
### Create DB (Using postgress is required)
```
psql
echo "CREATE DATABASE tripsticker;" | psql
```
### Check connection to DB
```
\c tripsticker
```
### Check table on DB
```
\dt
```

### Run migrations and set up the database
```
npm run migrate
```
### Roll back migrations
```
npm run rollback
```
### Run client server
```
npm start
```
### Run server server
```
npm run server
```
