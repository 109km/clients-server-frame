# Idea

If you love making dreams, you're awesome.

If you try to fulfill your own dream, you're a hero. 



# Product Design

### Working flow
1. Add a `dream`.
2. A `dream` includes some `goals`.
3. A `goal` includes a precise target, your stories(how you acheive this), a deadline.
4. Every one can add `dreams`.
5. Every `dream` is public.
6. `Fans` can `follow` you, `fund` you.


# Architecture
* Server is built on `eggjs`
* H5 is built on `react` + `antd-mobile`

# TODO

## H5

### Date format convert

### Data case
* Response data is in snakecase, it needs to be in camelcase.(done)

## Server

### Error code
* Design the error code configuration.(done)

### User
* Session & Cookies' settings. (done)
* Some api need to check user's login.(done, using token)
* User's password encryption.(done)
* Repeated username forbidden.(done)
* `lastSigninAt` data format.(done)

### Dream
* Get `id` after creating a new dream.（done）
* Best solution to store an array in mysql.

### Post
* Dynamically add `input` components to the page, and get the values.(done)
* Post format and style.(done)
* Post - rich editor.(done)
* Leave a a comment to a post.(done)


### Comment
* Find the comments with the users' avatars and nicknames.(done)

### Tier
* Add tier's levels.
* Wechat pay.

## Deployment

### Server port problem.
* HTML is running on `80`.(done)
* API is running on `7001`.(done)

### Dependency Installation
* Database initialization. (done)
* Redis installation.(done)

### web/m 
* Client-side routing. （done）
* Auto copy `web/m/build` to `weapp/build`