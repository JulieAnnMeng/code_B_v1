puts "seeding Users...🌱"
julie = User.create(first_name: 'Julie', last_name: 'Meng', username: 'JMeng', password: 'password')
bob = User.create(first_name: 'Bob', last_name: 'Joe', username: 'BJoe', password: 'password')

puts "seeding Discussions... 🌱"
topic1 = Discussion.create(user: julie, topic: "Environment Setup", discussion: "Found a great template for Rails backend and react frontend. Check out this repository: https://github.com/learn-co-curriculum/project-template-react-rails-api")
topic2 = Discussion.create(user: bob, topic: "Online lessons", discussion: "Best site for online coding lessons")

puts "seeding Comments... 🌱"
comment1 = Comment.create(user: bob, discussion: topic1, comment: "Awesome! Thanks for sharing")
comment2 = Comment.create(user: julie, discussion: topic2, comment: "The Odin project is a great site!")

puts "seeding Interests... 🌱"
interest1 = Interest.create(user: julie, discussion: topic1)
interest2 = Interest.create(user: bob, discussion: topic2)
interest3 = Interest.create(user: julie, discussion: topic2)
interest4 = Interest.create(user: bob, discussion: topic1)