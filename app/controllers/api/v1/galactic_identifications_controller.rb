class Api::V1::GalacticIdentificationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @galactic_identifications = GalacticIdentification.all
    render json: @galactic_identifications
  end

  def show
    @galactic_identification = GalacticIdentification.find(params[:id])
    render json: @galactic_identification
  end

  # def new
  #   @galactic_identification = GalacticIdentification.new
  # end

  def create
    @galactic_identification = GalacticIdentification.new(galactic_identification_params)
    if @galactic_identification.save
      render json: @galactic_identification
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  # def edit
  # end

  def update
    @galactic_identification = GalacticIdentification.find(params[:id])
    if @galactic_identification
      @galactic_identification.update(galactic_identification_params)
      render json: @galactic_identification
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  def destroy
    @galactic_identification = GalacticIdentification.find(params[:id])
    if @galactic_identification
      @galactic_identification.destroy()
      render json: { message: 'Deleted' }, status: 200
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  private
    def galactic_identification_params
      params.permit(:name, :id_number, :quadrant)
    end
end
