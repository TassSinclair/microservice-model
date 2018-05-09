import aws from 'aws-sdk';
aws.config.update({region: 'ap-southeast-1'});

const documentClient = new aws.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

const put = (table, item) => {
    const params = {
        TableName: table,
        Item: item,
    };
    return documentClient.put(params).promise();
};

export default (table) => ({
    put: (item) => put(table, item)
})
