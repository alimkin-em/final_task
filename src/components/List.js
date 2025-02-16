import { Component } from '../core/Component'

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donates-container'

    const $h2 = document.createElement('h2')
    $h2.className = 'donates-container__title'
    $h2.textContent = 'Список донатов'

    const $div = document.createElement('div')
    $div.className = 'donates-container__donates'

    this.$rootElement.append($h2, $div)

    this.$listContainer = $div

    // ...
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }

  deleteItem(item) {
    item.remove()
  }
}
