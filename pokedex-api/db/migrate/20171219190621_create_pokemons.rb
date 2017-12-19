class CreatePokemons < ActiveRecord::Migration[5.1]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :poke_type
      t.string :img_url

      t.timestamps
    end
  end
end
