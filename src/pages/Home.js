import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Social from "../component/social";
import Team from "../component/Team";
import TeamTwo from "../component/TeamTwo";
import Cloud from "../component/cloud";
import ProfileCards from "../component/profileCards";
import Footer from "../component/footer";
const Home = () => {
    return ( 
        <div>
            <Navbar />
            <main>
                <Hero />
                <Social />
                <Team  />
                <TeamTwo />
                <Cloud />
                <ProfileCards />
            </main>
            <Footer />
        </div>
    );
}

export default Home;