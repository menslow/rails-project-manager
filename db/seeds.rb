# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ProjectUser.delete_all

project_1 = Project.find(1)
project_2 = Project.find(2)
project_3 = Project.find(3)

user_1 = User.find(1)
user_2 = User.find(2)
user_3 = User.find(3)

ProjectUser.create(project: project_1, user: user_1, role: 10)
ProjectUser.create(project: project_1, user: user_2, role: 1)

ProjectUser.create(project: project_2, user: user_1, role: 1)
ProjectUser.create(project: project_2, user: user_2, role: 10)
ProjectUser.create(project: project_2, user: user_3, role: 1)

ProjectUser.create(project: project_3, user: user_1, role: 1)
ProjectUser.create(project: project_3, user: user_2, role: 1)
ProjectUser.create(project: project_3, user: user_3, role: 10)


