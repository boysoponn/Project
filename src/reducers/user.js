export default (state = "null", { type, user }) => {
    switch (type) {
      case 'login':
        return state = user
      default:
        return state
    }
  }