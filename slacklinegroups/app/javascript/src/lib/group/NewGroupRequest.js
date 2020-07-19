/**
 * Construct a request for a new group based on supplied form values
 */
class NewGroupRequest
{
  constructor(gName, gType, gLink, authorEmail, isRegional) {
    this.groupName = gName;
    this.groupType = gType;
    this.groupLink = gLink;
    this.authorEmail = authorEmail;
    this.isRegional = isRegional;
  }

  toJson() {
    return {
      type: this.groupType,
      name: this.groupname,
      info_attributes: {
        link: this.groupLink,
        members: 0,
        is_regional: this.isRegional
      }
    }
  }
}

export default NewGroupRequest;