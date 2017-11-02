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
      '/dashboard': {
        title: 'eventDashboard',
      },
      '/edit': {
        '/cfp': {
          title: 'cfpSettings',
        },
        '/members': {
          title: 'members',
        },
      },
      '/cfp': {
        title: 'Call for paper',
      },
    },
  },
  '/': {
    title: 'home',
  },
}

export const { reducer, middleware, enhancer } = routerForBrowser({ routes })
