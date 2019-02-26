export default (state = "", { type, project }) => {
    switch (type) {
      case 'project':
        return state = project
      default:
        return state
    }
  }