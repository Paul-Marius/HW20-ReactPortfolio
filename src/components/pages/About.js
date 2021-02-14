import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

function About() {
    return (
        <Container>
            <section className="content">
                <Row>
                    <div className="col-md-12 midsection">
                        <h2>About Me</h2>
                        <Row>
                            <Col size="sm-12">
                                <img
                                    className="img-fluid profile-pic float-left"
                                    src="../../assets/images/paulbesliu.jpg"
                                    alt="Me!"
                                />
                                <div className="bio">
                                    <p>
                                        My name is Paul Besliu and I am originally from Romania.
                                        I moved to the US in 2017 and have lived in PNW area since then.
                                    </p>

                                    <p>
                                        I graduated with an Engineering degree from one of the top Universities in Romania.
                                        After working as an Engineer for a while, I realized I hava a passion for computers.
                                        A few years ago I started studying HTML on my own.
                                        In the meantime life happend and I didn't make much progress.
                                        Earlier last year I decided to get back into programming and here I am now enrolled in the UW Bootcamp.
                                    </p>

                                    <p>
                                        {/* for future */}
                                    </p>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </section>
        </Container>
    );
}

export default About;
