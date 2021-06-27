class Api::V1::QZedIncidentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @q_zed_incidents = QZedIncident.all
    render json: @q_zed_incidents
  end

  def show
    @q_zed_incident = QZedIncident.find(params[:id])
    render json: @q_zed_incident
  end

  # def new
  #   @q_zed_incident = QZedIncident.new
  # end

  def create
    @q_zed_incident = QZedIncident.new(q_zed_incident_params)
    if @q_zed_incident.save
      render json: @q_zed_incident
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  # def edit
  # end

  def update
    @q_zed_incident = QZedIncident.find(params[:id])
    if @q_zed_incident
      @q_zed_incident.update(q_zed_incident_params)
      render json: @q_zed_incident
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  def destroy
    @q_zed_incident = QZedIncident.find(params[:id])
    if @q_zed_incident
      @q_zed_incident.destroy()
      render json: { message: 'Deleted' }, status: 200
    else
      render error: { error: 'Unable to comply' }, status: 500
    end
  end

  private
    def q_zed_incident_params
      params.permit(:irt_number, :rcode, :pid_number, :incident_type, :incident_severity,
        :incident_flags, :response_time, :response_type, :response_level, :account_code)
    end
end
