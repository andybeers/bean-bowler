const menutext = ''

function beanBowlDetector(text) {
  if (!text) return false
  return text.toLowerCase().includes('bean bowl')
}

function scrapeMenu() {
  fetch('/api/menu')
    .then(res => {
      if (res.status < 400) return res.json()
      throw new Error(res.statusText)
    })
    .then(data => {
      const { menu } = data
      const beanStatus = beanBowlDetector(menu)
      document.querySelector('#results').innerText = beanStatus
        ? 'YES'
        : 'NOT TODAY'
    })
    .catch(err => console.log(err))
}

function printDate() {
  const dateString = new Date().toISOString().slice(0, 10)
  document.querySelector('#date').innerText = dateString
}

printDate()
