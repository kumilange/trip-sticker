## Trip Sticker 
**Do you day dream about traveling?**
Trip Sticker is a simple board to share your trip plans and experiences with your friends by leaving a little star-shaped sticker. 
![2017-11-09 20 53 06](https://user-images.githubusercontent.com/28984604/32604208-2d91d2ac-c590-11e7-940d-16d762d397af.png)

## Get Started
### Prerequisites
- node > 8.0.0
- yarn
- PostgreSQL

### 1. Installing
```
yarn install
```

### 2. Create DB & Run migration & Seed dummy data
```
echo "CREATE DATABASE tripsticker;" | psql
# \c tripsticker

yarn migrate
yarn seed
```

### 3. Running Dev & API servers
```
yarn frontend
yarn backend
```
=> You'll see the map!🗺💃　

## Built With
* [React](https://facebook.github.io/react/) - Frontend
* [Redux](https://github.com/reactjs/redux) - State Management
* [Material UI](http://www.material-ui.com/) - UI Component
* [Express](https://expressjs.com/) - Backend
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Knex](http://knexjs.org/) - Query Builder
