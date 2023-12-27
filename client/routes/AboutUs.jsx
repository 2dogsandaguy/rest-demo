
import "./AboutUs.css";
import profileImg from "/images/bbq_1_.jpg"
const AboutUs = () => {
  return (
    <div className="create-container"
      style={{
        backgroundImage: `url(${profileImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
        position: 'relative',
        overflowY: 'auto',
      }}
      >
      <div className="container text-box mb-4">
      <section className="flex-row about-me-section">
        <h2 id="AboutUs">About Us</h2>
        <h2>🔥 Grill Master Extraordinaire! 🔥</h2>
          
        <p className="about-me-text">
Howdy, BBQ enthusiasts! Welcome to the smokin' sanctuary of flavor, where every sizzle tells a story, and every bite is a blissful journey through the world of American BBQ.

I'm Big AL, the grill guru behind this carnivore's haven. Born with a spatula in one hand and a BBQ sauce-stained bib in the other, I've been on a mission to turn every backyard cookout into a full-blown flavor fiesta!

Why BBQ, you ask? Well, it's not just about the sizzling meats and tantalizing aromas—it's a celebration of community, flavor, and the art of mastering fire. Here, we don't just flip burgers; we flip expectations.

From low-and-slow brisket extravaganzas to flame-kissed chicken wing perfection, each dish is a testament to my commitment to crafting mouthwatering memories. My secret ingredient? A dash of passion, a sprinkle of laughter, and a whole lot of hickory-smoked love.

Join me on this BBQ journey where the grill is hot, the drinks are cold, and the company is always top-notch. Whether you're a seasoned pitmaster or a BBQ rookie, there's a spot for you at the table.

So, grab a seat, get ready to drool, and let's turn up the heat together!

Yours in smoke and flavor,
Merica BBQ

P.S. Don't be surprised if the hickory-scented charm of this BBQ joint becomes your second home. Remember, good times and great BBQ are always on the menu! 🍖🔥🎉
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;