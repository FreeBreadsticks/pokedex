class Pokemon < ApplicationRecord
  validates_presence_of :name, :description, :img_url, :poke_type
  validates :pokedex_num, uniqueness: true


end
