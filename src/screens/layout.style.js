export default {
  navbar: {
    gridArea: 'navbar',
  },

  sidebar: {
    gridArea: 'sidebar',
    overflow: 'scroll',
  },

  main: {
    gridArea: 'main',
    padding: '20px',
    overflow: 'scroll',
  },

  brand: {
    gridArea: 'brand',
  },

  layout: {
    display: 'grid',
    gridTemplateColumns: '240px auto',
    gridTemplateRows: '60px auto',
    gridTemplateAreas: "'brand navbar' 'sidebar main'",
    height: '100%',
  },
}
