import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'

export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] }

    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'app'

    const $h1 = document.createElement('h1')
    $h1.className = 'total-amount'
    $h1.textContent = 'Итого: $'

    const $span = document.createElement('span')
    $span.textContent = `${this.state.total}`
    $h1.appendChild($span)

    this.$rootElement.appendChild($h1)

    this.$total = $span

    // ...

    const $donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) })
    this.$rootElement.appendChild($donateForm.$rootElement)

    this.$donateList = new List()
    this.$rootElement.appendChild(this.$donateList.$rootElement)
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount,
      onDelete: this.onItemDelete.bind(this),
    })
    this.state.total += Number(amount)
    this.state.donates.push(item)
    this.$donateList.addItem(item)
    this.$total.textContent = this.state.total
    // ...
  }

  onItemDelete(id) {
    const itemIndex = this.state.donates.findIndex(
      (item) => item.state.id == id
    )
    this.$total.textContent = this.state.total -= Number(
      this.state.donates[itemIndex].state.amount
    )
    this.state.donates.splice(itemIndex, 1)
  }
}
