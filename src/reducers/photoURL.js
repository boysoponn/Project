export default (state = null, { type, photoURL }) => {
    switch (type) {
      case 'photoURL':
        return state = photoURL
      default:
        return state
    }
  }