export default {
  fontFamily: '{{ FONT_FAMILY }}',
  backgroundColor: '{{ BACKGROUND }}',
  color: '{{ FONT_COLOR }}',
  fontSize: '{{ FONT_SIZE }}',
  height: '100%',

  '& h1': {
    fontSize: '1.5em',
    margin: '0 0 10px 0',
  },

  '& small': {
    color: 'rgba(255, 255, 255, 0.45)',
  },

  '& button': {
    textTransform: 'uppercase',
    color: '#fff',
    border: '1px solid {{ ACCENT_COLOR }}',
    backgroundColor: '{{ ACCENT_COLOR }}',
    transition: 'opacity 0.5s',
    fontWeight: 400,
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '3px',
    padding: '10px 16px',
    outline: 'none',
    minWidth: '100px',
    ':hover': {
      opacity: 0.8,
    },
  },

  '& a': {
    color: '{{ ACCENT_COLOR }}',
    textDecoration: 'none',
    ':hover': {
      color: '#fff',
    },
  },
}
