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

GalacticIdentification.create(
    name: 'Andy Zito',
    id_number: '1D87YR409KLV339T7',
    quadrant: GalacticIdentification.quadrants[:theta],
)