## Trip-sticker 
Do you day dream about traveling?
Trip-sticker is a simple board to share your trip plans and experiences with your friends by leaving a little star sticker. 
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

## How to use
1. Click anywhere on the map you'd like to visit or already visited
2. Write the place and your name and whatever thoughts you'd like to share 
3. The star shaped sticker will be on the board!
