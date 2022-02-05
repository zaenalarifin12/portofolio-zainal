import {Button, Card, Col, Drawer, Form, Image, Input, Row} from "antd";
import {TextLink, TextStyle, TextTitleContent} from "../components/atoms/Text/TextStyle";
import themes from "../config/themes";
import computer from "../public/lottie/computer.json"
import Lottie from "react-lottie"
import TextArea from "antd/lib/input/TextArea";
import {CardContactInformation, CardContentProject} from "../components/atoms/Card";
import {ItemStyle} from "../components/atoms/ItemStyle";
import {InputStyle} from "../components/atoms/InputStyle";
import {ButtonSuccess} from "../components/atoms/Button";
import {MailTwoTone, MenuOutlined, WhatsAppOutlined} from "@ant-design/icons";
import styled from "styled-components";
import {useState} from "react";
import FlutixImage from '../public/images/flutix.jpeg'
import WaysFoodImage from '../public/images/waysfood.png'
const DrawerStyle = styled(Drawer)`
      .ant-drawer-content {
        background: ${themes.color.navy};
        color: ${themes.color.white};
      }    
  
      .ant-drawer-header {
        display: none;
      }
  
    .ant-drawer-content-wrapper {
      width: 200px !important;
    }
`

export default function Home() {

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: computer,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [drawer, setDrawer] = useState(false);

    console.log(FlutixImage)
    return (
    <div style={{ background: themes.color.navy, height: "100%", paddingTop: 20}}>
      {/*  head */}
      <Row style={{ width: "90%", margin: "0 auto" }} justify={"space-between"}>
        <Col sm={18} md={14}>
            <TextStyle style={{ color: themes.color.white, fontSize: 20 }}>Zainal</TextStyle>
        </Col>
          <Col xs={0} md={8}>
              <Row justify={"space-between"}>
                  <TextLink >Home</TextLink>
                  <TextLink>About</TextLink>
                  <TextLink>Service</TextLink>
                  <TextLink>Project</TextLink>
                  <TextLink>Contact</TextLink>
              </Row>
          </Col>
          <Col xs={6} sm={0}>
              <Row justify={"end"}>
                  <MenuOutlined style={{ color: "white", fontSize: 34}} onClick={() => setDrawer(true)} />
              </Row>
              <DrawerStyle
                  // title="Basic Drawer"
                  placement={"right"}
                  // closable={true}
                  onClose={() => setDrawer(false)}
                  visible={drawer}
                  // key={"drawer"}
              >
                  <TextLink>Home</TextLink>
                  <TextLink>About</TextLink>
                  <TextLink>Service</TextLink>
                  <TextLink>Project</TextLink>
                  <TextLink>Contact</TextLink>
              </DrawerStyle>
          </Col>
      </Row>


        <Row justify={"space-between"} align={"middle"} style={{ width: "80%", margin: "50px auto 20px auto"}}>
            <Col sm={24} md={12}>
                <Lottie
                    options={animationOptions}
                    height={300}
                    width={300}
                    // height={300}
                    // width={300}
                />
            </Col>
            <Col sm={24} md={12}>
                <Card style={{ background: "transparent", borderRadius: 20, padding: 10, borderColor: themes.color.green}}>
                    <TextStyle style={{ color: themes.color.white, fontSize: 30}}>KAMI RESPONSE RESPONSE KAMI RESPONSE</TextStyle>
                    <TextStyle style={{ color: themes.color.white, fontSize: 19, marginTop: 30}}>DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI DESKRIPSI</TextStyle>
                </Card>
            </Col>
        </Row>

        <Row justify={"center"}>
            <TextTitleContent>Service Kami</TextTitleContent>
        </Row>

        <Row justify={"center"} style={{width: "80%", margin: "0 auto", padding: "50px 0"}}>
            <TextStyle style={{ color: themes.color.white, fontSize: 20}}>Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami </TextStyle>
            <TextStyle style={{ color: themes.color.white, fontSize: 20}}>Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami Service Kami </TextStyle>
        </Row>

        <Row justify={"center"}>
            <TextTitleContent>Project Terbaru</TextTitleContent>
        </Row>

        <Row justify={"center"} align={"middle"} style={{ width: "80%", margin:"10px auto"}}>
            <Col sm={12} md={12} order={2} style={{marginTop:"10px"}}>
                <CardContentProject>
                    <Row justify={"center"} style={{ paddingTop: 20}}>
                        <TextStyle style={{
                            color: themes.color.white,
                            fontSize: 24,
                            borderBottom: `1px solid ${themes.color.green}`,
                            paddingBottom: 10
                        }}>Flutix</TextStyle>
                    </Row>
                    <Row justify={"center"} style={{ paddingTop: 20}}>
                        <TextStyle style={{ color: themes.color.white, fontSize: 20, textAlign: "center"}}>
                            Application for booking cinema tickets
                        </TextStyle>
                    </Row>
                </CardContentProject>
            </Col>
            <Col sm={12} md={12} order={1} style={{marginBottom:"20px"}}>
                <Row justify={"center"}>
                    <Image
                        style={{ borderRadius: 10, border: "2px solid white"}}
                    src={FlutixImage.src}
                    width={300}
                    height={"auto"}
                    alt="Flutix"
                    />
                </Row>
            </Col>
            </Row>

        <Row justify={"center"} align={"middle"} style={{ width: "80%", margin:"0 auto"}}>
            <Col sm={24} md={12} order={1} style={{marginBottom:"20px"}}>
                <Row justify={"center"}>
                    <Image
                        style={{ borderRadius: 10, border: "2px solid white"}}
                        src={WaysFoodImage.src}
                        width={600}
                        height={"auto"}
                        alt="Flutix"
                    />
                </Row>
            </Col>
            <Col sm={12} md={12} order={2}>
                <CardContentProject>
                    <Row justify={"center"} style={{ paddingTop: 20}}>
                        <TextStyle style={{
                            color: themes.color.white,
                            fontSize: 24,
                            borderBottom: `1px solid ${themes.color.green}`,
                            paddingBottom: 10
                        }}>WaysFood</TextStyle>
                    </Row>
                    <Row justify={"center"} style={{ paddingTop: 20}}>
                        <TextStyle style={{ color: themes.color.white, fontSize: 20}}>
                            An application for food delivery
                        </TextStyle>
                    </Row>
                </CardContentProject>
            </Col>
        </Row>


        <Row justify={"center"} style={{ marginTop: 40}}>
            <TextTitleContent>Contact Us</TextTitleContent>
        </Row>

        <Row justify={"center"} style={{ width: "80%", margin: "20px auto 0 auto"}}>
            <Col sm={24} md={12} order={1}>
                <CardContactInformation>
                    <Row>
                        <TextStyle style={{ textAlign: "center", fontSize: 28, color: "white"}}>Contact information</TextStyle>
                    </Row>
                    <Row style={{ paddingTop: 10}}>
                        <TextStyle style={{ textAlign: "center", fontSize: 17, color: "white"}}><MailTwoTone twoToneColor={themes.color.purple} /> zainalarifin6599@gmail.com</TextStyle>
                     </Row>
                    <Row>
                        <TextStyle style={{ textAlign: "center", fontSize: 17, color: "white"}}><WhatsAppOutlined /> : 0000000</TextStyle>
                    </Row>

                </CardContactInformation>
            </Col>
            <Col sm={24} md={12} order={1} style={{ padding: "0 10px"}}>
                <Form
                layout={"vertical"}>
                    <Row justify={"space-between"}>
                        <Col span={11}>
                            <ItemStyle
                                size={"large"}
                                label={"First name"}>
                                <InputStyle />
                            </ItemStyle>
                        </Col>
                        <Col span={11} offset={2}>
                            <ItemStyle
                                label={"Last name"}>
                                <InputStyle />
                            </ItemStyle>
                        </Col>
                    </Row>

                    <Row justify={"space-between"}>
                        <Col span={11}>
                            <ItemStyle
                                label={"Email"}>
                                <InputStyle />
                            </ItemStyle>
                        </Col>
                        <Col span={11} offset={2}>
                            <ItemStyle
                                label={"Phone"}>
                                <InputStyle  />
                            </ItemStyle>
                        </Col>
                    </Row>

                    <ItemStyle
                        label={"Message"}>
                        <TextArea style={{ borderRadius: 5}} />
                    </ItemStyle>

                    <Row justify={"end"}>
                        <ButtonSuccess>Kirim</ButtonSuccess>
                    </Row>
                </Form>

            </Col>
        </Row>

        <Row style={{ padding: 5, background: themes.color.purple, marginTop: 30}} justify={"center"}>
            <TextStyle style={{ color: "white", fontSize: 20, textAlign: "center"}}>Zainal Arifin</TextStyle>
        </Row>
    </div>
  )
}
