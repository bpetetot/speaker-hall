import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/app': {
    '/speaker(/*)': {
      title: 'Speaker',
      type: 'speaker',
    },
    '/organizer(/*)': {
      title: 'Organizer',
      type: 'organizer',
    },
  },
  '/': {
    title: 'Home',
    type: 'home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
