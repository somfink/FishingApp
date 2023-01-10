import {
  HomeContainer,
  HomeHeader,
  HomeHeaderSpace,
  HomeHeading,
} from "./Home.styles";
import HomeNews from "./HomeNews/HomeNews";

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeHeading>Fishing News</HomeHeading>
      </HomeHeader>
      <HomeHeaderSpace />
      <HomeNews />
    </HomeContainer>
  );
};

export default Home;
