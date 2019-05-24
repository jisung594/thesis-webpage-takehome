document.addEventListener('DOMContentLoaded', () => {
  let mainPage = document.querySelector('#main-page')
  let menuBtn = document.querySelector('#menu-id')
  menuBtn.addEventListener('click', showMenuOptions)

  function showMenuOptions() {
    mainPage.innerHTML = ""

    let options = ['Home', 'Why Us', 'Contact Us', 'Login', 'Support']

    options.forEach(option => {
      let menuOption = document.createElement('li')
      menuOption.innerText = option
      mainPage.append(menuOption)
    })
  }

})
