export async function setAllLinks(context, payload) {
  return new Promise((resolve, reject) => {
    if (!payload) {
      try {
        let linkStore = localStorage.getItem('linkStore')
        if (!linkStore) {
          return reject('No storage found!')
        } else {
          let data = JSON.parse(linkStore)
          context.commit('SET_ALL_LINKS', data)
          return resolve(data)
        }
      } catch (error) {
        return reject(error)
      }
    }

    try {
      console.log("PAYLOAD : ", payload)
      localStorage.setItem('linkStore', JSON.stringify(payload))
      context.commit('SET_ALL_LINKS', payload)
      return resolve()
    } catch (error) {
      return reject(error)
    }
  })
}

export async function setCurrentLink(context, payload) {
  return new Promise((resolve, reject) => {
    try {
      context.commit('SET_CURRENT_LINK', payload)
      return resolve(payload)
    } catch (error) {
      return reject(error)
    }
  })
}
