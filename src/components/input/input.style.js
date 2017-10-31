export default {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '15px',

  '& label': {
    width: '20%',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.3)',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  '& input': {
    width: '80%',
    border: 'none',
    borderRadius: '3px',
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: '1.5em',
    lineHeight: '1.5em',
    outline: 'none',
    padding: '10px',
    margin: '0 10px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 2px 0px, rgba(0, 0, 0, 0.1) -2px 2px 2px 0px inset',
  },

  '& input:focus': {
    color: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: '#fff',
  },
}
