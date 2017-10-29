## trip-sticker 
## Get Started

### Install 
```
yarn install
```
### Create DB (Postgress is required)
```
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
yarn migrate
```
### Roll back migrations
```
yarn rollback
```
### Run client server
```
yarn frontend
```
### Run server server
```
yarn backend
```
