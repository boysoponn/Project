export default (state = "null", { type, email }) => {
    switch (type) {
      case 'loginEmail':
        return state = email
      default:
        return state
    }
  }