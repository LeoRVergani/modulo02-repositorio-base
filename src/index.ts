import express from 'express';
import { AppDataSource } from './database/data-source';
import { Product } from './database/entities/Product';

// get - pegar
// post - criar
// delete - deletar
// put - atualizar informação

const app = express()

AppDataSource
.initialize()
.then(() => {
    console.log("Conectado ao banco de dados")
})
.catch((error) => {
    console.error("Erro ao conectar ao banco de dados", error)
})

app.get("/products", ( request, response ) => {
    //response.send("<strong>Olá, mundo</strong>")

    const product = AppDataSource.getRepository(Product)

    const produtosNoBancoDados = product.find() // SELECT * FROM products

    response.json(produtosNoBancoDados)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})