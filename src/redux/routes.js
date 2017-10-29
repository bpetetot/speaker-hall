import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/speaker': {
    title: 'Speaker',
  },
  '/organizer': {
    title: 'Organizer',
  },
  '/': {
    title: 'Home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
