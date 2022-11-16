/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => { Route.resource('/users', 'UsersController') }).middleware('auth')
Route.post('/login', 'UsersController.login')

Route.group(() => {
    Route.resource('/investidor', 'InvestidorsController').apiOnly()
    Route.resource('/acao', 'AcaosController').apiOnly()
    Route.resource('/tesouro', 'TesourosController').apiOnly()
    Route.resource('/favorito', 'FavoritosController').apiOnly()
    Route.resource('/rentabilidade', 'RentabilidadesController').apiOnly()
    Route.resource('/comparacao', 'ComparacaosController').apiOnly()
    Route.resource('/calendarioR', 'CalendariorentabilidadesController').apiOnly()
    Route.resource('/calendarioC', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/comparacaoacao', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/comparacaotesouro', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/favoritoacao', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/favoritotesouro', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/rentabilidadeacao', 'CalendariocomparacaosController').apiOnly()
    Route.resource('/rentabilidadetesouro', 'CalendariocomparacaosController').apiOnly()
}).middleware('auth')
