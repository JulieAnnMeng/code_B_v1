puts "seeding Users...🌱"
julie = User.create(first_name: 'Julie', last_name: 'Meng', username: 'JMeng', password: 'password', icon: 'https://www.nicepng.com/png/detail/41-415386_vault-girl-fallout-shelter-vault-girl.png')
bob = User.create(first_name: 'Bob', last_name: 'Joe', username: 'BJoe', password: 'password', icon: 'https://storage.googleapis.com/snapchat-lens-assets/f1a09194-f02d-43ed-92b8-62e843179ff0/lensStudio/Guides/img/creating_an_icon_world_example.png')
frank = User.create(first_name: 'Frank', last_name: 'Sinatra', username: 'FSinatra', password: 'password')

puts "seeding Discussions... 🌱"
topic1 = Discussion.create(user: julie, topic: "Environment Setup", discussion: "Found a great template for Rails backend and react frontend. Check out this repository: https://github.com/learn-co-curriculum/project-template-react-rails-api")
topic2 = Discussion.create(user: bob, topic: "Online lessons", discussion: "Best site for online coding lessons")
topic3 = Discussion.create(user: bob, topic: "CSS", discussion: "Found a great site for CSS color palettes: https://color.adobe.com/ check it out!")
topic4 = Discussion.create(user: frank, topic: "JS Window scroll", discussion: "How do you scroll to the top of the window automatically?")

puts "seeding Comments... 🌱"
comment1 = Comment.create(user: bob, discussion: topic1, comment: "Awesome! Thanks for sharing")
comment2 = Comment.create(user: julie, discussion: topic2, comment: "The Odin project is a great site!")
comment3 = Comment.create(user: frank, discussion: topic1, comment: "Check your middleware")
comment4 = Comment.create(user: bob, discussion: topic4, comment: "window.scrollTo(0, 0) for vanilla JS")
comment5 = Comment.create(user: julie, discussion: topic4, comment: "This site has more info if your using react and want to scroll automatically with each URL change: https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/")

puts "seeding Interests... 🌱"
interest1 = Interest.create(user: julie, discussion: topic1)
interest2 = Interest.create(user: bob, discussion: topic2)
interest3 = Interest.create(user: julie, discussion: topic2)
interest4 = Interest.create(user: bob, discussion: topic1)
interest5 = Interest.create(user: julie, discussion: topic4)