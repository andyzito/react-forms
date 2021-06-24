class GalacticIdentification < ApplicationRecord
    validates :name, presence: true
    validates :id_number, presence: true
    validates :quadrant, presence: true

    enum quadrant: [:zeta, :beta, :theta, :data, :meta]
end
