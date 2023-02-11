# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
katie = User.create(first_name: "Katie", last_name: "Foley", email: "katief906@gmail.com", password: "Ilovecoding4fun!")
karen = User.create(first_name: "Karen", last_name: "Wong", email: "karen@aol.com", password: "Bobalover2022")
alana = User.create(first_name: "Alana", last_name: "Lee", email: "alana@outlook.com", password: "Earlgraymilktea4life")
taylor = User.create(first_name: "Taylor", last_name: "Le", email: "taylor.l.kingston@gmail.com", password: "OoooLong5")
test_user = User.create(first_name: "Joe", last_name: "Schmo", email: "test@test.com", password: "abc123!")

housework = List.find_or_create_by(name: "Housework", icon: "fa-solid fa-house", color: "red", user_id: 1)
assignments = List.find_or_create_by(name: "Assignments", icon: "fa-solid fa-file", color: "orange", user_id: 1)
errands = List.find_or_create_by(name: "Errands", icon: "fa-solid fa-cart-shopping", color: "yellow", user_id: 1)
shopping = List.find_or_create_by(name: "Shopping", icon: "fa-solid fa-tag", color: "green", user_id: 5)

laundry = Task.find_or_create_by(title: "Laundry", priority: 1, description: "Wash whites and colors separately", completed: false, user_id: 1, list_id: 1)
dishes = Task.find_or_create_by(title: "Dishes", completed: false, user_id: 1, list_id: 1)
vacuum = Task.find_or_create_by(title: "Vaccum", completed: false, user_id: 1, list_id: 1)
essay = Task.find_or_create_by(title: "Essay", priority: 2, description: "History essay about WWII", completed: false, user_id: 1, list_id: 2)
system_check = Task.find_or_create_by(title: "System Check", priority: 3, description: "Passing Props", completed: false, user_id: 1, list_id: 2)
groceries = Task.find_or_create_by(title: "Grocery shopping", priority: 2, description: "Go to Trader Joe's and Star Market", completed: false, user_id: 1, list_id: 3)
oil_change = Task.find_or_create_by(title: "Oil change", completed: false, user_id: 1, list_id: 3)
dog_grooming = Task.find_or_create_by(title: "Take Fido to the groomer", completed: false, user_id: 1, list_id: 3)
marshalls = Task.find_or_create_by(title: "Marshalls", priority: 1, description: "Stock up on sweaters", completed: false, user_id: 5, list_id: 4)
dsw = Task.find_or_create_by(title: "DSW", priority: 2, description: "Return boots", completed: false, user_id: 5, list_id: 4)