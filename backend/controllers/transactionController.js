let database = require('../data/transactions')
const {v4: uuidv4} = require('uuid')

const urlBase = '/transactions'

module.exports = (router) => {
  router.get(urlBase, (req, res) => {
    res.json(database)
  })

  // get por tipo de transação
  router.get(`${urlBase}/byType`, (req, res) => {
    if (!req.query.type) {
      return res.status(400).json({ message: "Tipo é obrigatório." })
    }

    const type = req.query.type.toLowerCase()
    const filteredTransactions = database.filter(item => item.type.toLowerCase() === type)

    if (filteredTransactions.length > 0) {
      res.json(filteredTransactions)
    } else {
      res.status(404).json({ message: "Nenhuma transação encontrada para o tipo especificado." })
    }
  })

  // Calcular balanço
  router.get(`${urlBase}/balance`, (req, res) => {
    let totalCompras = 0;
    let totalVendas = 0;

    database.forEach(transaction => {
      if (transaction.type.toLowerCase() === 'compra') {
        totalCompras += transaction.price * transaction.quantity
      } else if (transaction.type.toLowerCase() === 'venda') {
        totalVendas += transaction.price * transaction.quantity
      }
    })
    const balance = totalVendas - totalCompras;
    res.json({ totalCompras, totalVendas, balance })
  })

  // get por id
  router.get(`${urlBase}/:id`, (req, res) => {
    const id = req.params.id
    const transaction = database.find(item => item.id === id)
    if (transaction) {
      res.json(transaction)
    } else {
      res.status(404).json({ message: "Transação não encontrada." })
    }
  })

  router.post(urlBase, (req, res) => {
    if (!req.body.coinName || !req.body.price || !req.body.quantity || !req.body.type || !req.body.transactionDate) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios: Nome da moeda, Preço, Quantidade, Tipo da operação, Data da transação." })
    }

    const price = parseFloat(req.body.price);
    const quantity = parseFloat(req.body.quantity);

    if (isNaN(price) || price < 0 || isNaN(quantity) || quantity < 0) {
      return res.status(400).json({ message: "Preço e quantidade devem ser números não negativos." })
    }

    const validTypes = ['compra', 'venda']
    const type = req.body.type.toLowerCase()
    if (!validTypes.includes(type)) {
      return res.status(400).json({ message: "Tipo da operação inválido. Os tipos válidos são compra e venda." })
    }

    const newTransaction = {
      id: uuidv4(),
      coinName: req.body.coinName,
      price: price,
      quantity: quantity,
      type: type,
      transactionDate: req.body.transactionDate
    }
    database.push(newTransaction)
    res.status(201).json(newTransaction)
  })

  router.put(`${urlBase}/:id`, (req, res) => {
    const { id } = req.params
    let transaction = database.find(item => item.id === id)

    if (!transaction) {
      return res.status(404).json({ message: "Transação não encontrada." })
    }

    const { coinName, price, quantity, type, transactionDate } = req.body;

    if (!coinName || !price || !quantity || !type || !transactionDate) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios: Nome da moeda, Preço, Quantidade, Tipo da operação, Data da transação." })
    }

    const priceNumber = parseFloat(price)
    const quantityNumber = parseFloat(quantity)

    if (isNaN(priceNumber) || priceNumber < 0 || isNaN(quantityNumber) || quantityNumber < 0) {
      return res.status(400).json({ message: "Preço e quantidade devem ser números não negativos." })
    }

    const validTypes = ['compra', 'venda']
    if (!validTypes.includes(type.toLowerCase())) {
      return res.status(400).json({ message: "Tipo da operação inválido. Os tipos válidos são compra e 'venda'." })
    }

    transaction.coinName = coinName
    transaction.price = priceNumber
    transaction.quantity = quantityNumber
    transaction.type = type
    transaction.transactionDate = transactionDate

    res.json(transaction)
  })

  router.delete(`${urlBase}/:id`, (req, res) => {
    const { id } = req.params
    const index = database.findIndex(item => item.id === id)

    if (index === -1) {
      return res.status(404).json({ message: "Transação não encontrada." })
    }

    database.splice(index, 1)

    res.status(204).send()
  })
}
