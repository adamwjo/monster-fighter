# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Monster.destroy_all
Move.destroy_all
Monstermove.destroy_all

user1 = User.create(username: "Bot")
user2 = User.create(username: "Marcos")
user3 = User.create(username: "bigskadoot")
user4 = User.create(username: "Team Reboot")


monster1 = Monster.create(name: "Reige", description: "Quick move by firm legs.", hp: 40, img: "https://wiki.telefang.net/images/4/4e/T1-085.gif", user_id: user1)
monster2 = Monster.create(name: "Firekokko", description: "It flies high into the air with its flaming wings to spy on enemies.", hp: 50, img: "https://wiki.telefang.net/images/9/95/T1-036.gif", user_id: user1)
monster3 = Monster.create(name: "Ghosboar", description: "The body under its fluttering cape is a secret!", hp: 60, img: "https://wiki.telefang.net/images/8/88/T1-072.gif", user_id: user1)
monster4 = Monster.create(name: "Gymganon", description: "With the muscle like armour.", hp: 55, img: "https://wiki.telefang.net/images/7/75/T1-137.gif", user_id: user1)
monster5 = Monster.create(name: "Doomsday", description: "The nuclear wave equipment it wields is very powerful.", hp: 40, img: "https://wiki.telefang.net/images/d/d1/T1-172.gif", user_id: user1)
monster6 = Monster.create(name: "Angioros", description: "A gigantic weapon is equipped on its back.", hp: 50, img: "https://wiki.telefang.net/images/9/9c/T1-170.gif", user_id: user2)
monster7 = Monster.create(name: "Telopea", description: "What's inside of the many eggs on its back?", hp: 60, img: "https://wiki.telefang.net/images/0/08/T1-014.gif", user_id: user2)
monster8 = Monster.create(name: "Gymgarth", description: "It can use its hammer to crush even faraway opponents in one attack.", hp: 55, img: "https://wiki.telefang.net/images/7/74/T1-092.gif", user_id: user2)
monster9 = Monster.create(name: "Punica", description: "Hey, hey, 'Bucket' is the word in Punica's riddle", hp: 40, img: "https://wiki.telefang.net/images/a/a0/T1-009.gif", user_id: user3)
monster10 = Monster.create(name: "Raygirth", description: "If angered, it raises up its fins, intimidating its opponents, then attacks as they recoil.", hp: 50, img: "https://wiki.telefang.net/images/d/db/T1-057.gif", user_id: user3)
monster11 = Monster.create(name: "Armgrab", description: "Grasp by claw, attack by Sabre.", hp: 60, img: "https://wiki.telefang.net/images/8/88/T1-075.gif", user_id: user3)



move1 = Move.create(name: "Flippy Kick", lowDmg: 10, highDmg: 15, description: "Do a flip. Then a kick. Then another flip.")
move2 = Move.create(name: "One Paaaanch", lowDmg: 1, highDmg: 40, description: "Be a HERO!")
move3 = Move.create(name: "Halitosis Breath", lowDmg: 5, highDmg: 25, description: "Breath deep of my essence")
move4 = Move.create(name: "Splash", lowDmg: 1, highDmg: 2, description: "Karp Karp Karp")
move5 = Move.create(name: "Irradiate", lowDmg: 20, highDmg: 30, description: "Fight dirty. Split atoms then split lips.")
move6 = Move.create(name: "Report to the Constabulary", lowDmg: 15, highDmg: 25, description: "Call the popo cuz you a punk snitch")
move7 = Move.create(name: "Freezy Blasty Sticky Ray", lowDmg: 20, highDmg: 25, description: "Created by a senile supergenius. You're not sure how it works.")
move8 = Move.create(name: "Gaze of Mild Disapproval", lowDmg: 15, highDmg: 15, description: "*disapproval personified*")


30.times do
  Monstermove.create(monster_id: Random.new.rand(11), move_id: Random.new.rand(8))
end
