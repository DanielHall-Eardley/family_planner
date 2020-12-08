import createFormInput from '../common/createFormInput'
import createFormTitle from '../common/createFormTitle'
import createFormBtn from '../common/createFormBtn'

const eventForm = new DocumentFragment()

createFormTitle('Create event', eventForm)

const eventInputs = [
  {
    id: 'alert-title',
    name: 'title',
    type: 'text',
    label: 'Enter a name for your event'
  },
  {
    id: 'alert-date',
    name: 'date',
    type: 'date',
    label: 'Enter a date for your event'
  },
  {
    id: 'img-url',
    name: 'imgUrl',
    type: 'text',
    label: 'Link an image to your event'
  }
]

createFormInput(eventInputs, eventForm)

const select = document.createElement('select')
select.className = 'alert-type'
select.setAttribute('name', 'eventType')

const options = ['Select a event type', 'Boring chore task', 'Happy social funtimes']
for (let optName of options) {
  const option = document.createElement('option')
  const optionName = document.createTextNode(optName)

  if (optName === 'Select a event type') {
    option.setAttribute('selected', true)
    option.setAttribute('disabled', true)
  }

  option.appendChild(optionName)
  select.appendChild(option)
}

const descLabel = document.createElement('label')
descLabel.setAttribute('for', 'alert-desc')
const descLabelText = document.createTextNode('Enter a brief description')
descLabel.appendChild(descLabelText)

const typeLabel = document.createElement('label')
typeLabel.setAttribute('for', 'alert-type')
const typeLabelText = document.createTextNode('Enter a brief description')
typeLabel.appendChild(typeLabelText)

const textarea = document.createElement('textarea')
textarea.setAttribute('name', 'eventDescription')
textarea.id = 'alert-desc'

eventForm.appendChild(typeLabel)
eventForm.appendChild(select)
eventForm.appendChild(descLabel)
eventForm.appendChild(textarea)

createFormBtn('Create', eventForm)

export default eventForm
