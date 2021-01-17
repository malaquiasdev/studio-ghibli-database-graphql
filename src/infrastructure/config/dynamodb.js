function getDynamoDBConfig() {
  return {
    TABLE_NAMES: {
      CONTENTS: process.env.DYNAMODB_CONTENTS_TABLE_NAME,
    },
    AWS: {
      ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
      SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
      REGION: process.env.REGION,
    },
  };
}

module.exports = getDynamoDBConfig;
