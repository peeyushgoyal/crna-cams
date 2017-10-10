async function saveCustomerDetails(accessToken, userId, comments, status) {
    if (accessToken === null) {
      console.log('use local mock data');
      return require('./mock/customer-detail/customer.json');
    } else {
      // the URL is hosted by AWS API gateway
      const url = `https://api.vino9.net/cams/accounts/`;
      console.log('getting data from ', url, userId, comments);
      console.log('access token ', accessToken);
      let res = await fetch(url, {
        method: 'put',
        headers: {
            Authorization: `${accessToken}`
        },
        body: JSON.stringify({
            id: userId,
            status: status,
            comments: comments
        })
      });
      if (res.ok) {
        return JSON.parse(await res.text());
      } else {
        console.log('API call failed', res);
        return null;
      }
    }
  }

  export { saveCustomerDetails };