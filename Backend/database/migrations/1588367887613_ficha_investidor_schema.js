/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FichaInvestidorSchema extends Schema {
  up () {
    this.create('ficha_investidors', (table) => {
      table.increments()
      table
           .integer("user_id")
           .unsigned()
           .notNullable()
           .references("id")
           .inTable("users")
           .onUpdate("CASCADE")
           .onDelete("CASCADE")
      //table.img('foto').notnullable()
      table.string("perfil", 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ficha_investidors')
  }
}

module.exports = FichaInvestidorSchema