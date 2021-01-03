// turn 'JSON' of login rules into list displayed on top of login box
// loginRules is a fake JSON to avoid using fetch or ajax, and having CORS error
// since we can't import without a module and we can't require without node
const loginRules = document.querySelector('#loginRules')

loginRulesList.forEach(item => {
    const newItem = document.createElement('li')
    newItem.innerText = item
    loginRules.appendChild(newItem)
})


// connect login form components with variables that store username and password 
let username = ''
let password = ''

const usernameInput = document.querySelector('#usernameInput')
const passwordInput = document.querySelector('#passwordInput')

usernameInput.addEventListener('change', e => {
    username = e.target.value
})
passwordInput.addEventListener('change', e => {
    password = e.target.value
})


// on submit, show the submitted username and password
const submittedOutput = document.querySelector('#submittedOutput')
const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', e => {
    // preventDefault to not refresh
    e.preventDefault()

    // make a new message and add it to submittedOutput
    const newMessage = `You have submitted the following: USERNAME: ${username}, PASSWORD: ${password}.`
    submittedOutput.innerText = newMessage

    // we can send AJAX request to a server with our login data 
    // fetch(url, options)
    const response = fetch('http://localhost:3000/testpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then( response => response.json())
    .then( response => {
        console.log(response)
    })

    // clear form 
    username = ''
    password = ''
    usernameInput.value = ''
    passwordInput.value = ''
})
