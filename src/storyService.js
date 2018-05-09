import dataStore from './dependencies/dataStore';

const storyTable = dataStore('story');

const postStory = async (body) => {
    console.log(body);
    const story = {
        user: body.user,
        story: body.story,
        timestamp: new Date().toISOString(),
        votes: {
            total: 0,
            average: 0,
        },
    };
    await storyTable.put(story);
    return story;
};

export const handler = async (event, context, callback) => {
    
    try {
        const story = await postStory(JSON.parse(event.body));
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(story),
        });
    } catch (error) {
        callback(error);
    }
};