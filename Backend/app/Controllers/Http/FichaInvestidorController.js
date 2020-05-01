const FichaInvestidor = use('App/Models/FichaInvestidor')

class FichaInvestidorController {

  async index ({ request, response, view }) {
      const fichainvestidor = await FichaInvestidor.all()

      return fichainvestidor
  }


  async store ({ request, response }) {
      const data = request.only(['perfil'])

      const fichainvestidor = FichaInvestidor.create({data})

      return fichainvestidor
  }

  async show ({ params, request, response, view }) {

      const fichainvestidor = FichaInvestidor.findOrFail(params)
      
      return fichainvestidor
  }


  async update ({ params, request, response }) {
      const fichainvestidor = await FichaInvestidor.findOrFail(params)
      const data = request.only([
        'perfil'
      ])

      fichainvestidor.merge(data)

      await fichainvestidor.save()

      return fichainvestidor
  }

  async destroy ({ params, request, response }) {
    const fichainvestidor = await FichaInvestidor.findOrFail(params)

    await fichainvestidor.delete()
  }
}

