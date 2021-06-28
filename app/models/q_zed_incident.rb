class QZedIncident < ApplicationRecord
  enum incident_type: [:explosive, :implosive, :branching, :subtemporal, :other]
  enum incident_severity: [:orion, :jupiter, :kuiper, :entropy]
  enum incident_flags: [:space_distortion, :time_distortion, :probability_distortion, :hostiles, :reverse_dilation, :coaxial_dilation,
    :generative_plamoid, :regenerative_plasmoid, :sync, :desync, :relativity_failure, :gravity_failure,
    :quantum_failure, :stream_fracture, :apple
  ]
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
    return self.send(identifier.pluralize()).keys
  end
end
