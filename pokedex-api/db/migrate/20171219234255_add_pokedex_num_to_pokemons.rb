class AddPokedexNumToPokemons < ActiveRecord::Migration[5.1]
  def change
    add_column :pokemons, :pokedex_num, :integer
  end
end
