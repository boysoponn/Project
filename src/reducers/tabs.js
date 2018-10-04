export default (state = 'null', { type, tab }) => {
    switch (type) {
      case 'checkTab':
        return state =tab
      default:
        return state
    }
  }