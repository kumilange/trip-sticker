## Trip Sticker 
**Do you day dream about traveling?**
Trip Sticker is a simple board to share your trip plans and experiences with your friends by leaving a little star-shaped sticker. 

![2018-02-17 11 16 43](https://user-images.githubusercontent.com/28984604/36337189-1e468c9c-13d4-11e8-91df-628ff7f33cad.png)


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
=> Follow the instruction on snackbar 

## Built With
* [React](https://facebook.github.io/react/) - Frontend
* [Redux](https://github.com/reactjs/redux) - State Management
* [Material UI](http://www.material-ui.com/) - UI Component
* [Express](https://expressjs.com/) - Backend
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Knex](http://knexjs.org/) - Query Builder
