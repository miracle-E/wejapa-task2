export async function setAllLinks (context, payload) {
  return new Promise((resolve, reject) => {
    if (!payload) {
      let linkStore = localStorage.getItem('linkStore')
      if(!linkStore) {
        return reject()
      } else {
        try {
          let data = JSON.parse(linkStore)
          context.commit('SET_ALL_LINKS', data)
          return resolve(data)
        } catch (error) {
          return reject(error)
        }
      }
    }

    try {
      context.commit('SET_ALL_LINKS', payload)
      return resolve()
    } catch (error) {
      return reject(error)
    }
  }) 
}

export async function setCurrentLink (context, payload) {
  return new Promise((resolve, reject) => {
    try {
      context.commit('SET_CURRENT_LINK', payload)
      return resolve(payload)
    } catch (error) {
      return reject(error)
    }
  })
}
