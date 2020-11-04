import createBtn from '../static/js/common/createBtn'

const btn = document.createElement('button')
btn.addEventListener = jest.fn()
const cb = jest.fn()
const mockDocument = {
  querySelector: jest.fn().mockReturnValue(btn)
}

test('Event listener is added to createBtn', () => {
  createBtn(cb, mockDocument)

  expect(mockDocument.querySelector).toBeCalledWith('.create-btn')
  expect(mockDocument.querySelector).toHaveReturnedWith(btn)
  expect(btn.addEventListener).toBeCalledWith('click', cb)
})