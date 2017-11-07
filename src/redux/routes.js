import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/speaker': {
    '/profile': {},
    '/talks': {},
    '/talk/:id': {},
  },
  '/organizer': {
    '/events': {},
    '/event/:id': {
      '/dashboard': {},
      '/edit': {
        '/cfp': {},
        '/members': {},
      },
      '/cfp': {},
    },
  },
  '/login': {},
  '/': {},
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
