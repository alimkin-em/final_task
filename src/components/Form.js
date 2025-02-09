import { Component } from '../core/Component'

export class Form extends Component {
  setup(props) {
    this.state = { amount: '' }

    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'

    const $label = document.createElement('label')
    $label.className = 'donate-form__input-label'
    $label.textContent = 'Введите сумму в $'
    $label.setAttribute('name', 'amount')
    $label.setAttribute('type', 'number')
    $label.setAttribute('max', '100')
    $label.setAttribute('min', '1')

    const $input = document.createElement('input')
    $input.className = 'donate-form__donate-input'

    const $button = document.createElement('button')
    $button.className = 'donate-form__submit-button'
    $button.textContent = 'Задонатить'
    $button.setAttribute('disabled', '')
    $button.setAttribute('type', 'submit')

    this.$rootElement.append($label, $input, $button)

    this.$input = $input
    this.$button = $button

    $input.addEventListener('input', this.handleInput.bind(this))
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
  }

  handleInput(event) {
    this.state.amount = Number(event.target.value)
    if (!this.isValid) {
      this.$button.setAttribute('disabled', '')
    } else {
      this.$button.removeAttribute('disabled')
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid) {
      this.props.onSubmit(this.state.amount)
      this.state.amount = ''
      this.$input.value = ''
    }
  }

  get isValid() {
    if (
      !Number.isNaN(this.state.amount) &&
      this.state.amount > 0 &&
      this.state.amount <= 100
    ) {
      return true
    } else {
      return false
    }
  }
}
