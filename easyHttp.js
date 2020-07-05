class easyHttp {

  async handleError(res) {
    if (!res.ok) await Promise.reject(new Error(res.statusText))
    return res
  }

  async get(url) {
    
    const response = await fetch(url) // await fetch promise to get resolve

    const resData = await this.handleError(response) //check status of response if okay and raise error if not

    return await resData.json() //wait json promise to get resolve and return data
  }

  async post(url,data) {
    // fetch data from url
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    
    const resData = await this.handleError(response)
    return await resData.json()
  }


  async put(url,data) {
    // fetch data from url
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    
    const resData = await this.handleError(response)
    return await resData.json()
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE'
    })
    const reData = await this.handleError(response)
    return await 'Resouces has been deleted'
  }
}





// class easyHttp {
  
//   handleError(res){
//      if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
//      return res
//    }

//   get(url) {
//     return new Promise((resolve,reject) => {
//       fetch(url)
//       .then(this.handleError)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//     })
//   }
  
//   post(url,data) {
//     return new Promise((resolve,reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body : JSON.stringify(data)
//       })
//       .then(this.handleError)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err))
//     })
//   }

//   put(url,data) {
//     return new Promise((resolve,reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(this.handleError)
//       .then(res => res.json())
//       .then(res => resolve(res))
//       .catch(err => reject(err))
//     })
//   }

//   delete(url) {
//     return new Promise( (resolve,reject) => {
//       fetch(url,{
//         method: 'DELETE'
//       })
//       .then(this.handleError)
//       .then(res => res.json())
//       .then(data => resolve('Resource deleted'))
//       .catch(err => reject(err))
//     })
//   }
    
// }
