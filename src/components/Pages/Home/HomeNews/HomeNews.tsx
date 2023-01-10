import {
  HomeNewsContainer,
  HomeNewsInfoBox,
  HomeNewsDescription,
  HomeNewsInfoTitle,
  HomeNewsPhotoBox,
  HomeNewsInfoDescription,
  HomeNewsInfoHeading,
  HomeNewsImg,
  HomeNewsInfoParagraph,
} from "./HomeNews.styles";

const DUMMY_NEWS = [
  {
    title: "58cm Pike",
    user: "somfink",
    date: "10.01.2023",
    description: "Medium pike caught near the platform on Kielce's lagoon",
    url: "./images/pike.jpg",
    id: "1",
  },
  {
    title: "28cm Perch",
    user: "newUser123",
    date: "11.01.2023",
    description: "Large perch caught near the platform on Kielce's lagoon",
    url: "./images/perch.jpg",
    id: "2",
  },
  {
    title: "65cm Zander",
    user: "angler94",
    date: "11.01.2023",
    description: "Large Zander caught close to walking path",
    url: "./images/zander.jpg",
    id: "3",
  },
];

const HomeNews = () => {
  return (
    <>
      {DUMMY_NEWS.map((news) => (
        <HomeNewsContainer key={news.id}>
          <HomeNewsInfoTitle>{news.title}</HomeNewsInfoTitle>
          <HomeNewsInfoBox>
            <HomeNewsInfoDescription>
              <HomeNewsInfoHeading>User:</HomeNewsInfoHeading>
              <HomeNewsInfoParagraph>{news.user}</HomeNewsInfoParagraph>
              <HomeNewsInfoHeading>Date:</HomeNewsInfoHeading>
              <HomeNewsInfoParagraph>{news.date}</HomeNewsInfoParagraph>
            </HomeNewsInfoDescription>
            <HomeNewsPhotoBox>
              <HomeNewsImg src={news.url} alt={news.title}/>
            </HomeNewsPhotoBox>
          </HomeNewsInfoBox>
          <HomeNewsDescription>{news.description}</HomeNewsDescription>
        </HomeNewsContainer>
      ))}
    </>
  );
};

export default HomeNews;
