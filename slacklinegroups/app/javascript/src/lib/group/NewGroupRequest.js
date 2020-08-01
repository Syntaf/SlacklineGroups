/**
 * Construct a request for a new group based on supplied form values
 */
class NewGroupRequest
{
  constructor(gName, gType, gLink, authorEmail, isRegional, lng, lat, csrf) {
    this.groupName = gName;
    this.groupType = gType;
    this.groupLink = gLink;
    this.authorEmail = authorEmail;
    this.isRegional = isRegional;
    this.lng = lng;
    this.lat = lat;
    this.csrf = csrf;
  }

  /**
   * Return a configuration object accepted by fetch()
   */
  asRequestInit() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this)
    }
  }

  /**
   * Convert a given instance of NewGroupRequest to JSON
   */
  toJSON() {
    return {
      authenticity_token: this.csrf,
      group: {
        type: this.groupType,
        name: this.groupName,
        info_attributes: {
          link: this.groupLink,
          members: 0,
          is_regional: this.isRegional
        },
        location_attributes: {
          latitude: this.lat,
          longitude: this.lng
        },
        submitter_attributes: {
          email: this.authorEmail
        }
      }
    }
  }
}

export default NewGroupRequest;