import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString('ru-RU'),
      amount: props.amount,
    }
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'
    this.$rootElement.innerHTML = `${this.state.date} -&nbsp<b>$${this.state.amount}</b>`

    const $button = document.createElement('button')
    $button.className = 'delete-button'
    $button.textContent = 'Удалить'
    $button.addEventListener('click', this.handleDelete.bind(this))
    this.$rootElement.append($button)
  }

  handleDelete() {
    this.props.onDelete(this.state.id)
    this.$rootElement.remove()
  }
}
