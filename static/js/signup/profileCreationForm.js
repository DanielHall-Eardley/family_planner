import createFormInput from '../common/createFormInput'
import createFormTitle from '../common/createFormTitle'
import createFormBtn from '../common/createFormBtn'

const profileCreationFragment = new DocumentFragment()

createFormTitle('Enter your information', profileCreationFragment)

const formInputs = [
  {
    id: 'family-member-name',
    name: 'firstName',
    type: 'text',
    label: 'Enter your first name'
  },
  {
    id: 'family-member-dob',
    name: 'dateOfBirth',
    type: 'date',
    label: 'Enter your date of birth'
  },
  {
    id: 'family-member-email',
    name: 'email',
    type: 'text',
    label: 'Enter your email'
  },
  {
    id: 'family-member-relationship',
    name: 'relationship',
    type: 'text',
    label: 'Describe your family relationship eg, "Mother", "Father", "Child"'
  },
]

createFormInput(formInputs, profileCreationFragment)
createFormBtn('Create your profile', profileCreationFragment)

export default profileCreationFragment
