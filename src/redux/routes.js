import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/speaker(/*)': {
    title: 'Speaker',
    type: 'speaker',
  },
  '/organizer(/*)': {
    title: 'Organizer',
    type: 'organizer',
  },
  '/': {
    title: 'Home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
