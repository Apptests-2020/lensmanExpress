const endPoint = 'https://lensmanexpress.com/api/2019-07/graphql.json';
const graphQlhandler = (body, onSuccess, onFail) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': '18e4894f164b996610cbcb4f8690b6be',
  };

  fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          onSuccess(data);
          console.warn(data);
        })
        .catch((error) => {
          onFail(error);
        });
    })
    .catch((error) => {
      onFail(error);
    });
};
export default graphQlhandler;
