export default {
  sidebar: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  panel: {
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingBottom: '10px',
    color: 'rgba(255, 255, 255, 0.3)',
    padding: '20px 20px 10px 20px',
  },

  link: {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    padding: '10px 20px 10px 20px',
    ':hover': {
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}
