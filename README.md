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
- [x]  Response data is in snakecase, it needs to be in camelcase.

## Server

### Error code
- [x]  Design the error code configuration.

### User
- [x]  Session & Cookies' settings. 
- [x]  Some api need to check user's login.(done, using token)
- [x]  User's password encryption.
- [x]  Repeated username forbidden.
- [x]  `lastSigninAt` data format.

### Dream
- [x]  Get `id` after creating a new dream.
- [x]  Best solution to store an array in mysql.

### Post
- [x]  Dynamically add `input` components to the page, and get the values.
- [x]  Post format and style.
- [x]  Post - rich editor.
- [x]  Leave a a comment to a post.


### Comment
- [x]  Find the comments with the users' avatars and nicknames.

### Tier
- [ ]  Add tier's levels.
- [ ]  Wechat pay.

## Deployment

### Server port problem.
- [x]  HTML is running on `80`.
- [x]  API is running on `7001`.

### Dependency Installation
- [x]  Database initialization. 
- [x]  Redis installation.

### web/m 
- [x]  Client-side routing. 
- [x]  Auto copy `web/m/build` to `weapp/build` 