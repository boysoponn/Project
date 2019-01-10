export default (state = "null", { type, chooseTemplate }) => {
    switch (type) {
      case 'chooseTemplate':
        return state = chooseTemplate
      default:
        return state
    }
  }