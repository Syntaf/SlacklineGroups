/**
 * Constructs a request for a query on groups given a city or name
 */
class GroupQueryRequest
{
  constructor(queryString) {
    this.queryString = queryString;
  }

  asRequest() {
    return new Request(`/groups/search?q=${this.queryString}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  toJSON() {
    return {
      q: this.queryString
    };
  }
}

export default GroupQueryRequest;
