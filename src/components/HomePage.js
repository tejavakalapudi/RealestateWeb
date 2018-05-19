import React from "react";
import { connect } from "react-redux";
import { 
    Container, 
    Jumbotron,
    Row, 
    Col,
    Nav,
    NavItem,
    Navbar 
} from "reactstrap";
import { NavLink } from "react-router-dom"; 
import AboutUsPage from "./AboutUsPage";
import GridComponent from "./Grid";
import welcomeImage from "../../public/images/CementBG2.png";
import Header from "./Header";
import Contact from "./ContactUsPage";
import GoogleMapComponent from "./GoogleMap";
import WelcomeScreen from "./WelcomeScreen";

class HomePage extends React.Component {

    state = {
        activeclass: ""
    }

    toggle = () => {
        
        this.setState({
            //activeclass: "fade"
        });
    }

    render(){
        
        window.addEventListener('resize', () =>{

        }); 

        return (
            <div>
                
                <WelcomeScreen />
                
                <div className = "buyers-guide-container mx-auto">

                    <Container>

                        <Header activeTab = "home"/>
                        
                        <GridComponent centerGrid = {true}/>
                        <div className = "home-section_divider" ></div>

                        <Jumbotron className = "home-aboutus_section">
                            <div className = "row justify-content-center">

                                <div className = "col-lg-11 col-md-11 mx-auto">
                                    <AboutUsPage />
                                </div>
        
                            </div>
                        </Jumbotron>

                        <Row className = "justify-content-center">
                            <div className = "col-lg-12 col-md-12">
                                <Row className = "justify-content-center project-item_locationSection">
                                    <h3 className = "project-item_title"> Location </h3>
                                </Row>
                                <Row className = "justify-content-center">
                                    <div>
                                        <hr className = "projects_divider" />                               
                                    </div>
                                </Row>
                            </div>
                        </Row>

                        <GoogleMapComponent 
                            lat= {17.516247}
                            lng= {78.385560}
                            title =  "Akruthi Constructions & Developers"
                            address = "59, Blooming Dale Road, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090, India"
                        />
                        <div className = "home-section_divider" ></div>
                        <Contact isHome = {true} />

                    </Container>


                </div>                
            
            </div>
        );
    }
}; 

const mapStateToProps = ( store ) => {
    return { projects : store.projects };
};

export default connect( mapStateToProps )( HomePage );