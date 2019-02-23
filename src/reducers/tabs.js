export default (state = false, { type, tab }) => {
    switch (type) {
      case 'checkTab':
        return state =tab
      default:
        return state
    }
  }