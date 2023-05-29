import { type NewsItemData } from '~/components/Home/NewsList';

export const mockedData = () => {
    const data: NewsItemData[] = [];
    const imageArray: string[] = [
        'https://images.unsplash.com/photo-1478527687007-bfbac0626a7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
        'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg',
        'https://images.unsplash.com/photo-1506873589908-63bc22175dd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    ];

    for (let i = 0; i < 100; i++) {
        data.push({
            title: `Title ${i}`,
            image: imageArray[Math.floor(Math.random() * imageArray.length)],
            user: `User ${i}`,
            date: new Date().getDate(),
            description: `Description ${i}`,
            location: `Location ${i}`,
            likes: i,
            comments: i + 1,
            id: `${i}`,
        });
    }
    return data;
};
