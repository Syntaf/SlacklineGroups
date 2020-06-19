# Start by removing all groups & admins
Group.all.each { |group| group.destroy }
Admin.all.each { |admin| admin.destroy }

# ----------------------------- Admin Account -----------------------------
Admin.create(email: 'admin@localhost', password: 'admin').confirm
# -------------------------------------------------------------------------

# ----------------------------- Group Cluster in Las Vegas -----------------------------
vegasSlacklife = Group.create(name: 'Vegas Slacklife', slug: 'vegas-slacklife', gtype: :facebook_group)
vegasSlacklife.create_info(link: 'https://www.facebook.com/groups/798358306957010', members: 15, is_regional: false)
vegasSlacklife.create_location(lat: 36.019375, lon: -115.1116391)

lvSlacklineGroups = Group.create(name: 'LV Slackline Groups', slug: 'lv-slackline-group', gtype: :facebook_group)
lvSlacklineGroups.create_info(link: 'https://www.facebook.com/groups/522046384501227', members: 5, is_regional: false)
lvSlacklineGroups.create_location(lat: 36.044763, lon: -115.268200)

lvSlackers = Group.create(name: 'Las Vegas Slackers', slug: 'las-vegas-slackers', gtype: :facebook_page)
lvSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 30, is_regional: false)
lvSlackers.create_location(lat: 36.2185009, lon: -115.166914)
# ---------------------------------------------------------------------------------------

# ----------------------------- Regional Group -----------------------------
wcSlackers = Group.create(name: 'West Coast Slackers', slug: 'west-coast-slackers', gtype: :facebook_group)
wcSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 245, is_regional: true)
wcSlackers.create_location(lat: 40.573865, lon: -114.170715)
# --------------------------------------------------------------------------

# ----------------------------- Single Group -----------------------------
sdSlackers = Group.create(name: 'San Diego Slackers', slug: 'san-diego-slackers', gtype: :facebook_group)
sdSlackers.create_info(link: 'https://www.grantmercer.dev/', members: 566, is_regional: false)
sdSlackers.create_location(lat: 32.733892, lon: -117.169497)
# ------------------------------------------------------------------------