export default (state = '-LNnOudEDoOO0Vk3otDg', { type, tab }) => {
    switch (type) {
      case 'checkTab':
        return state =tab
      default:
        return state
    }
  }