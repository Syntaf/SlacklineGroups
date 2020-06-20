require 'coordinate_generator'

# Start by removing all groups & admins
Group.limit(100).destroy_all
Admin.all.each { |admin| admin.destroy }

# ----------------------------- Admin Account -----------------------------
Admin.create(email: 'admin@localhost', password: 'admin').confirm
# -------------------------------------------------------------------------

# ----------------------------- Specific Group Clusters -----------------------------
vegasSlacklife = Group.create(name: 'Vegas Slacklife', slug: 'vegas-slacklife', gtype: :facebook_group)
vegasSlacklife.create_info(link: 'https://www.facebook.com/groups/798358306957010', members: 15, is_regional: false)
vegasSlacklife.create_location(lat: 36.019375, lon: -115.1116391)

lvSlacklineGroups = Group.create(name: 'LV Slackline Groups', slug: 'lv-slackline-group', gtype: :facebook_group)
lvSlacklineGroups.create_info(link: 'https://www.facebook.com/groups/522046384501227', members: 5, is_regional: false)
lvSlacklineGroups.create_location(lat: 36.044763, lon: -115.268200)

lvSlackers = Group.create(name: 'Las Vegas Slackers', slug: 'las-vegas-slackers', gtype: :facebook_page)
lvSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 30, is_regional: false)
lvSlackers.create_location(lat: 36.2185009, lon: -115.166914)

wcSlackers = Group.create(name: 'West Coast Slackers', slug: 'west-coast-slackers', gtype: :facebook_group)
wcSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 245, is_regional: true)
wcSlackers.create_location(lat: 40.573865, lon: -114.170715)

sdSlackers = Group.create(name: 'San Diego Slackers', slug: 'san-diego-slackers', gtype: :facebook_group)
sdSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 566, is_regional: false)
sdSlackers.create_location(lat: 32.733892, lon: -117.169497)

# ----------------------------- Random Group Clusters -----------------------------

cord_generator = Slg::CoordinateGenerator.new
base_lat = 50.046596
base_lon = 13.519466

500.times do |n|
  cords = cord_generator.random_location(base_lon, base_lat, 1_300_000)

  random_group = Group.create(name: "Random Group #{n}", slug: ('a'..'z').to_a.shuffle[0,8].join, gtype: :facebook_group)
  random_group.create_info(link: 'https://www.facebook.com', members: n, is_regional: false)
  random_group.create_location(lon: cords.first, lat: cords.second)
end