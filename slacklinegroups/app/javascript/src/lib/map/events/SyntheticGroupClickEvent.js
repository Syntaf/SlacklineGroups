/**
 * Fakes a traditional map click event on a group tile.
 */
class SyntheticGroupClickEvent
{
  constructor(group) {
    this.group = group;
  }

  get features () { return [this.feature] }
  get feature () { return { properties: this.properties } }

  get properties () {
    return {
      title: this.group.name,
      type: this._formatGroupType(this.group.type),
      link: this.group?.info.link,
      is_regional: this.group.info?.is_regional,
      lat: this.group.location?.lat,
      lng: this.group.location?.lon
    };
  }

  _formatGroupType (type) {
    return type != null ? type.replace('_', ' ') : 'Unknown';
  }
}

export default SyntheticGroupClickEvent;
