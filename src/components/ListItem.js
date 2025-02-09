import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleDateString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      }),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'
    this.$rootElement.textContent = `${this.state.date} - `

    const $b = document.createElement('b')
    $b.textContent = ' ' + `$${this.state.amount}`
    this.$rootElement.append($b)
  }
}
