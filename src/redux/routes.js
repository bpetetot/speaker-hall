import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/app': {
    '/speaker': {
      title: 'Speaker',
    },
    '/organizer': {
      title: 'Organizer',
      color: 'red',
    },
  },
  '/': {
    title: 'Home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
