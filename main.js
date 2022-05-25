
window.addEventListener('keydown',(e) => {
  if(e.key == 'Enter'){
    userLoad()
  }
})

function userLoad(){
  userName.innerHTML = ''
  const usuario = document.querySelector('#userId');
  const url = `https://api.github.com/users/${usuario.value}`
  axios.get(url)
  .then(response => {
    const data = response.data
    userName.textContent = data.name
    userImg.src = data.avatar_url
    userFollowers.innerHTML = `<img src="assets/followers.svg">${data.followers} Seguindo`
    userFollowing.innerHTML = `<img src="assets/following.svg">${data.following} Seguidores`
    userRepos.innerHTML = `<img src="assets/repository.svg">${data.public_repos} Repositórios`
    userLocation.innerHTML = `<img src="assets/location.svg">${data.location}`
    if(errorMessage.classList.contains('on')){
      errorMessage.classList.remove('on')
    }
  })
  .catch(error => errorMessage.classList.add('on'))
  usuario.value=''
}