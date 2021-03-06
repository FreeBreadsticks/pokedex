class Api::PokemonsController < ApplicationController
  before_action :set_pokemon, only: [:show, :update, :destroy]

  # GET /pokemons
  def index
    @pokemons = Pokemon.all

    render json: @pokemons
  end

  # GET /pokemons/1
  def show
    render json: @pokemon
  end

  # POST /pokemons
  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.save
      render json: @pokemon, status: :created
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pokemons/1
  def update
    if @pokemon.update(pokemon_params)
      render json: @pokemon
    else
      render json: @pokemon.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pokemons/1
  def destroy
    if @pokemon.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this Pokemon" }, status: 400
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pokemon
      @pokemon = Pokemon.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def pokemon_params
      params.require(:pokemon).permit(:name, :description, :poke_type, :img_url, :pokedex_num)
    end
end
