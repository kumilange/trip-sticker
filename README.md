## trip-sticker 
![2017-11-09 20 53 06](https://user-images.githubusercontent.com/28984604/32604208-2d91d2ac-c590-11e7-940d-16d762d397af.png)
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
