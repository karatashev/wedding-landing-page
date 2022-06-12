import Box from "../Box/Box";
import "./Cards.css";
import cardLogo from "../../images/slide-home-main-image-2.jpg"

const Cards = () => {
  return (
    <div>
      <div class="section text-center">
        <div class="inner">
          <div class="text-content">
            <h2>The Easy Way To Create Elegance</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
              aliquid accusamus pariatur.
            </p>
          </div>

          <div class="boxes-wrapper">
            <Box
              img={cardLogo}
              title="Fully Responsive"
              text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
              link="https://www.google.com/"
            />
              <Box
              img={cardLogo}
              title="Fully Responsive"
              text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
              link="https://www.google.com/"
            />
              <Box
              img={cardLogo}
              title="Fully Responsive"
              text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
              link="https://www.google.com/"
            />
              <Box
              img={cardLogo}
              title="Fully Responsive"
              text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment"
              link="https://www.google.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
