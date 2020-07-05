const http = new easyHttp()


const url = 'https://jsonplaceholder.typicode.com/posts/1'

// http.get('https://jsonplaceholder.typicode.com/posts')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

const data = {
  title: 'The bugs of my life',
  body: 'bzzzzzzzzzzzzzzzzzzzzzz'
}


http.delete(url)
  .then(res => console.log(res))
  .catch(err => console.log(err))