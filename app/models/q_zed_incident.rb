class QZedIncident < ApplicationRecord
  @@incident_types = {
    :explosive => 'Explosive',
    :implosive => 'Implosive',
    :branching => 'Branching',
    :subtemporal => 'Subtemporal',
    :other => 'Other',
  }
  enum incident_type: @@incident_types.keys

  @@incident_severitys = {
    :orion => 'Orion',
    :jupiter => 'Jupiter',
    :kuiper => 'Kuiper',
    :entropy => 'Entropy'
  }
  enum incident_severity: @@incident_severitys.keys

  # @@incident_flags = {
  #   :space_distortion,
  #   :time_distortion,
  #   :probability_distortion,
  #   :hostiles,
  #   :reverse_dilation,
  #   :coaxial_dilation,
  #   :generative_plamoid,
  #   :regenerative_plasmoid,
  #   :sync,
  #   :desync,
  #   :relativity_failure,
  #   :gravity_failure,
  #   :quantum_failure,
  #   :stream_fracture,
  #   :apple
  # }
  # enum incident_flags: @@incident_flags.keys


  enum response_type: [:coagulative, :cognitive, :coercive, :creative, :catatonic]
  enum response_level: [:red, :green, :purple, :yellow, :violet, :blue]

  validates :irt_number, presence: true
  validates :rcode, presence: true
  validates :pid_number, presence: true
  validates :incident_type, presence: true
  validates :incident_severity, presence: true
  validates :incident_flags, presence: true
  validates :response_time, presence: true
  validates :response_type, presence: true
  validates :response_level, presence: true
  validates :account_code, presence: true

  def self.options identifier
    return class_variable_get('@@' + identifier.pluralize())
  end
end
