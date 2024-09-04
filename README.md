# Capstone Pinterest Clone API Documentation

## Documents

- Postman: [Capstone Pinterest collection](./Capstone%20Pinterest.postman_collection.json)
- Database: [Pinterest.sql](./db_pinterest.sql)

---

## API Definition

### Authentication

- `POST` - Login: `/auth/login`
- `POST` - Sign up: `/auth/sign-up`
- `POST` - Change password: `/auth/change-password`

### Image

- `GET` - Get all images: `/image/get-all-images`
- `GET` - Get list of images by image name: `/image/get-images-by-name`
- `GET` - Get image detail by image id: `/image/get-image-detail`
- `POST` - Create a new image: `/image/post-image`
- `DELETE` - Delete image: `/image/delete`

### Comments

- `GET` - Get all comments of image: `/comment/get-comments-of-image`
- `POST` - Post new comment: `/comment/post-comment`

### Users

- `GET` - Get user profile: `/user/get-profile`
- `PUT` - Update user profile: `/user/update-profile`
- `GET` - Get all comments posted by user: `/user/get-comments-posted`
- `GET` - Get all images posted by a user: `/user/get-images-posted`

### Saved

- `GET` - Get all images saved by user: `saved/get-all-images-saved`

---

## Setup and Config

### Environment

  ```text
  DB_PORT_SERVER=8080
  DB_SECRET_KEY_JWT="capstonePinterest"
  DB_DATABASE=db_pinterest
  DB_USER=root
  DB_PASS=123456
  DB_HOST=localhost
  DB_PORT=3307
  DB_DIALECT=mysql
  ```

### Docker

- Create container:

  ```bash
  docker run --name mysql_pinterest -e MYSQL_ROOT_PASSWORD=123456 -d -p 3307:3306 mysql:latest
  ```

- Run container:

  ```bash
  docker start mysql_pinterest
  ```

### TablePlus

- DB: Mysql
- Connection name: mysql_pinterest
- Host: 127.0.0.1
- Port: 3307
- User: root
- Password: 123456
- Database name: db_pinterest

### Sequelize-auto

  ```bash
  yarn sequelize-auto -h localhost -d db_pinterest -u root -x 123456 -p 3307 --dialect mysql -o src/models -l esm
  ```

## Author

- Khang Nguyen: <ngkhang0220@gmail.com>
