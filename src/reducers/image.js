export default (state = 'null', { type, url }) => {
    switch (type) {
      case 'getUrlImage':
        return state = url
      default:
        return state
    }
  }