# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Form.create(
    identifier: 'galactic_identification',
    name: 'Galactic Identification Card Renewal Request',
)
Form.create(
    identifier: 'q_zed_incident',
    name: 'QZed32 Reality Breach Incident Report'
)

GalacticIdentification.create(
    name: 'Andy Zito',
    id_number: '1D87YR409KLV339T7',
    quadrant: GalacticIdentification.quadrants[:zeta],
)
GalacticIdentification.create(
    name: 'Zeegle Gargalax',
    id_number: 'GGRR8',
    quadrant: GalacticIdentification.quadrants[:beta],
)
GalacticIdentification.create(
    name: 'MR67-JKL',
    id_number: 'Daphne',
    quadrant: GalacticIdentification.quadrants[:data],
)
GalacticIdentification.create(
    name: 'Fweeb Fimbledon',
    id_number: 'OoOoYELLOW_PARSNIP_FOUR7',
    quadrant: GalacticIdentification.quadrants[:meta],
)
GalacticIdentification.create(
    name: 'Beemo Burmington',
    id_number: '44556UQ__>',
    quadrant: GalacticIdentification.quadrants[:theta],
)
