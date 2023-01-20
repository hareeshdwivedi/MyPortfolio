import React from "react";

import {
  Stack,
  Line,
  Img,
  Button,
  Input,
  Text,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SaveFilterOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-gray_50 font-inter h-[1024px] mx-[auto] overflow-auto relative w-[100%]">
        <Stack className="absolute bottom-[0] h-[1529px] inset-x-[0] mx-[auto] w-[100%]">
          <Stack className="absolute h-[1529px] inset-[0] justify-center m-[auto] w-[100%]">
            <Stack className="absolute h-[1024px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
              <Stack className="h-[1024px] m-[auto] w-[100%]">
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[82%]">
                  <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[73px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 border border-gray_900_14 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[30px] sm:gap-[30px] items-center justify-between max-w-[1170px] sm:px-[20px] px-[30px] py-[18px] w-[100%]">
                      <div className="flex flex-row items-center justify-start md:w-[100%] sm:w-[100%] w-[17%]">
                        <div className="bg-gray_900_0f flex flex-col items-center justify-start p-[4px] rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0] w-[78%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45.png"
                                className="h-[30px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[30px]"
                                alt="EllipseFortyFive"
                              />
                              <Button
                                className="cursor-pointer font-semibold min-w-[42%] text-[12px] text-center text-white_A700 w-[max-content]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillYellow800"
                              >
                                15
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_30x30.png"
                                className="h-[30px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[30px]"
                                alt="EllipseFortyFive One"
                              />
                              <Button
                                className="cursor-pointer font-semibold min-w-[42%] text-[12px] text-center text-white_A700 w-[max-content]"
                                shape="RoundedBorder4"
                                size="sm"
                                variant="FillDeeppurple200"
                              >
                                11
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button
                          className="flex h-[40px] items-center justify-center w-[40px]"
                          shape="icbCustomBorderLR8"
                          variant="icbOutlineGray90019"
                        >
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-[22px] w-[22px]"
                            alt="arrowdown"
                          />
                        </Button>
                      </div>
                      <Img
                        src="images/img_group195_5.svg"
                        className="h-[40px] w-[40px]"
                        alt="Group195"
                      />
                      <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <Button
                          className="flex h-[40px] items-center justify-center w-[40px]"
                          variant="icbFillLightblueA700"
                        >
                          <Img
                            src="images/img_plus.svg"
                            className="h-[22px] w-[22px]"
                            alt="plus"
                          />
                        </Button>
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          className="font-normal not-italic p-[0] text-[15px] placeholder:text-gray_900_7e text-gray_900_7e text-left w-[100%]"
                          wrapClassName="flex gap-[8px] max-w-[635px] w-[100%]"
                          name="Frame310"
                          placeholder="Search"
                          prefix={
                            <Img
                              src="images/img_search.svg"
                              className="cursor-pointer mr-[8px] my-[auto]"
                              alt="search"
                            />
                          }
                          suffix={
                            inputvalue?.length > 0 ? (
                              <CloseSVG
                                color="#7e070f21"
                                className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                                onClick={() => setInputvalue("")}
                              />
                            ) : (
                              ""
                            )
                          }
                          shape="srcRoundedBorder8"
                          size="smSrc"
                          variant="srcOutlineGray90019"
                        ></Input>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Button className="flex h-[40px] items-center justify-center w-[40px]">
                          <Img
                            src="images/img_group195_gray_900.svg"
                            className="h-[24px] w-[24px]"
                            alt="Group195 One"
                          />
                        </Button>
                        <Button className="flex h-[40px] items-center justify-center w-[40px]">
                          <Img
                            src="images/img_calendar.svg"
                            className="h-[24px] w-[24px]"
                            alt="calendar"
                          />
                        </Button>
                        <Button className="flex h-[40px] items-center justify-center w-[40px]">
                          <Img
                            src="images/img_user.svg"
                            className="h-[24px] w-[24px]"
                            alt="user"
                          />
                        </Button>
                        <Img
                          src="images/img_ellipse45_38x38.png"
                          className="h-[38px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[38px]"
                          alt="EllipseFortyFive Two"
                        />
                      </div>
                    </div>
                    <Line className="bg-gray_200 h-[1px] w-[100%]" />
                  </div>
                </div>
                <div className="absolute h-[74px] right-[0] top-[7%] w-[82%]"></div>
                <aside className="absolute md:hidden sm:hidden inset-y-[0] left-[0] my-[auto] w-[19%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="bg-white_A700 border border-gray_900_14 border-solid flex flex-col gap-[27px] justify-start py-[27px] w-[100%]">
                        <div className="flex flex-row items-center justify-between ml-[auto] w-[225px]">
                          <div className="flex flex-col items-center justify-center w-[auto]">
                            <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_contrast.svg"
                                className="h-[22px] w-[22px]"
                                alt="contrast"
                              />
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Text
                                  className="text-gray_900 text-left w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Zaan Corp
                                </Text>
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowdown One"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_rewind.svg"
                            className="h-[20px] w-[20px]"
                            alt="rewind"
                          />
                        </div>
                        <div className="flex flex-col gap-[25px] items-center justify-start mb-[321px] w-[100%]">
                          <Line className="bg-gray_200 h-[1px] w-[100%]" />
                          <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[240px]">
                              <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[49%]">
                                <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                  <Img
                                    src="images/img_reply.svg"
                                    className="h-[22px] w-[22px]"
                                    alt="reply"
                                  />
                                  <Text
                                    className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    Dashboard
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-gray_51 flex flex-col items-start justify-start p-[12px] rounded-radius8 w-[100%]">
                                <div className="flex flex-col items-start justify-center md:ml-[0] sm:ml-[0] ml-[3px] w-[auto]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_volume.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="volume"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Workflow
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[28px] items-start justify-start md:w-[100%] sm:w-[100%] w-[88%]">
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[49%]">
                                  <div className="flex flex-col items-start justify-center w-[auto]">
                                    <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_calendar.svg"
                                        className="h-[22px] w-[22px]"
                                        alt="calendar One"
                                      />
                                      <Text
                                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                        as="h4"
                                        variant="h4"
                                      >
                                        Calendar
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[50%]">
                                  <div className="flex flex-col items-start justify-center w-[auto]">
                                    <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_share.svg"
                                        className="h-[22px] w-[22px]"
                                        alt="share"
                                      />
                                      <Text
                                        className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                        as="h4"
                                        variant="h4"
                                      >
                                        SocialRM
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[44%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_iconanalytic.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="IconAnalytic"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Metrics
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[39%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_search_gray_900_22x22.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="search One"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Leads
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[39%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_iconuserstar.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="IconUserstar"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Users
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_notification.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="notification"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Notifications
                                    </Text>
                                  </div>
                                  <Img
                                    src="images/img_bag.svg"
                                    className="h-[20px] w-[20px]"
                                    alt="bag"
                                  />
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[57%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_file.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="file"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Documents
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[53%]">
                                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_videocamera.svg"
                                      className="h-[22px] w-[22px]"
                                      alt="videocamera"
                                    />
                                    <Text
                                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Segments
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Line className="bg-gray_200 h-[1px] w-[100%]" />
                            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[40%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_iconfilecheck.svg"
                                  className="h-[22px] w-[22px]"
                                  alt="IconFilecheck"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Company
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                <div className="absolute flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between right-[2%] top-[17%] w-[78%]">
                  <Stack className="bg-gray_900_0a h-[421px] py-[8px] relative rounded-radius8 w-[236px]">
                    <div className="absolute bg-gray_900_0a flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] py-[8px] rounded-radius8 w-[auto]">
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <List
                          className="flex-col gap-[8px] grid items-start px-[8px] w-[auto]"
                          orientation="vertical"
                        >
                          <div className="bg-white_A700 flex flex-col items-start justify-center my-[0] rounded-radius8 w-[200px]">
                            <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                  <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                  <Text
                                    className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    ContactRM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[14px]">
                                  <Img
                                    src="images/img_iconfilecheck.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="IconFilecheck One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                <Text
                                  className="font-medium text-gray_900_a2 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Design a website
                                </Text>
                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm.com
                                  </Text>
                                  <Text
                                    className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                  <div className="flex flex-col items-start justify-start w-[14px]">
                                    <Img
                                      src="images/img_menu_gray_900.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="menu"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                  <Text
                                    className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    Created 3 days ago
                                  </Text>
                                  <Img
                                    src="images/img_ellipse47_18x18.png"
                                    className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                    alt="EllipseFortySeven"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-col items-start justify-center my-[0] rounded-radius8 w-[200px]">
                            <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                  <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                  <Text
                                    className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    ContactRM
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[14px]">
                                  <Img
                                    src="images/img_iconfilecheck.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="IconFilecheck Two"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                <Text
                                  className="font-medium text-gray_900_a2 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Design a website
                                </Text>
                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm.com
                                  </Text>
                                  <Text
                                    className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                    <Img
                                      src="images/img_menu_gray_900.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="menu One"
                                    />
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_menu_gray_900_14x14.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="menu One"
                                      />
                                      <Text
                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        8/9
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                  <Text
                                    className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    Created 3 days ago
                                  </Text>
                                  <Img
                                    src="images/img_ellipse47_18x18.png"
                                    className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                    alt="EllipseFortySeven One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                          <Line className="bg-light_blue_A700 h-[1px] w-[100%]" />
                          <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                            <div className="flex flex-row items-center justify-between w-[200px]">
                              <Text
                                className="font-medium text-gray_900_a2 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Card title
                              </Text>
                              <Img
                                src="images/img_close_deep_orange_700.svg"
                                className="h-[14px] w-[14px]"
                                alt="close"
                              />
                            </div>
                            <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                              <div className="bg-white_A700 border border-light_blue_A700 border-solid flex flex-col h-[57px] md:h-[auto] sm:h-[auto] items-start justify-start p-[8px] rounded-radius8 w-[200px]">
                                <Text
                                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  <span className="text-gray_900 text-[13px] font-inter">
                                    |
                                  </span>
                                  <span className="text-gray_900_4c text-[13px] font-inter">
                                    Enter card name
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[200px]">
                                <SelectBox
                                  className="font-normal sm:mx-[0] not-italic pr-[8px] text-[12px] text-gray_900_7e text-left sm:w-[100%] w-[70%]"
                                  placeholderClassName="text-gray_900_7e"
                                  name="Button"
                                  placeholder="Select Project"
                                  isSearchable={false}
                                  isMulti={false}
                                  indicator={
                                    <Img
                                      src="images/img_arrowdown.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="arrow_down"
                                    />
                                  }
                                  shape="RoundedBorder6"
                                  variant="OutlineGray90019"
                                ></SelectBox>
                                <div className="bg-light_blue_A700 flex flex-col items-center justify-center px-[12px] py-[7px] rounded-radius6 w-[53px]">
                                  <Text
                                    className="font-medium text-left text-white_A700 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Add
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row gap-[89px] items-center justify-between right-[0] top-[2%] w-[224px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-semibold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-gray_900 text-[14px] font-inter">
                            Backlog
                          </span>
                          <span className="text-gray_900 text-[15px] font-inter">
                            {" "}
                          </span>
                          <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                            (3)
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[14px] w-[14px]"
                            alt="menu Two"
                          />
                          <Img
                            src="images/img_sort_gray_900.svg"
                            className="h-[14px] w-[14px]"
                            alt="sort"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_user_gray_900.svg"
                        className="h-[18px] w-[18px]"
                        alt="user One"
                      />
                    </div>
                  </Stack>
                  <div className="bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start mb-[220px] py-[8px] rounded-radius8 w-[auto]">
                    <div className="flex flex-row items-center justify-between w-[192px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-semibold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-gray_900 text-[14px] font-inter">
                            Completed{" "}
                          </span>
                          <span className="text-gray_900 text-[15px] font-inter">
                            {" "}
                          </span>
                          <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                            (1)
                          </span>
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_menu.svg"
                            className="h-[14px] w-[14px]"
                            alt="menu Three"
                          />
                          <Img
                            src="images/img_sort_gray_900.svg"
                            className="h-[14px] w-[14px]"
                            alt="sort One"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_user_gray_900.svg"
                        className="h-[18px] w-[18px]"
                        alt="user Two"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                      <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                          <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                  variant="body2"
                                >
                                  ContactRM
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_iconfilecheck.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="IconFilecheck Three"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                              <Text
                                className="font-medium text-gray_900_a2 text-left w-[auto]"
                                variant="body1"
                              >
                                Design a website
                              </Text>
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                  variant="body3"
                                >
                                  api.contactrm.com
                                </Text>
                                <Text
                                  className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                  variant="body3"
                                >
                                  api.contactrm
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                <div className="flex flex-col items-start justify-start w-[14px]">
                                  <Img
                                    src="images/img_menu_gray_900.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="menu Four"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                <Text
                                  className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                  variant="body3"
                                >
                                  Created 3 days ago
                                </Text>
                                <Img
                                  src="images/img_ellipse47_18x18.png"
                                  className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                  alt="EllipseFortySeven Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-col items-start justify-center sm:w-[100%] w-[200px]">
                            <Input
                              className="font-medium p-[0] text-[13px] text-left placeholder:text-light_blue_A700 text-light_blue_A700 w-[100%]"
                              wrapClassName="flex w-[200px]"
                              name="Button One"
                              placeholder="Add Card"
                              prefix={
                                <Img
                                  src="images/img_plus_light_blue_a700.svg"
                                  className="mr-[4px] my-[auto]"
                                  alt="plus"
                                />
                              }
                              shape="RoundedBorder6"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Stack>
              <Stack className="absolute bg-gray_900_0a h-[693px] inset-y-[0] my-[auto] py-[8px] right-[15%] rounded-radius8 w-[249px]">
                <div className="absolute bg-gray_900_0a flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] py-[8px] rounded-radius8 w-[auto]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                variant="body2"
                              >
                                ContactRM
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[14px]">
                              <Img
                                src="images/img_iconfilecheck.svg"
                                className="h-[14px] w-[14px]"
                                alt="IconFilecheck Four"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                            <Text
                              className="font-medium text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Design a website
                            </Text>
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                              <Text
                                className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_menu_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu Five"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <Text
                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                              <Img
                                src="images/img_ellipse47_18x18.png"
                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                alt="EllipseFortySeven Three"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                variant="body2"
                              >
                                ContactRM
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[14px]">
                              <Img
                                src="images/img_iconfilecheck.svg"
                                className="h-[14px] w-[14px]"
                                alt="IconFilecheck Five"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                            <Text
                              className="font-medium text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Design a website
                            </Text>
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                              <Text
                                className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_menu_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu Six"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <Text
                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                              <Img
                                src="images/img_ellipse47_18x18.png"
                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                alt="EllipseFortySeven Four"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                variant="body2"
                              >
                                ContactRM
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[14px]">
                              <Img
                                src="images/img_iconfilecheck.svg"
                                className="h-[14px] w-[14px]"
                                alt="IconFilecheck Six"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                            <Text
                              className="font-medium text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Design a website
                            </Text>
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                              <Text
                                className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_menu_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu Seven"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <Text
                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                              <Img
                                src="images/img_ellipse47_18x18.png"
                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                alt="EllipseFortySeven Five"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                variant="body2"
                              >
                                ContactRM
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[14px]">
                              <Img
                                src="images/img_iconfilecheck.svg"
                                className="h-[14px] w-[14px]"
                                alt="IconFilecheck Seven"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                            <Text
                              className="font-medium text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Design a website
                            </Text>
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                              <Text
                                className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_menu_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu Eight"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <Text
                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                              <Img
                                src="images/img_ellipse47_18x18.png"
                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                alt="EllipseFortySeven Six"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                variant="body2"
                              >
                                ContactRM
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[14px]">
                              <Img
                                src="images/img_iconfilecheck.svg"
                                className="h-[14px] w-[14px]"
                                alt="IconFilecheck Eight"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                            <Text
                              className="font-medium text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Design a website
                            </Text>
                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                              <Text
                                className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                              <Text
                                className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_menu_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu Nine"
                                />
                              </div>
                            </div>
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <Text
                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                              <Img
                                src="images/img_ellipse47_18x18.png"
                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                alt="EllipseFortySeven Seven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-col items-start justify-center sm:w-[100%] w-[200px]">
                          <Input
                            className="font-medium p-[0] text-[13px] text-left placeholder:text-light_blue_A700 text-light_blue_A700 w-[100%]"
                            wrapClassName="flex w-[200px]"
                            name="Button Two"
                            placeholder="Add Card"
                            prefix={
                              <Img
                                src="images/img_plus_light_blue_a700.svg"
                                className="mr-[4px] my-[auto]"
                                alt="plus"
                              />
                            }
                            shape="RoundedBorder6"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[89px] items-center justify-between right-[0] top-[1%] w-[237px]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="text-gray_900 text-[14px] font-inter">
                        In Review{" "}
                      </span>
                      <span className="text-gray_900 text-[15px] font-inter">
                        {" "}
                      </span>
                      <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                        (5)
                      </span>
                    </Text>
                    <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[14px] w-[14px]"
                        alt="menu Ten"
                      />
                      <Img
                        src="images/img_sort_gray_900.svg"
                        className="h-[14px] w-[14px]"
                        alt="sort Two"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_user_gray_900.svg"
                    className="h-[18px] w-[18px]"
                    alt="user Three"
                  />
                </div>
              </Stack>
            </Stack>
            <div className="absolute bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start left-[36%] py-[8px] rounded-radius8 top-[11%] w-[auto]">
              <div className="flex flex-row items-center justify-between w-[192px]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-semibold text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-gray_900 text-[14px] font-inter">
                      To Do
                    </span>
                    <span className="text-gray_900 text-[15px] font-inter">
                      {" "}
                    </span>
                    <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                      (5)
                    </span>
                  </Text>
                  <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_menu.svg"
                      className="h-[14px] w-[14px]"
                      alt="menu Eleven"
                    />
                    <Img
                      src="images/img_sort_gray_900.svg"
                      className="h-[14px] w-[14px]"
                      alt="sort Three"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_user_gray_900.svg"
                  className="h-[18px] w-[18px]"
                  alt="user Four"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                              variant="body2"
                            >
                              Development
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[14px]">
                            <Img
                              src="images/img_iconfilecheck.svg"
                              className="h-[14px] w-[14px]"
                              alt="IconFilecheck Nine"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                          <Text
                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                            variant="body1"
                          >
                            Develope a app for the Zaan Corporation
                          </Text>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm.com
                            </Text>
                            <Text
                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu Twelve"
                              />
                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                <Img
                                  src="images/img_file_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="file One"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_menu_gray_900_14x14.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu One One"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  8/9
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="link"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <Text
                              className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                              variant="body3"
                            >
                              Created 3 days ago
                            </Text>
                            <Img
                              src="images/img_ellipse47_18x18.png"
                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                              alt="EllipseFortySeven Eight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                              variant="body2"
                            >
                              Asteler.io
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[14px]">
                            <Img
                              src="images/img_iconfilecheck.svg"
                              className="h-[14px] w-[14px]"
                              alt="IconFilecheck Ten"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                          <Text
                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                            variant="body1"
                          >
                            Develope a app for the Zaan Corporation
                          </Text>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm.com
                            </Text>
                            <Text
                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu Thirteen"
                              />
                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                <Img
                                  src="images/img_file_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="file Two"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_menu_gray_900_14x14.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu One Two"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  8/9
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="link One"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="bg-gray_900_14 flex flex-col items-center justify-center px-[4px] py-[2px] rounded-radius4 w-[auto]">
                              <Text
                                className="font-medium text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                            </div>
                            <Img
                              src="images/img_ellipse47_18x18.png"
                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                              alt="EllipseFortySeven Nine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                              variant="body2"
                            >
                              Zaan Corp
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[14px]">
                            <Img
                              src="images/img_iconfilecheck.svg"
                              className="h-[14px] w-[14px]"
                              alt="IconFilecheck Eleven"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                          <Text
                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                            variant="body1"
                          >
                            Develope a app for the Zaan Corporation
                          </Text>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                            <div className="bg-orange_50 flex flex-col items-start justify-center pb-[2px] px-[4px] rounded-radius6 w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                            </div>
                            <Text
                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu Fourteen"
                              />
                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                <Img
                                  src="images/img_file_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="file Three"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_menu_gray_900_14x14.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu One Three"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  8/9
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="link Two"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="bg-gray_900_14 flex flex-col items-center justify-center px-[4px] py-[2px] rounded-radius4 w-[auto]">
                              <Text
                                className="font-medium text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                            </div>
                            <Img
                              src="images/img_ellipse47_18x18.png"
                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                              alt="EllipseFortySeven Ten"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                              variant="body2"
                            >
                              Zaan Corp
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[14px]">
                            <Img
                              src="images/img_iconfilecheck.svg"
                              className="h-[14px] w-[14px]"
                              alt="IconFilecheck Twelve"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                          <Text
                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                            variant="body1"
                          >
                            Develope a app for the Zaan Corporation
                          </Text>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                            <Text
                              className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm.com
                            </Text>
                            <Text
                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu Fifteen"
                              />
                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                <Img
                                  src="images/img_file_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="file Four"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_menu_gray_900_14x14.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu One Four"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  8/9
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="link Three"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="bg-gray_900_14 flex flex-col items-center justify-center px-[4px] py-[2px] rounded-radius4 w-[auto]">
                              <Text
                                className="font-medium text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                            </div>
                            <Img
                              src="images/img_ellipse47_18x18.png"
                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                              alt="EllipseFortySeven Eleven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                              variant="body2"
                            >
                              Zaan Corp
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[14px]">
                            <Img
                              src="images/img_iconfilecheck.svg"
                              className="h-[14px] w-[14px]"
                              alt="IconFilecheck Thirteen"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                          <Text
                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                            variant="body1"
                          >
                            Develope a app for the Zaan Corporation
                          </Text>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                            <div className="bg-orange_50 flex flex-col items-start justify-center pb-[2px] px-[4px] rounded-radius6 w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                variant="body3"
                              >
                                api.contactrm.com
                              </Text>
                            </div>
                            <Text
                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                              variant="body3"
                            >
                              api.contactrm
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu Sixteen"
                              />
                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                <Img
                                  src="images/img_file_gray_900.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="file Five"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  12
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_menu_gray_900_14x14.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="menu One Five"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  8/9
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="link Four"
                                />
                                <Text
                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                  variant="body3"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                            <div className="bg-gray_900_14 flex flex-col items-center justify-center px-[4px] py-[2px] rounded-radius4 w-[auto]">
                              <Text
                                className="font-medium text-gray_900_87 text-left w-[auto]"
                                variant="body3"
                              >
                                Created 3 days ago
                              </Text>
                            </div>
                            <Img
                              src="images/img_ellipse47_18x18.png"
                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                              alt="EllipseFortySeven Twelve"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-center w-[200px]">
                      <div className="border border-gray_900_19 border-solid flex flex-row gap-[4px] items-center justify-start px-[12px] py-[7px] rounded-radius6 w-[200px]">
                        <Img
                          src="images/img_plus_light_blue_a700.svg"
                          className="h-[18px] w-[18px]"
                          alt="plus One"
                        />
                        <Text
                          className="font-medium text-left text-light_blue_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Add Card
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[30%] w-[19%]">
              <Stack className="bg-gray_900_0a h-[1357px] py-[8px] relative rounded-radius8 w-[268px]">
                <div className="absolute bg-gray_900_0a flex flex-col h-[max-content] inset-y-[0] items-center justify-end left-[0] my-[auto] py-[8px] rounded-radius8 w-[auto]">
                  <Stack className="h-[1313px] relative w-[216px]">
                    <Stack className="absolute h-[1290px] inset-[0] justify-center m-[auto] w-[100%]">
                      <Stack className="absolute h-[1171px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <Stack className="absolute h-[1052px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <Stack className="absolute h-[933px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                            <Stack className="absolute h-[814px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                              <Stack className="absolute h-[695px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                <Stack className="absolute h-[576px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                  <Stack className="absolute h-[457px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                    <Stack className="absolute h-[338px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                      <Stack className="absolute h-[219px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                        <div className="absolute flex flex-col h-[115px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] top-[0] w-[216px]">
                                          <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                            <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                  <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                                  <Text
                                                    className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                    variant="body2"
                                                  >
                                                    Design
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-start justify-start w-[14px]">
                                                  <Img
                                                    src="images/img_iconfilecheck.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="IconFilecheck Fourteen"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                                <Text
                                                  className="font-medium text-gray_900_a2 text-left w-[auto]"
                                                  variant="body1"
                                                >
                                                  Design a website
                                                </Text>
                                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                                  <Text
                                                    className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    api.contactrm.com
                                                  </Text>
                                                  <Text
                                                    className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    api.contactrm
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                                    <Img
                                                      src="images/img_menu_gray_900.svg"
                                                      className="h-[14px] w-[14px]"
                                                      alt="menu Seventeen"
                                                    />
                                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                      <Img
                                                        src="images/img_link.svg"
                                                        className="h-[14px] w-[14px]"
                                                        alt="link Five"
                                                      />
                                                      <Text
                                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                                        variant="body3"
                                                      >
                                                        2
                                                      </Text>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                                  <Text
                                                    className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    Created 3 days ago
                                                  </Text>
                                                  <Img
                                                    src="images/img_ellipse47_18x18.png"
                                                    className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                                    alt="EllipseFortySeven Thirteen"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[0] flex flex-col h-[115px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                          <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                            <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                  <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                                  <Text
                                                    className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                    variant="body2"
                                                  >
                                                    Design
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-start justify-start w-[14px]">
                                                  <Img
                                                    src="images/img_iconfilecheck.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="IconFilecheck Fifteen"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                                <Text
                                                  className="font-medium text-gray_900_a2 text-left w-[auto]"
                                                  variant="body1"
                                                >
                                                  Design a mobile app
                                                </Text>
                                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                                  <Text
                                                    className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    api.contactrm.com
                                                  </Text>
                                                  <Text
                                                    className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    api.contactrm
                                                  </Text>
                                                </div>
                                                <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                                    <Img
                                                      src="images/img_menu_gray_900.svg"
                                                      className="h-[14px] w-[14px]"
                                                      alt="menu Eighteen"
                                                    />
                                                    <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                                      <Img
                                                        src="images/img_file_gray_900.svg"
                                                        className="h-[14px] w-[14px]"
                                                        alt="file Six"
                                                      />
                                                      <Text
                                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                                        variant="body3"
                                                      >
                                                        12
                                                      </Text>
                                                    </div>
                                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                      <Img
                                                        src="images/img_menu_gray_900_14x14.svg"
                                                        className="h-[14px] w-[14px]"
                                                        alt="menu Nineteen"
                                                      />
                                                      <Text
                                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                                        variant="body3"
                                                      >
                                                        8/9
                                                      </Text>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                                  <Text
                                                    className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    Created 3 days ago
                                                  </Text>
                                                  <Img
                                                    src="images/img_ellipse47_18x18.png"
                                                    className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                                    alt="EllipseFortySeven Fourteen"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Stack>
                                      <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                        <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                          <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                                <Text
                                                  className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                  variant="body2"
                                                >
                                                  Development
                                                </Text>
                                              </div>
                                              <div className="flex flex-col items-start justify-start w-[14px]">
                                                <Img
                                                  src="images/img_iconfilecheck.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="IconFilecheck Sixteen"
                                                />
                                              </div>
                                            </div>
                                            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                              <Text
                                                className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                                variant="body1"
                                              >
                                                Develope a app for the Zaan
                                                Corporation
                                              </Text>
                                              <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                                <Text
                                                  className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  api.contactrm.com
                                                </Text>
                                                <div className="bg-purple_50 flex flex-col items-start justify-center pb-[2px] px-[4px] rounded-radius6 w-[auto]">
                                                  <Text
                                                    className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    api.contactrm
                                                  </Text>
                                                </div>
                                              </div>
                                              <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                                  <Img
                                                    src="images/img_menu_gray_900.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="menu Twenty"
                                                  />
                                                  <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                                    <Img
                                                      src="images/img_file_gray_900.svg"
                                                      className="h-[14px] w-[14px]"
                                                      alt="file Seven"
                                                    />
                                                    <Text
                                                      className="font-medium text-gray_900_90 text-left w-[auto]"
                                                      variant="body3"
                                                    >
                                                      12
                                                    </Text>
                                                  </div>
                                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                    <Img
                                                      src="images/img_link.svg"
                                                      className="h-[14px] w-[14px]"
                                                      alt="link Six"
                                                    />
                                                    <Text
                                                      className="font-medium text-gray_900_90 text-left w-[auto]"
                                                      variant="body3"
                                                    >
                                                      2
                                                    </Text>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                                <Text
                                                  className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  Created 3 days ago
                                                </Text>
                                                <Img
                                                  src="images/img_ellipse47_18x18.png"
                                                  className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                                  alt="EllipseFortySeven Fifteen"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Stack>
                                    <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                Development
                                              </Text>
                                            </div>
                                            <div className="flex flex-col items-start justify-start w-[14px]">
                                              <Img
                                                src="images/img_iconfilecheck.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="IconFilecheck Seventeen"
                                              />
                                            </div>
                                          </div>
                                          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                            <Text
                                              className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                              variant="body1"
                                            >
                                              Develope a app for the Zaan
                                              Corporation
                                            </Text>
                                            <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                              <div className="bg-orange_50 flex flex-col items-start justify-center pb-[2px] px-[4px] rounded-radius6 w-[auto]">
                                                <Text
                                                  className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  api.contactrm.com
                                                </Text>
                                              </div>
                                              <div className="bg-purple_50 flex flex-col items-start justify-center pb-[2px] px-[4px] rounded-radius6 w-[auto]">
                                                <Text
                                                  className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  api.contactrm
                                                </Text>
                                              </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                              <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                                <Img
                                                  src="images/img_menu_gray_900.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="menu TwentyOne"
                                                />
                                                <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                                  <Img
                                                    src="images/img_file_gray_900.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="file Eight"
                                                  />
                                                  <Text
                                                    className="font-medium text-gray_900_90 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    12
                                                  </Text>
                                                </div>
                                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                  <Img
                                                    src="images/img_menu_gray_900_14x14.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="menu TwentyTwo"
                                                  />
                                                  <Text
                                                    className="font-medium text-gray_900_90 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    8/9
                                                  </Text>
                                                </div>
                                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                  <Img
                                                    src="images/img_link.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="link Seven"
                                                  />
                                                  <Text
                                                    className="font-medium text-gray_900_90 text-left w-[auto]"
                                                    variant="body3"
                                                  >
                                                    2
                                                  </Text>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                              <Text
                                                className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                Created 3 days ago
                                              </Text>
                                              <Img
                                                src="images/img_ellipse47_18x18.png"
                                                className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                                alt="EllipseFortySeven Sixteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Stack>
                                  <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                    <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                      <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                            <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                            <Text
                                              className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                              variant="body2"
                                            >
                                              Development
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-start w-[14px]">
                                            <Img
                                              src="images/img_iconfilecheck.svg"
                                              className="h-[14px] w-[14px]"
                                              alt="IconFilecheck Eighteen"
                                            />
                                          </div>
                                        </div>
                                        <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                          <Text
                                            className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                            variant="body1"
                                          >
                                            Develope a app for the Zaan
                                            Corporation
                                          </Text>
                                          <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                            <Text
                                              className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              api.contactrm.com
                                            </Text>
                                            <Text
                                              className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              api.contactrm
                                            </Text>
                                          </div>
                                          <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                              <Img
                                                src="images/img_menu_gray_900.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="menu TwentyThree"
                                              />
                                              <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                                <Img
                                                  src="images/img_file_gray_900.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="file Nine"
                                                />
                                                <Text
                                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  12
                                                </Text>
                                              </div>
                                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                <Img
                                                  src="images/img_menu_gray_900_14x14.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="menu TwentyFour"
                                                />
                                                <Text
                                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  8/9
                                                </Text>
                                              </div>
                                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                                <Img
                                                  src="images/img_link.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="link Eight"
                                                />
                                                <Text
                                                  className="font-medium text-gray_900_90 text-left w-[auto]"
                                                  variant="body3"
                                                >
                                                  2
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <Text
                                              className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              Created 3 days ago
                                            </Text>
                                            <Img
                                              src="images/img_ellipse47_18x18.png"
                                              className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                              alt="EllipseFortySeven Seventeen"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Stack>
                                <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                  <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                    <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                          <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                          <Text
                                            className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                            variant="body2"
                                          >
                                            Development
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-start w-[14px]">
                                          <Img
                                            src="images/img_iconfilecheck.svg"
                                            className="h-[14px] w-[14px]"
                                            alt="IconFilecheck Nineteen"
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                        <Text
                                          className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                          variant="body1"
                                        >
                                          Develope a app for the Zaan
                                          Corporation
                                        </Text>
                                        <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                          <Text
                                            className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            api.contactrm.com
                                          </Text>
                                          <Text
                                            className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            api.contactrm
                                          </Text>
                                        </div>
                                        <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                          <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                            <Img
                                              src="images/img_menu_gray_900.svg"
                                              className="h-[14px] w-[14px]"
                                              alt="menu TwentyFive"
                                            />
                                            <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                              <Img
                                                src="images/img_file_gray_900.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="file Ten"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                12
                                              </Text>
                                            </div>
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <Img
                                                src="images/img_menu_gray_900_14x14.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="menu TwentySix"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                8/9
                                              </Text>
                                            </div>
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <Img
                                                src="images/img_link.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="link Nine"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                2
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                          <Text
                                            className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            Created 3 days ago
                                          </Text>
                                          <Img
                                            src="images/img_ellipse47_18x18.png"
                                            className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                            alt="EllipseFortySeven Eighteen"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Stack>
                              <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                                <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                  <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                    <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                        <Text
                                          className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          Development
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[14px]">
                                        <Img
                                          src="images/img_iconfilecheck.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="IconFilecheck Twenty"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                      <Text
                                        className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                        variant="body1"
                                      >
                                        Develope a app for the Zaan Corporation
                                      </Text>
                                      <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                        <Text
                                          className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm.com
                                        </Text>
                                        <Text
                                          className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                          <Img
                                            src="images/img_menu_gray_900.svg"
                                            className="h-[14px] w-[14px]"
                                            alt="menu TwentySeven"
                                          />
                                          <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                            <Img
                                              src="images/img_file_gray_900.svg"
                                              className="h-[14px] w-[14px]"
                                              alt="file Eleven"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              12
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                            <Img
                                              src="images/img_menu_gray_900_14x14.svg"
                                              className="h-[14px] w-[14px]"
                                              alt="menu TwentyEight"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              8/9
                                            </Text>
                                          </div>
                                          <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                            <Img
                                              src="images/img_link.svg"
                                              className="h-[14px] w-[14px]"
                                              alt="link Ten"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              2
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <Text
                                          className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          Created 3 days ago
                                        </Text>
                                        <Img
                                          src="images/img_ellipse47_18x18.png"
                                          className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                          alt="EllipseFortySeven Nineteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Stack>
                            <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                              <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                  <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        Development
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[14px]">
                                      <Img
                                        src="images/img_iconfilecheck.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="IconFilecheck TwentyOne"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                    <Text
                                      className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                      variant="body1"
                                    >
                                      Develope a app for the Zaan Corporation
                                    </Text>
                                    <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                      <Text
                                        className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        api.contactrm.com
                                      </Text>
                                      <Text
                                        className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        api.contactrm
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu TwentyNine"
                                        />
                                        <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                          <Img
                                            src="images/img_file_gray_900.svg"
                                            className="h-[14px] w-[14px]"
                                            alt="file Twelve"
                                          />
                                          <Text
                                            className="font-medium text-gray_900_90 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            12
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                          <Img
                                            src="images/img_menu_gray_900_14x14.svg"
                                            className="h-[14px] w-[14px]"
                                            alt="menu Thirty"
                                          />
                                          <Text
                                            className="font-medium text-gray_900_90 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            8/9
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                          <Img
                                            src="images/img_link.svg"
                                            className="h-[14px] w-[14px]"
                                            alt="link Eleven"
                                          />
                                          <Text
                                            className="font-medium text-gray_900_90 text-left w-[auto]"
                                            variant="body3"
                                          >
                                            2
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                      <Text
                                        className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        Created 3 days ago
                                      </Text>
                                      <Img
                                        src="images/img_ellipse47_18x18.png"
                                        className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                        alt="EllipseFortySeven Twenty"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Stack>
                          <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                            <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[192px]">
                              <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                    <Text
                                      className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                      variant="body2"
                                    >
                                      Development
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-[14px]">
                                    <Img
                                      src="images/img_iconfilecheck.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="IconFilecheck TwentyTwo"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                  <Text
                                    className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                    variant="body1"
                                  >
                                    Develope a app for the Zaan Corporation
                                  </Text>
                                  <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                    <Text
                                      className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      api.contactrm.com
                                    </Text>
                                    <Text
                                      className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      api.contactrm
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                      <Img
                                        src="images/img_menu_gray_900.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="menu ThirtyOne"
                                      />
                                      <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                        <Img
                                          src="images/img_file_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="file Thirteen"
                                        />
                                        <Text
                                          className="font-medium text-gray_900_90 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          12
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900_14x14.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu ThirtyTwo"
                                        />
                                        <Text
                                          className="font-medium text-gray_900_90 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          8/9
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <Img
                                          src="images/img_link.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="link Twelve"
                                        />
                                        <Text
                                          className="font-medium text-gray_900_90 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          2
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                    <Text
                                      className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      Created 3 days ago
                                    </Text>
                                    <Img
                                      src="images/img_ellipse47_18x18.png"
                                      className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                      alt="EllipseFortySeven TwentyOne"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Stack>
                        <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                          <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[192px]">
                            <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                  <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                  <Text
                                    className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    Development
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-[14px]">
                                  <Img
                                    src="images/img_iconfilecheck.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="IconFilecheck TwentyThree"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                <Text
                                  className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                  variant="body1"
                                >
                                  Develope a app for the Zaan Corporation
                                </Text>
                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm.com
                                  </Text>
                                  <Text
                                    className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    api.contactrm
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                    <Img
                                      src="images/img_menu_gray_900.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="menu ThirtyThree"
                                    />
                                    <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                      <Img
                                        src="images/img_file_gray_900.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="file Fourteen"
                                      />
                                      <Text
                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        12
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_menu_gray_900_14x14.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="menu ThirtyFour"
                                      />
                                      <Text
                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        8/9
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <Img
                                        src="images/img_link.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="link Thirteen"
                                      />
                                      <Text
                                        className="font-medium text-gray_900_90 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        2
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                  <Text
                                    className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                    variant="body3"
                                  >
                                    Created 3 days ago
                                  </Text>
                                  <Img
                                    src="images/img_ellipse47_18x18.png"
                                    className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                    alt="EllipseFortySeven TwentyTwo"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Stack>
                      <div className="absolute bottom-[0] flex flex-col h-[130px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[8px] w-[216px]">
                        <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[192px]">
                          <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                            <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Development
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[14px]">
                                <Img
                                  src="images/img_iconfilecheck.svg"
                                  className="h-[14px] w-[14px]"
                                  alt="IconFilecheck TwentyFour"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                              <Text
                                className="font-medium max-w-[184px] text-gray_900_a2 text-left"
                                variant="body1"
                              >
                                Develope a app for the Zaan Corporation
                              </Text>
                              <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                <Text
                                  className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                  variant="body3"
                                >
                                  api.contactrm.com
                                </Text>
                                <Text
                                  className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] rounded-radius6 text-gray_900_a2 text-left w-[auto]"
                                  variant="body3"
                                >
                                  api.contactrm
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                  <Img
                                    src="images/img_menu_gray_900.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="menu ThirtyFive"
                                  />
                                  <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                    <Img
                                      src="images/img_file_gray_900.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="file Fifteen"
                                    />
                                    <Text
                                      className="font-medium text-gray_900_90 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      12
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_menu_gray_900_14x14.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="menu ThirtySix"
                                    />
                                    <Text
                                      className="font-medium text-gray_900_90 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      8/9
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <Img
                                      src="images/img_link.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="link Fourteen"
                                    />
                                    <Text
                                      className="font-medium text-gray_900_90 text-left w-[auto]"
                                      variant="body3"
                                    >
                                      2
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                <Text
                                  className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                  variant="body3"
                                >
                                  Created 3 days ago
                                </Text>
                                <Img
                                  src="images/img_ellipse47_18x18.png"
                                  className="h-[18px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[18px]"
                                  alt="EllipseFortySeven TwentyThree"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Stack>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-center sm:w-[100%] w-[200px]">
                        <Input
                          className="font-medium p-[0] text-[13px] text-left placeholder:text-light_blue_A700 text-light_blue_A700 w-[100%]"
                          wrapClassName="flex w-[200px]"
                          name="Button Three"
                          placeholder="Add Card"
                          prefix={
                            <Img
                              src="images/img_plus_light_blue_a700.svg"
                              className="mr-[4px] my-[auto]"
                              alt="plus"
                            />
                          }
                          shape="RoundedBorder6"
                          size="sm"
                        ></Input>
                      </div>
                    </div>
                    <Img
                      src="images/img_group371_white_a700.svg"
                      className="absolute h-[1227px] right-[0] top-[0] w-[auto]"
                      alt="Group371"
                    />
                  </Stack>
                </div>
                <div className="absolute flex flex-row gap-[89px] items-center justify-between right-[0] top-[1%] w-[256px]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      <span className="text-gray_900 text-[14px] font-inter">
                        In Process{" "}
                      </span>
                      <span className="text-gray_900 text-[15px] font-inter">
                        {" "}
                      </span>
                      <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                        (150)
                      </span>
                    </Text>
                    <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_menu.svg"
                        className="h-[14px] w-[14px]"
                        alt="menu ThirtySeven"
                      />
                      <Img
                        src="images/img_sort_gray_900.svg"
                        className="h-[14px] w-[14px]"
                        alt="sort Four"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_user_gray_900.svg"
                    className="h-[18px] w-[18px]"
                    alt="user Five"
                  />
                </div>
              </Stack>
            </div>
          </Stack>
          <Button
            className="absolute flex h-[40px] items-center justify-center right-[0] top-[32%] w-[40px]"
            shape="icbCustomBorderTL8"
            variant="icbFillDeeppurpleA201"
          >
            <Img
              src="images/img_arrowleft.svg"
              className="h-[24px] w-[24px]"
              alt="arrowleft"
            />
          </Button>
          <Stack className="absolute bg-gray_900_87 h-[1024px] inset-x-[0] mx-[auto] p-[62px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[41%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[22px] items-center justify-start py-[20px] rounded-radius8 shadow-bs2 w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between sm:w-[100%] w-[533px]">
                    <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_save.svg"
                        className="h-[20px] w-[20px]"
                        alt="save"
                      />
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Saved as View
                      </Text>
                    </div>
                    <Img
                      src="images/img_close.svg"
                      className="h-[20px] w-[20px]"
                      alt="close One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                    <Line className="bg-gray_900_19 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[16px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[24px] mt-[29px] sm:w-[100%] w-[auto]">
                      <div className="flex flex-col items-start justify-center sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              View Name
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_900_7e text-gray_900_7e text-left w-[100%]"
                              wrapClassName="flex w-[100%]"
                              type="text"
                              name="Group524"
                              placeholder="Enter Name"
                              suffix={
                                <div className="rounded-tl-[0] rounded-tr-[8px] rounded-bl-[0] rounded-br-[8px] sm:w-[100%] sm:mx-[0] w-[12%] border-gray_202 border border-solid py-[11px] mx-[8px] px-[8px] flex justify-center items-center">
                                  <Img
                                    src="images/img_volume_gray_900.svg"
                                    className="my-[auto]"
                                    alt="volume"
                                  />
                                </div>
                              }
                              shape="RoundedBorder6"
                              size="3xl"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                              variant="body1"
                            >
                              Share with others
                            </Text>
                            <SelectBox
                              className="font-normal not-italic text-[14px] text-gray_900_7e text-left w-[100%]"
                              placeholderClassName="text-gray_900_7e"
                              name="Group524 One"
                              placeholder="Enter or select name"
                              isSearchable={false}
                              isMulti={false}
                              indicator={
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="h-[22px] mr-[16px] w-[22px]"
                                  alt="arrow_down"
                                />
                              }
                              shape="RoundedBorder6"
                              size="xl"
                              variant="OutlineGray90019_1"
                            ></SelectBox>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_900_19 h-[1px] mt-[30px] w-[100%]" />
                    <Button
                      className="cursor-pointer font-medium min-w-[79px] md:ml-[0] sm:ml-[0] ml-[478px] mt-[19px] text-[13px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="2xl"
                      variant="FillLightblueA700"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[6%] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[38%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="bg-white_A700 border border-gray_900_19 border-solid flex flex-col gap-[12px] items-center justify-start py-[12px] rounded-radius8 w-[100%]">
                  <SelectBox
                    className="font-normal sm:mx-[0] not-italic text-[14px] text-gray_900_7e text-left sm:w-[100%] w-[94%]"
                    placeholderClassName="text-gray_900_7e"
                    name="Frame5936"
                    placeholder="Enter or select name"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_light_blue_a700.svg"
                        className="h-[22px] w-[22px]"
                        alt="arrow_down"
                      />
                    }
                    size="md"
                  ></SelectBox>
                  <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                    <Line className="bg-light_blue_A700 h-[1px] w-[100%]" />
                    <Stack className="h-[360px] relative w-[100%]">
                      <Line className="bg-gray_301 h-[82px] ml-[auto] mr-[3px] mt-[105px] rounded-radius2 w-[4px]" />
                      <List
                        className="absolute flex-col gap-[4px] grid sm:grid-cols-1 inset-[0] items-start m-[auto] w-[auto]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_4.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Three"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Savannah Nguyen
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_900_0a flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_2.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Four"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Dianne Russell
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_1x24.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Five"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Bessie Cooper
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_3.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Six"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Jane Cooper
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_24x24.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Seven"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Cody Fisher
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_1x24.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Eight"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Bessie Cooper
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-center my-[0] px-[16px] py-[12px] sm:w-[100%] w-[532px]">
                          <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                            <div className="border border-gray_900_19 border-solid h-[16px] rounded-radius4 w-[16px]"></div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_ellipse45_24x24.png"
                                className="h-[24px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[24px]"
                                alt="EllipseFortyFive Nine"
                              />
                              <Text
                                className="font-normal not-italic text-gray_900_a2 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Cody Fisher
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
        <div className="absolute bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between max-w-[1170px] p-[18px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] right-[0] top-[7%] w-[100%]">
          <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[12px] sm:w-[100%] w-[auto]">
            <div className="flex flex-row gap-[24px] items-center justify-start w-[auto]">
              <div className="flex flex-col items-start justify-center w-[auto]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Workspace
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[4px] grid grid-cols-5 justify-start w-[171px]"
                orientation="horizontal"
              >
                <Stack className="h-[30px] mx-[0] relative w-[100%]">
                  <Img
                    src="images/img_ellipse47_3.png"
                    className="absolute h-[30px] inset-[0] justify-center m-[auto] rounded-radius50 w-[30px]"
                    alt="EllipseFortySeven TwentyFour"
                  />
                  <Text
                    className="absolute bg-light_blue_A700 bottom-[0] font-medium h-[14px] items-center justify-center right-[0] rounded-radius50 text-center text-white_A700 w-[14px]"
                    variant="body2"
                  >
                    2
                  </Text>
                </Stack>
                <Stack className="h-[30px] mx-[0] relative w-[100%]">
                  <Img
                    src="images/img_ellipse47_30x30.png"
                    className="absolute h-[30px] inset-[0] justify-center m-[auto] rounded-radius50 w-[30px]"
                    alt="EllipseFortySeven TwentyFive"
                  />
                  <Text
                    className="absolute bg-light_blue_A700 bottom-[0] font-medium h-[14px] items-center justify-center right-[0] rounded-radius50 text-center text-white_A700 w-[14px]"
                    variant="body2"
                  >
                    5
                  </Text>
                </Stack>
                <Stack className="h-[30px] mx-[0] relative w-[100%]">
                  <Img
                    src="images/img_ellipse47.png"
                    className="absolute h-[30px] inset-[0] justify-center m-[auto] rounded-radius50 w-[30px]"
                    alt="EllipseFortySeven TwentySix"
                  />
                  <Text
                    className="absolute bg-light_blue_A700 bottom-[0] font-medium h-[14px] items-center justify-center right-[0] rounded-radius50 text-center text-white_A700 w-[14px]"
                    variant="body2"
                  >
                    1
                  </Text>
                </Stack>
                <Stack className="h-[30px] mx-[0] relative w-[100%]">
                  <Img
                    src="images/img_ellipse47_2.png"
                    className="absolute h-[30px] inset-[0] justify-center m-[auto] rounded-radius50 w-[30px]"
                    alt="EllipseFortySeven TwentySeven"
                  />
                  <Text
                    className="absolute bg-light_blue_A700 bottom-[0] font-medium h-[14px] items-center justify-center right-[0] rounded-radius50 text-center text-white_A700 w-[14px]"
                    variant="body2"
                  >
                    4
                  </Text>
                </Stack>
                <Stack className="h-[30px] mx-[0] relative w-[100%]">
                  <Img
                    src="images/img_ellipse47_4.png"
                    className="absolute h-[30px] inset-[0] justify-center m-[auto] rounded-radius50 w-[30px]"
                    alt="EllipseFortySeven TwentyEight"
                  />
                  <Text
                    className="absolute bg-light_blue_A700 bottom-[0] font-medium h-[14px] items-center justify-center right-[0] rounded-radius50 text-center text-white_A700 w-[14px]"
                    variant="body2"
                  >
                    4
                  </Text>
                </Stack>
              </List>
            </div>
            <div className="flex flex-col items-start justify-start w-[auto]">
              <div className="bg-gray_900_0f border border-gray_900_0c border-solid flex flex-col items-start justify-center px-[12px] py-[8px] rounded-radius8 w-[auto]">
                <div className="flex flex-row items-center justify-between w-[92px]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <div className="bg-deep_purple_A201 h-[10px] rounded-radius50 w-[10px]"></div>
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Project
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[16px] w-[16px]"
                    alt="arrowdown Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[12px] items-center justify-start mr-[12px] w-[auto]">
            <Img
              src="images/img_computer.svg"
              className="h-[36px] w-[80px]"
              alt="computer"
            />
            <Button
              className="flex items-center justify-center min-w-[67px] text-center w-[auto]"
              leftIcon={
                <Img
                  src="images/img_menu.svg"
                  className="text-center"
                  alt="menu"
                />
              }
              shape="RoundedBorder8"
              size="xl"
              variant="OutlineGray90019"
            >
              <div className="bg-transparent cursor-pointer font-normal min-w-[43%] not-italic text-[13px] text-gray_900_a2 text-left w-[max-content]">
                Filter
              </div>
            </Button>
          </div>
        </div>
        <Line className="absolute bg-gray_200 h-[1px] right-[0] top-[15%] w-[82%]" />
      </Stack>
    </>
  );
};

export default SaveFilterOnePage;
