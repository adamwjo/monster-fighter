# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   moves = move.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', move: moves.first)

Monster.destroy_all
Move.destroy_all
Monstermove.destroy_all

user1 = User.create(username: "Bot", password: "BotSpot1")
user2 = User.create(username: "Marcos", password: "password1")
user3 = User.create(username: "bigskadoot", password: "password1")
user4 = User.create(username: "Team Reboot", password: "password1")


monster1 = Monster.create(name: "Reige", description: "Quick move by firm legs.", hp: 40, img: "https://wiki.telefang.net/images/4/4e/T1-085.gif", user: user1)
monster2 = Monster.create(name: "Firekokko", description: "It flies high into the air with its flaming wings to spy on enemies.", hp: 50, img: "https://wiki.telefang.net/images/9/95/T1-036.gif", user: user1)
monster3 = Monster.create(name: "Ghosboar", description: "The body under its fluttering cape is a secret!", hp: 60, img: "https://wiki.telefang.net/images/8/88/T1-072.gif", user: user1)
monster4 = Monster.create(name: "Gymganon", description: "With the muscle like armour.", hp: 55, img: "https://wiki.telefang.net/images/7/75/T1-137.gif", user: user1)
monster5 = Monster.create(name: "Doomsday", description: "The nuclear wave equipment it wields is very powerful.", hp: 40, img: "https://wiki.telefang.net/images/d/d1/T1-172.gif", user: user1)
monster6 = Monster.create(name: "Angioros", description: "A gigantic weapon is equipped on its back.", hp: 50, img: "https://wiki.telefang.net/images/9/9c/T1-170.gif", user: user2)
monster7 = Monster.create(name: "Telopea", description: "What's inside of the many eggs on its back?", hp: 60, img: "https://wiki.telefang.net/images/0/08/T1-014.gif", user: user2)
monster8 = Monster.create(name: "Gymgarth", description: "It can use its hammer to crush even faraway opponents in one attack.", hp: 55, img: "https://wiki.telefang.net/images/7/74/T1-092.gif", user: user2)
monster9 = Monster.create(name: "Punica", description: "Hey, hey, 'Bucket' is the word in Punica's riddle", hp: 40, img: "https://wiki.telefang.net/images/a/a0/T1-009.gif", user: user3)
monster10 = Monster.create(name: "Raygirth", description: "If angered, it raises up its fins, intimidating its opponents, then attacks as they recoil.", hp: 50, img: "https://wiki.telefang.net/images/d/db/T1-057.gif", user: user3)
monster11 = Monster.create(name: "Armgrab", description: "Grasp by claw, attack by Sabre.", hp: 60, img: "https://wiki.telefang.net/images/8/88/T1-075.gif", user: user3)
monster12 = Monster.create(name: "Brunomon", description: "When you stare into the abyss long enough, the abyss stares back.", hp: 200, img: "https://i.imgur.com/xlKHOah.png", user: user1)




move1 = Move.create(name: "Flippy Kick", lowDmg: 10, highDmg: 15, description: "Do a flip. Then a kick. Then another flip.", img: "https://images.vexels.com/media/users/3/129274/isolated/preview/32c4ae2adb446f081c496e8dd015c594-backflip-silhouette-by-vexels.png")

move2 = Move.create(name: "One Paaaanch", lowDmg: 1, highDmg: 40, description: "Be a HERO!", img:"https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5ab122ad6d2a73ff3ab81da3/1521558191830/one_punch_man.jpg?format=2500w")

move3 = Move.create(name: "Halitosis Breath", lowDmg: 5, highDmg: 25, description: "Breath deep of my essence", img: "https://media1.tenor.com/images/1da1875014215517803948327b33f2cf/tenor.gif?itemid=4198167")

move4 = Move.create(name: "Splash", lowDmg: 1, highDmg: 2, description: "Karp Karp Karp", img: "https://d.facdn.net/art/archir/1445267469/1445237825.archir_magikarp_used_splash_by_ruth_tay-d7pgrvksmall.jpg")

move5 = Move.create(name: "Irradiate", lowDmg: 20, highDmg: 30, description: "Fight dirty. Split atoms. Then split lips.", img: "https://www.maxpixel.net/static/photo/1x/Light-Beam-Green-Plays-Of-Light-Laser-Laser-Beams-1757807.jpg")

move6 = Move.create(name: "Report to the Constabulary", lowDmg: 15, highDmg: 25, description: "I say, unhand me foul monster, or face my barrister", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQip2vo4kOTO940lxluxQAL3t3H1ocrZzzzmhV_Pd0tdbQrDPod")

move7 = Move.create(name: "Freezy Blasty Sticky Ray", lowDmg: 20, highDmg: 25, description: "Created by a senile supergenius. You're not sure how it works.", img: "http://www.weaponreplica.com/wp-content/uploads/2012/04/Dr-Grordborts-Righteous-Bison-Ray-Gun-Replica.jpg")

move8 = Move.create(name: "Gaze of Mild Disapproval", lowDmg: 15, highDmg: 15, description: "*disapproval personified*", img: "http://nanoict.org/wp-content/uploads/2018/10/batman-slapping-robin-memes-funny-batman-memes-and-pictures-4.jpg")

move9 = Move.create(name: "Super Smash", lowDmg:20 , highDmg: 20, description: "Smash Ultimate, now with playable Hello Kitty character", img: "https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDYvMTQvMjAvNDgvMzQvMTM3L2NocmFjdGVyX2hlbGxvX2tpdHR5LmpwZyJdLFsicCIsIm9wdGltIl1d/chracter-hello-kitty.jpg?sha=bb1658addec8d1b7")

move10 = Move.create(name: "La Chancla", lowDmg: 5, highDmg: 10, description: "Estas a punto de ser batido", img: "https://banner2.kisspng.com/20180203/rkq/kisspng-slipper-flip-flops-sandal-clip-art-sandals-cliparts-5a75c9a7850666.8156695015176687755449.jpg")

move11 = Move.create(name: "B00000000000000M", lowDmg: 30, highDmg: 40, description: "Here comes the....", img: "https://i.kym-cdn.com/photos/images/newsfeed/001/105/938/cf1.jpg")

move12 = Move.create(name: "RITE ON!", lowDmg: 100, highDmg: 101, description: "Get Siced", img: "https://thechive.files.wordpress.com/2018/02/lead100.jpg?quality=85&strip=info")

Monstermove.create(monster_id: 1, move_id: 2)
Monstermove.create(monster_id: 1 ,move_id: 4)
Monstermove.create(monster_id: 1, move_id: 9)
Monstermove.create(monster_id: 1, move_id: 8)

Monstermove.create(monster_id: 2, move_id: 12)
Monstermove.create(monster_id: 2, move_id: 11)
Monstermove.create(monster_id: 2, move_id: 10)
Monstermove.create(monster_id: 2, move_id: 9)

Monstermove.create(monster_id: 3, move_id: 1)
Monstermove.create(monster_id: 3, move_id: 8)
Monstermove.create(monster_id: 3, move_id: 2)
Monstermove.create(monster_id: 3, move_id: 7)

Monstermove.create(monster_id: 4, move_id: 3)
Monstermove.create(monster_id: 4, move_id: 5)
Monstermove.create(monster_id: 4, move_id: 6)
Monstermove.create(monster_id: 4, move_id: 1)

Monstermove.create(monster_id: 5, move_id: 2)
Monstermove.create(monster_id: 5, move_id: 1)
Monstermove.create(monster_id: 5, move_id: 5)
Monstermove.create(monster_id: 5, move_id: 3)

Monstermove.create(monster_id: 6, move_id: 1)
Monstermove.create(monster_id: 6, move_id: 2)
Monstermove.create(monster_id: 6, move_id: 3)
Monstermove.create(monster_id: 6, move_id: 4)

Monstermove.create(monster_id: 7, move_id: 5)
Monstermove.create(monster_id: 7, move_id: 6)
Monstermove.create(monster_id: 7, move_id: 7)
Monstermove.create(monster_id: 7, move_id: 8)

Monstermove.create(monster_id: 8, move_id: 4)
Monstermove.create(monster_id: 8, move_id: 1)
Monstermove.create(monster_id: 8, move_id: 7)
Monstermove.create(monster_id: 8, move_id: 9)

Monstermove.create(monster_id: 9,move_id: 1)
Monstermove.create(monster_id: 9,move_id: 5)
Monstermove.create(monster_id: 9,move_id: 2)
Monstermove.create(monster_id: 9,move_id: 8)

Monstermove.create(monster_id: 10,move_id: 1)
Monstermove.create(monster_id: 10,move_id: 2)
Monstermove.create(monster_id: 10,move_id: 3)
Monstermove.create(monster_id: 10,move_id: 4)

Monstermove.create(monster_id: 11,move_id: 5)
Monstermove.create(monster_id: 11,move_id: 6)
Monstermove.create(monster_id: 11,move_id: 7)
Monstermove.create(monster_id: 11,move_id: 8)

Monstermove.create(monster_id: 12, move_id: 8)
Monstermove.create(monster_id: 12, move_id: 10)
Monstermove.create(monster_id: 12, move_id: 11)
Monstermove.create(monster_id: 12, move_id: 12)
