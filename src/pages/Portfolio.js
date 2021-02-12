import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";

function Portfolio() {
    return (
        <Container>
            <section className="content">
                <Row>
                    <div className="col-md-12 midsection">
                        <h2>Portfolio</h2>
                        <Row>
                            <Project
                                name="Cantina Cart"
                                imgPath={require("../components/Data/cantinacart.png")}
                                linkDeployed=""
                                linkGithub="https://github.com/kaiwarren12/CantinaCart"
                            />
                        </Row>
                        <Row>
                            <Project
                                name="GarageExchange"
                                imgPath={require("../components/Data/garageexchange.png")}
                                linkDeployed="https://frozen-earth-11241.herokuapp.com/"
                                linkGithub="https://github.com/samrod777/GarageExchange"
                            />
                        </Row>
                    </div>
                </Row>
            </section>
        </Container>
    );
}

export default Portfolio;
