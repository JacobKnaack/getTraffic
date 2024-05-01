import dynamoose from 'dynamoose';

const Traffic = dynamoose.model('traffic', new dynamoose.Schema({
  id: String,
  link_encoding: String,
  referrer: String,
  timestamp: String,
  request_method: String,
  response_code: String,
  ip_address: String,
  user_agent: String
}));

export const handler = async (event) => {

  let { encoding } = event.pathParameters;
  let records = await Traffic.scan('link_encoding').eq(encoding).exec();

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(records),
  };
  return response;
};