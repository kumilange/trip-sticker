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
