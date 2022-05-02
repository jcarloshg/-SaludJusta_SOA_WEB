import { Card, Grid, Row, Spacer, Text } from "@nextui-org/react";
import { Title } from "../../../components";
import { laboratorios } from "./models/laboratorios";
import { AiOutlineEnvironment, AiOutlinePhone } from "react-icons/ai";
import './Laboratorios.css';


export const Laboratorios = () => {

    return (
        <div className="container">
            <Title>Laboratorios a nivel nacional</Title>

            <Spacer y={1} x={2} />
            <Grid.Container gap={2} justify="flex-start">
                {
                    laboratorios.map((item, index) => (
                        <Grid xs={6} sm={4} key={index}>
                            <Card hoverable clickable>
                                <Card.Body css={{ p: 10, alignItems: "center" }}>
                                    {item.icon}
                                </Card.Body>
                                <Card.Footer justify="flex-start">
                                    <div>
                                        <div className="div_ubicacion">
                                            <div className="datos">
                                                <AiOutlineEnvironment />
                                                <Spacer x={0.5} />
                                                <Text size={14}>{item.ubicacion}</Text>
                                            </div>
                                        </div>

                                        <div className="div_phoneNumber">
                                            <div className="datos">
                                                <AiOutlinePhone />
                                                <Spacer x={0.5} />
                                                <Text size={14}>{item.phoneNumber}</Text>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid.Container>

        </div>
    );
}