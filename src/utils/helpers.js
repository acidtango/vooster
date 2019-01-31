const Helpers = {
  isObject: value => {
    return value != null && typeof value === 'object' && Array.isArray(value) === false
  },
}

export default Helpers
