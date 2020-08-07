require 'coordinate_generator'

# # Start by removing all groups & admins
# Group.limit(100).destroy_all
# Admin.all.each { |admin| admin.destroy }

# # ----------------------------- Admin Account -----------------------------
# Overseer.create(email: 'admin@localhost', password: 'admin').confirm
# # -------------------------------------------------------------------------

# # ----------------------------- Specific Group Clusters -----------------------------
# vegasSlacklife = Group.new(name: 'Vegas Slacklife', slug: 'vegas-slacklife', gtype: :facebook_group)
# vegasSlacklife.info = Info.new(link: 'https://www.facebook.com/groups/798358306957010', members: 15, is_regional: false)
# vegasSlacklife.location = Location.new(lat: 36.019375, lon: -115.1116391)
# vegasSlacklife.save

# lvSlacklineGroups = Group.new(name: 'LV Slackline Groups', slug: 'lv-slackline-group', gtype: :facebook_group)
# lvSlacklineGroups.info = Info.new(link: 'https://www.facebook.com/groups/522046384501227', members: 5, is_regional: false)
# lvSlacklineGroups.location = Location.new(lat: 36.044763, lon: -115.268200)
# lvSlacklineGroups.save

# lvSlackers = Group.new(name: 'Las Vegas Slackers', slug: 'las-vegas-slackers', gtype: :facebook_page)
# lvSlackers.info = Info.new(link: 'https://www.grantmercer.dev/', members: 30, is_regional: false)
# lvSlackers.location = Location.new(lat: 36.2185009, lon: -115.166914)

# wcSlackers = Group.create(name: 'West Coast Slackers', slug: 'west-coast-slackers', gtype: :facebook_group)
# wcSlackers.info = Info.new(link: 'https://www.grantmercer.dev/', members: 245, is_regional: true)
# wcSlackers.location = Location.new(lat: 40.573865, lon: -114.170715)

# sdSlackers = Group.create(name: 'San Diego Slackers', slug: 'san-diego-slackers', gtype: :facebook_group)
# sdSlackers.info = Info.new(link: 'https://www.grantmercer.dev/', members: 566, is_regional: false)
# sdSlackers.location = Location.new(lat: 32.733892, lon: -117.169497)

# ----------------------------- Random Group Clusters -----------------------------

# cord_generator = Slg::CoordinateGenerator.new
# base_lat = 50.046596
# base_lon = 13.519466

# 500.times do |n|
#   cords = cord_generator.random_location(base_lon, base_lat, 1_300_000)

#   random_group = Group.new(name: "Random Group #{n}", slug: ('a'..'z').to_a.shuffle[0,8].join, gtype: :facebook_group)
#   random_group.info = Info.new(link: 'https://www.facebook.com', members: n, is_regional: false)
#   random_group.location = Location.new(lon: cords.first, lat: cords.second)
#   random_group.save
# end