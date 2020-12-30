import appendProfileForm from '../static/js/signup/appendProfileForm'

let main;
let form;

beforeEach(() => {
  main = document.createElement('main')
  form = document.createElement('form')
  form.className = 'signup-form'
  main.appendChild(form)
})


// test('Signup form is replaced with profile form', () => {
//   console.log(main.children[0].className)
//   appendProfileForm('family id')

//   const profileForm = main.children[0]
//   expect(profileForm.className).toBe('profile-form')
// })


