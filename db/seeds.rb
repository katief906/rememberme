# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
katie = User.create(email: "katief906@gmail.com", password: "Ilovecoding4fun!")
karen = User.create(email: "karen@aol.com", password: "Bobalover2022")
alana = User.create(email: "alana@outlook.com", password: "Earlgraymilktea4life")
taylor = User.create(email: "taylor.l.kingston@gmail.com", password: "OoooLong5")

housework = List.find_or_create_by(name: "Housework", user_id: 1)
assignments = List.find_or_create_by(name: "Assignments", user_id: 1)
errands = List.find_or_create_by(name: "Errands", user_id: 1)