import React from "react";
import Container from "../Container";
import Row from "../Row";
import Project from "../Projects";

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
                                imgPath="../../assets/images/cantinacart.png"
                                linkDeployed=""
                                linkGithub="https://github.com/kaiwarren12/CantinaCart"
                            />
                        </Row>
                        <Row>
                            <Project
                                name="GarageExchange"
                                imgPath="../../assets/images/garageexchange.png"
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
