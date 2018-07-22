function scrapeMenu() {
  fetch('/api/menu')
    .then(res => {
      if (res.status < 400) return res.json()
      throw new Error(res.statusText)
    })
    .then(data => (document.querySelector('#results').innerHTML = data.menu))
    .catch(err => console.log(err))
}
