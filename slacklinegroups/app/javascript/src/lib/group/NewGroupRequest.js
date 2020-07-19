/**
 * Construct a request for a new group based on supplied form values
 */
class NewGroupRequest
{
  constructor(gName, gType, gLink, authorEmail, isRegional, csrf) {
    this.groupName = gName;
    this.groupType = gType;
    this.groupLink = gLink;
    this.authorEmail = authorEmail;
    this.isRegional = isRegional;
    this.csrf = csrf;
  }

  asRequestInit() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this)
    }
  }

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
        submitter_attributes: {
          email: this.authorEmail
        }
      }
    }
  }
}

export default NewGroupRequest;