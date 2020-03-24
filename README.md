# Onlinestore Simple Rest API
Link demo heroku : https://sandypracoyo-node-rest-test.herokuapp.com/

### Usage
Create .env file (example)

```
PORT=5000

DATABASE_HOST = 127.0.0.1
DATABASE_USER = root
DATABASE_NAME = onlinestore
```

Install all package

```
npm i
```

Run app

```
npm run dev
```

### CUSTOMER
Demo : https://sandypracoyo-node-rest-test.herokuapp.com/api/v1

| Method | Path | Params | Description |
| ------ | ------ | ------ | ------ |
| `POST` | /customer |  | Create new customer |
| `PUT` | /customer/:id | id | Update customer by id |
| `DELETE` | /customer/:id  | id | Delete customer by id |
| `GET` | /customer/:id | id | Get customer by id |
| `GET` | /customer |  | Get all customer |

### PRODUCT
Demo : https://sandypracoyo-node-rest-test.herokuapp.com/api/v1

| Method | Path | Params | Description |
| ------ | ------ | ------ | ------ |
| `POST` | /product |  | Create new product |
| `PUT` | /product/:id | id | Update product by id |
| `DELETE` | /product/:id  | id | Delete product by id |
| `GET` | /product/:id | id | Get product by id |
| `GET` | /product |  | Get all product |

### DRIVER
Demo : https://sandypracoyo-node-rest-test.herokuapp.com/api/v1

| Method | Path | Params | Description |
| ------ | ------ | ------ | ------ |
| `POST` | /driver |  | Create new driver |
| `PUT` | /driver/:id | id | Update driver by id |
| `DELETE` | /driver/:id  | id | Delete driver by id |
| `GET` | /driver/:id | id | Get driver by id |
| `GET` | /driver |  | Get all driver |

