import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/speaker': {
    '/profile': {
      title: 'profile',
    },
    '/talks': {
      title: 'talks',
    },
  },
  '/organizer': {
    '/events': {
      title: 'events',
    },
    '/event/:id': {
      '/cfp': {
        title: 'cfpSettings',
      },
      '/members': {
        title: 'members',
      },
    },
  },
  '/': {
    title: 'home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
