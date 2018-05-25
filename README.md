# popquiz

Live: http://pop-quizzy.surge.sh/

## Breakdown

This project is generated by [create-vue-app](https://github.com/vue-land/create-vue-app).

Dependencies:
- vue-router - manage routing
- vuex - state management
- vue-resource - handle http requests
- promise-polyfill - polyfill promises
- object-assign - polyfill object assign
- firebase - persist high scores

State:
- user
  - name
  - difficulty
- game
  - answered - # of answered questions
  - questions - array of questions to ask
  - score - # of questions answered correctly
- fetching
  - show - show loading indicator

Styling:
- tailwindcss - for utility styles
- css-modules - specific component styling
  - I chose to go with tailwind for basic utility classes margin, padding, width, typography
  - and use css-modules for specifc styling and scoped component styling

TODO:
- This my first vue app so i probably could spend more time with best practices for
getters, actions, mutations, data, props. Breaking more things out into components etc.
- I chose not to put the high scores in the store just because the scores will be requested
everytime on the overview page and not much point in persisting them in the store
- Probably the store would have an async flag on any store module that is making async requests
but because there is only the request for questions i decided to make a seperate module for it
- The styling could be more thought out (and just prettier) with better structuring but for such a small
app I chose to mostly rely on utility classes but I did use css-modules just to show how
I might customize this more
- Unit testing is only minimal, only because I didn't have time but ideally the other user interactions
would be tested, as well as the mutations that the store goes through

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

## Analyze bundle size

Run `yarn report` to get a report of bundle size which helps you:

- Realize what's really inside your bundle
- Find out what modules make up the most of it's size
- Find modules that got there by mistake
- Optimize it!

---

This project is generated by [create-vue-app](https://github.com/vue-land/create-vue-app).
