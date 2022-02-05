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
import WaysLinkImage from '../public/images/wayslink.png'
import LogoImage from '../public/images/logo.png'

import Scroll from "react-scroll";

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

    let Link      = Scroll.Link;
    let scroll    = Scroll.animateScroll;

    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: computer,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [drawer, setDrawer] = useState(false);

    return (
    <div style={{ background: themes.color.navy, height: "100%", paddingTop: "30px"}} name={"home"}>
      {/*  head */}
      <Row style={{ width: "100%", padding: "10px 5% 0px 5%",top: 0, position: "fixed", zIndex: 1, background: themes.color.navy }} justify={"space-between"}>
        <Col sm={18} md={14}>
            <Image
            src={LogoImage.src}
            width={40}
            height={40}
            />
        </Col>
          <Col xs={0} md={8}>
              <Row justify={"space-between"}>
                  <Link to={"home"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Home</TextLink>
                  </Link>
                  <Link to={"service"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Service</TextLink>
                  </Link>
                  <Link to={"project"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Project</TextLink>
                  </Link>
                  <Link to={"contact"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Contact</TextLink>
                  </Link>
              </Row>
          </Col>
          <Col xs={6} sm={0}>
              <Row justify={"end"}>
                  <MenuOutlined style={{ color: "white", fontSize: 34}} onClick={() => setDrawer(true)} />
              </Row>
              <DrawerStyle
                  placement={"right"}
                  onClose={() => setDrawer(false)}
                  visible={drawer}
              >
                  <Link to={"home"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Home</TextLink>
                  </Link>
                  <Link to={"service"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Service</TextLink>
                  </Link>
                  <Link to={"project"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Project</TextLink>
                  </Link>
                  <Link to={"contact"} spy={true} smooth={true} offset={0} duration={1000} delay={10}>
                      <TextLink>Contact</TextLink>
                  </Link>
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
                    <TextStyle style={{ color: themes.color.white, fontSize: 30}}>Lorem Ipsum is simply dummy text of the printing </TextStyle>
                    <TextStyle style={{ color: themes.color.white, fontSize: 19, marginTop: 30}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                    </TextStyle>
                </Card>
            </Col>
        </Row>

        <Row justify={"center"} name={"service"}>
            <TextTitleContent>Service</TextTitleContent>
        </Row>

        <Row justify={"center"} style={{width: "80%", margin: "0 auto", padding: "50px 0"}}>
            <TextStyle style={{ color: themes.color.white, fontSize: 20, textAlign: "center"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            </TextStyle>
            <TextStyle style={{ color: themes.color.white, fontSize: 20, textAlign: "center"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            </TextStyle>
        </Row>

        <Row justify={"center"} name={"project"}>
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
                    <Row>
                        <Link >
                            {/*<Text>Lihat</Text>*/}
                        </Link>
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

        <Row justify={"center"} align={"middle"} style={{ width: "80%", margin:"0 auto"}}>
            <Col sm={24} md={12} order={1} style={{marginBottom:"20px"}}>
                <Row justify={"center"}>
                    <Image
                        style={{ borderRadius: 10, border: "2px solid white"}}
                        src={WaysLinkImage.src}
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
                        }}>WaysLink</TextStyle>
                    </Row>
                    <Row justify={"center"} style={{ paddingTop: 20}}>
                        <TextStyle style={{ color: themes.color.white, fontSize: 20}}>
                            tools to maximize several social media combined into one
                        </TextStyle>
                    </Row>
                </CardContentProject>
            </Col>
        </Row>


        <Row justify={"center"} style={{ marginTop: 40}} name={"contact"}>
            <TextTitleContent>Contact Us</TextTitleContent>
        </Row>

        <Row justify={"center"} style={{ width: "80%", margin: "20px auto 0 auto"}}>
            <Col sm={24} md={12} order={1}>
                <CardContactInformation>
                    <Row>
                        <TextStyle style={{ textAlign: "center", fontSize: 28, color: "white"}}>Contact information</TextStyle>
                    </Row>
                    <Row style={{ paddingTop: 10}}>
                        <TextStyle
                            onClick={(e) => {
                                window.open("mailto:zainalarifin6599@gmail.com");
                                e.preventDefault();
                            }}
                            style={{
                                cursor: "pointer",
                                textAlign: "center",
                                fontSize: 17,
                                color: "white",
                        }}>
                            <MailTwoTone twoToneColor={themes.color.purple} /> zainalarifin6599@gmail.com
                        </TextStyle>
                     </Row>
                    <Row>
                        <TextStyle
                            onClick={(e) => {
                                window.open("https://wa.me/6285685815598");
                                e.preventDefault();
                            }}
                            style={{
                                paddingTop: 10,
                                cursor: "pointer",
                                textAlign: "center",
                                fontSize: 17,
                                color: themes.color.green
                        }}><WhatsAppOutlined /> : 089686815598
                        </TextStyle>
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

        <Row style={{ padding: 10, background: themes.color.purple, marginTop: 30}} justify={"center"}>
            <TextStyle style={{ color: "white", fontSize: 20, textAlign: "center"}}>&copy; Zainal Arifin</TextStyle>
        </Row>
    </div>
  )
}
