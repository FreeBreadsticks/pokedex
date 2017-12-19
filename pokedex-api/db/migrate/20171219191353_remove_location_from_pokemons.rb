class RemoveLocationFromPokemons < ActiveRecord::Migration[5.1]
  def change
    remove_column :pokemons, :location, :string
  end
end
