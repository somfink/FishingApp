export const MOCKED_NEWS_DATA = [
    {
        title: 'Title',
        image: '~/assets/images/fish.jpg',
        user: 'User',
        date: 'Date',
        description: 'Description',
        location: 'Location',
        likes: 0,
        comments: 0,
    },
    {
        title: 'Title',
        image: '~/assets/images/fish.jpg',
        user: 'User',
        date: 'Date',
        description: 'Description',
        location: 'Location',
        likes: 0,
        comments: 0,
    },
    {
        title: 'Title',
        image: '~/assets/images/fish.jpg',
        user: 'User',
        date: 'Date',
        description: 'Description',
        location: 'Location',
        likes: 0,
        comments: 0,
    }
];

const mockedData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            title: `Title ${i}`,
            image: '~/assets/images/fish.jpg',
            user: `User ${i}`,
            date: new Date().getDate(),
            description: `Description ${i}`,
            location: `Location ${i}`,
            likes: i,
            comments: i,
        });
    }
    return data;
};
