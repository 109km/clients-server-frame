# Idea

If you love braging, you're awesome.

If you brag to every one, and you achieve your brag, you're a hero. 

—— Shao


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

## Server

### Error code
* Design the error code configuration.

### User
* Session & Cookies' settings. (done)
* Some api need to check user's login.(done, using token)
* User's password encryption.(done)
* Repeated username forbidden.(done)
* `lastSigninAt` data format.



### Dream
* Get `id` after creating a new dream.（done）
* Best solution to store an array in mysql.

## Post
* Dynamically add `input` components to the page, and get the values.(done)
* Post format and style.(done)
* Post - rich editor.
* Leave a a comment to a post.