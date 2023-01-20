import React from "react";

import {
  Img,
  Text,
  Line,
  Button,
  Input,
  Stack,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ViewpopupPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[19%]">
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
                            alt="arrowdown"
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
                                  alt="calendar"
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
                                alt="search"
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
          <div className="flex flex-col items-center justify-start md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[82%]">
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
                    alt="arrowdown One"
                  />
                </Button>
              </div>
              <Img
                src="images/img_group195_7.svg"
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
                    alt="calendar Two"
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
            <Stack className="h-[918px] relative w-[100%]">
              <div className="flex flex-col gap-[8px] items-center justify-start ml-[auto] mt-[400px] w-[auto]">
                <div className="flex flex-col items-start justify-start w-[32px]">
                  <Button
                    className="flex h-[32px] items-center justify-center w-[32px]"
                    shape="icbCustomBorderTL8"
                    size="smIcn"
                    variant="icbFillLightblueA700"
                  >
                    <Img
                      src="images/img_calendar_white_a700.svg"
                      className="h-[22px] w-[22px]"
                      alt="calendar Three"
                    />
                  </Button>
                </div>
                <Button
                  className="flex h-[32px] items-center justify-center w-[32px]"
                  shape="icbCustomBorderTL8"
                  size="smIcn"
                  variant="icbFillDeeppurpleA201"
                >
                  <Img
                    src="images/img_menu_white_a700.svg"
                    className="h-[22px] w-[22px]"
                    alt="menu"
                  />
                </Button>
              </div>
              <Stack className="absolute h-[918px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="flex flex-col items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 border border-gray_200 border-solid flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between p-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-center md:ml-[0] sm:ml-[0] ml-[14px] sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-start justify-center w-[auto]">
                            <Text
                              className="text-gray_900 text-left w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              Workflow
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[20px] items-start justify-start w-[auto]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                size="smIcn"
                                variant="icbFillLightblueA700"
                              >
                                <Img
                                  src="images/img_volume_white_a700.svg"
                                  className="h-[18px] w-[18px]"
                                  alt="volume One"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                variant="icbFillGray90063"
                              >
                                <Img
                                  src="images/img_alarm.svg"
                                  className="h-[18px] w-[18px]"
                                  alt="alarm"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                size="smIcn"
                                variant="icbFillGray90019"
                              >
                                <Img
                                  src="images/img_component28_gray_900.svg"
                                  className="h-[18px] w-[18px]"
                                  alt="ComponentTwentyEight"
                                />
                              </Button>
                              <Button
                                className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                                variant="icbFillGray90063"
                              >
                                <Img
                                  src="images/img_group195_gray_900.svg"
                                  className="h-[18px] w-[18px]"
                                  alt="ComponentTwentyNine"
                                />
                              </Button>
                            </div>
                            <Line className="bg-gray_900_6c h-[30px] w-[1px]" />
                            <List
                              className="sm:flex-col flex-row gap-[4px] grid grid-cols-4 justify-start w-[auto]"
                              orientation="horizontal"
                            >
                              <Stack className="h-[30px] mx-[0] relative w-[100%]">
                                <Img
                                  src="images/img_ellipse47.png"
                                  className="h-[30px] m-[auto] rounded-radius50 w-[30px]"
                                  alt="EllipseFortySeven"
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
                                  className="h-[30px] m-[auto] rounded-radius50 w-[30px]"
                                  alt="EllipseFortySeven One"
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
                                  src="images/img_ellipse47_1.png"
                                  className="h-[30px] m-[auto] rounded-radius50 w-[30px]"
                                  alt="EllipseFortySeven Two"
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
                                  className="h-[30px] m-[auto] rounded-radius50 w-[30px]"
                                  alt="EllipseFortySeven Three"
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
                        </div>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start mr-[14px] w-[auto]">
                        <Button
                          className="flex h-[36px] items-center justify-center w-[36px]"
                          variant="icbOutlineGray90019"
                        >
                          <Img
                            src="images/img_airplane.svg"
                            className="h-[20px] w-[20px]"
                            alt="airplane"
                          />
                        </Button>
                        <Button
                          className="flex h-[36px] items-center justify-center w-[36px]"
                          variant="icbOutlineGray90019"
                        >
                          <Img
                            src="images/img_file_deep_purple_a200.svg"
                            className="h-[22px] w-[22px]"
                            alt="file One"
                          />
                        </Button>
                        <Button
                          className="flex items-center justify-center min-w-[74px] text-center w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_save.svg"
                              className="text-center"
                              alt="save"
                            />
                          }
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineGray90019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal min-w-[22%] not-italic text-[13px] text-gray_900 text-left w-[max-content]">
                            Views
                          </div>
                        </Button>
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
                          <div className="bg-transparent cursor-pointer font-normal min-w-[20%] not-italic text-[13px] text-gray_900 text-left w-[max-content]">
                            Filter
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center min-w-[81px] text-center w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_sort.svg"
                              className="text-center"
                              alt="sort"
                            />
                          }
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineGray90019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal min-w-[24%] not-italic text-[13px] text-gray_900 text-left w-[max-content]">
                            Sort by
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex md:flex-col sm:flex-col flex-row gap-[8px] items-start justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                      <div className="bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start mb-[405px] py-[8px] rounded-radius8 w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[192px]">
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
                                (2)
                              </span>
                            </Text>
                            <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                              <Img
                                src="images/img_menu.svg"
                                className="h-[14px] w-[14px]"
                                alt="menu One"
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
                                      src="images/img_iconuserstar.svg"
                                      className="h-[14px] w-[14px]"
                                      alt="IconUserstar One"
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
                                        alt="menu Two"
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
                            <div className="bg-white_A700 flex flex-col items-start justify-center my-[0] rounded-radius8 w-[200px]">
                              <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                  <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                    <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                    <Text
                                      className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                      variant="body2"
                                    >
                                      AgentBook
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
                                    <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                      <Img
                                        src="images/img_menu_gray_900.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="menu Three"
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
                                      alt="EllipseFortySeven Five"
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
                                <Input
                                  className="font-normal leading-[normal] not-italic p-[0] text-[13px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                                  wrapClassName="md:h-[auto] sm:h-[auto] w-[200px]"
                                  type="text"
                                  name="Card"
                                  placeholder="|Enter card name"
                                  shape="RoundedBorder6"
                                  size="md"
                                  variant="OutlineLightblueA700"
                                ></Input>
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
                                  <Button
                                    className="cursor-pointer font-medium text-[13px] text-center text-white_A700 w-[53px]"
                                    shape="RoundedBorder4"
                                    size="lg"
                                    variant="FillLightblueA700"
                                  >
                                    Add
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start mb-[163px] py-[8px] rounded-radius8 w-[auto]">
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
                                alt="menu Four"
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
                          <List
                            className="flex-col gap-[8px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                              <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                                <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                  <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-deep_purple_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        DW4RTeam
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[14px]">
                                      <Img
                                        src="images/img_search_gray_900.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="search Two"
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
                                    <Img
                                      src="images/img_menu_purple_a100.svg"
                                      className="h-[6px] w-[90px]"
                                      alt="menu Five"
                                    />
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu One One"
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
                                            alt="menu Two"
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
                                  <div className="flex flex-col justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-blue_300 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        Asteler.io
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                    <Text
                                      className="font-medium text-gray_900_a2 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Design a website
                                    </Text>
                                    <Img
                                      src="images/img_filter.svg"
                                      className="h-[6px] w-[90px]"
                                      alt="filter One"
                                    />
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu Six"
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
                            <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                              <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                                <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                  <div className="flex flex-col justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        ContactRM
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                    <Text
                                      className="font-medium text-gray_900_a2 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Design a website
                                    </Text>
                                    <Img
                                      src="images/img_filter.svg"
                                      className="h-[6px] w-[90px]"
                                      alt="filter Two"
                                    />
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu Seven"
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
                                        ContactRM
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[14px]">
                                      <Img
                                        src="images/img_iconuserstar.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="IconUserstar Two"
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
                                    <Img
                                      src="images/img_filter.svg"
                                      className="h-[6px] w-[90px]"
                                      alt="filter Three"
                                    />
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu Eight"
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
                                      <Text
                                        className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        Created 3 days ago
                                      </Text>
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
                                  <div className="flex flex-col justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        ContactRM
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                    <Text
                                      className="font-medium text-gray_900_a2 text-left w-[auto]"
                                      variant="body1"
                                    >
                                      Design a website
                                    </Text>
                                    <Img
                                      src="images/img_filter.svg"
                                      className="h-[6px] w-[90px]"
                                      alt="filter Four"
                                    />
                                    <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu Nine"
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
                                      <Text
                                        className="bg-gray_900_14 font-medium px-[4px] py-[2px] rounded-radius4 text-gray_900_87 text-left w-[auto]"
                                        variant="body3"
                                      >
                                        Created 3 days ago
                                      </Text>
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
                      <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[20%]">
                        <Stack className="bg-gray_900_0a h-[826px] md:h-[auto] sm:h-[auto] py-[8px] relative rounded-radius8 w-[216px]">
                          <Stack className="bg-gray_900_0a h-[826px] md:h-[auto] sm:h-[auto] m-[auto] py-[8px] rounded-radius8 w-[216px]">
                            <div className="flex flex-col items-start justify-center mx-[auto] w-[192px]">
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
                                    alt="menu Ten"
                                  />
                                  <Img
                                    src="images/img_sort_gray_900.svg"
                                    className="h-[14px] w-[14px]"
                                    alt="sort Two"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="absolute bg-bluegray_50 flex flex-col h-[34px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-end mx-[auto] px-[12px] py-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] top-[0] w-[auto]">
                              <div className="flex flex-row items-center justify-between w-[192px]">
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-gray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    <span className="text-gray_900 text-[14px] font-inter">
                                      In Process
                                    </span>
                                    <span className="text-gray_900 text-[15px] font-inter">
                                      {" "}
                                    </span>
                                    <span className="text-gray_900_7f text-[12px] font-inter font-normal not-italic">
                                      (35)
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
                                  alt="user Three"
                                />
                              </div>
                            </div>
                          </Stack>
                          <div className="absolute bottom-[0] flex flex-col gap-[8px] inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
                            <Stack className="h-[732px] relative w-[100%]">
                              <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                                <div className="flex flex-col items-center justify-start w-[100%]">
                                  <List
                                    className="flex-col gap-[8px] grid items-center w-[100%]"
                                    orientation="vertical"
                                  >
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                                    src="images/img_menu_gray_900_14x14.svg"
                                                    className="h-[14px] w-[14px]"
                                                    alt="menu One Six"
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
                                                alt="EllipseFortySeven Eleven"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                                    alt="menu One Seven"
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
                                                alt="EllipseFortySeven Twelve"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                                    alt="menu One Eight"
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
                                                alt="EllipseFortySeven Thirteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                                    alt="menu One Nine"
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
                                                alt="EllipseFortySeven Fourteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                                    alt="menu One Ten"
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
                                                alt="EllipseFortySeven Fifteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
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
                                            <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                              <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                                <Img
                                                  src="images/img_menu_gray_900.svg"
                                                  className="h-[14px] w-[14px]"
                                                  alt="menu Seventeen"
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
                                                    alt="menu One Eleven"
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
                                                alt="EllipseFortySeven Sixteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start my-[0] px-[8px] w-[216px]">
                                      <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[195px]">
                                        <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                          <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                              <Text
                                                className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                                variant="body2"
                                              >
                                                AgentBook
                                              </Text>
                                            </div>
                                            <div className="flex flex-col items-start justify-start w-[14px]">
                                              <Img
                                                src="images/img_search_gray_900.svg"
                                                className="h-[14px] w-[14px]"
                                                alt="search Three"
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
                                            <Img
                                              src="images/img_filter.svg"
                                              className="h-[6px] w-[90px]"
                                              alt="filter Five"
                                            />
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
                                                    alt="menu One Twelve"
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
                                                alt="EllipseFortySeven Seventeen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </List>
                                </div>
                              </div>
                              <Img
                                src="images/img_group371.svg"
                                className="absolute h-[732px] inset-y-[0] my-[auto] right-[1%] w-[auto]"
                                alt="Group371"
                              />
                            </Stack>
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <Stack className="h-[55px] px-[8px] relative w-[216px]">
                                <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] rounded-radius8 w-[195px]">
                                  <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                    <div className="flex flex-col justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                        <Text
                                          className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          AgentBook
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[100%]">
                                      <Text
                                        className="font-medium text-gray_900_a2 text-left w-[auto]"
                                        variant="body1"
                                      >
                                        Design a website
                                      </Text>
                                      <Img
                                        src="images/img_filter.svg"
                                        className="h-[6px] w-[90px]"
                                        alt="filter Six"
                                      />
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <Text
                                          className="bg-gray_900_14 font-medium px-[4px] py-[2px] text-gray_900_87 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          Created 3 days ago
                                        </Text>
                                        <Img
                                          src="images/img_ellipse47_18x18.png"
                                          className="h-[1px] md:h-[auto] sm:h-[auto] object-cover rounded-radius9 w-[18px]"
                                          alt="EllipseFortySeven Eighteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-bluegray_50 bottom-[0] flex flex-col h-[50px] md:h-[auto] sm:h-[auto] inset-x-[0] items-center justify-start mx-[auto] px-[12px] py-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[216px]">
                                  <div className="flex flex-col items-start justify-start w-[auto]">
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
                              </Stack>
                              <div className="flex flex-col items-start justify-start mt-[62px] px-[8px] w-[216px]">
                                <div className="bg-white_A700 flex flex-col items-start justify-center w-[192px]">
                                  <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] md:self-stretch sm:self-stretch w-[100%]">
                                    <div className="flex flex-col justify-center self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <div className="bg-orange_400 h-[1px] rounded-radius3 w-[9%]"></div>
                                        <Text
                                          className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          AgentBook
                                        </Text>
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
                                          className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm.com
                                        </Text>
                                        <Text
                                          className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                          <Img
                                            src="images/img_icondescription.svg"
                                            className="h-[1px] w-[14px]"
                                            alt="Icondescription"
                                          />
                                          <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                            <Img
                                              src="images/img_iconmessage.svg"
                                              className="h-[1px] w-[14px]"
                                              alt="IconMessage"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              12
                                            </Text>
                                          </div>
                                          <List
                                            className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 w-[54%]"
                                            orientation="horizontal"
                                          >
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <Img
                                                src="images/img_iconchecklist3.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconChecklistThree"
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
                                                src="images/img_iconlink.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconLink"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                2
                                              </Text>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <Text
                                          className="bg-gray_900_14 font-medium px-[4px] py-[2px] text-gray_900_87 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          Created 3 days ago
                                        </Text>
                                        <Img
                                          src="images/img_ellipse47_18x18.png"
                                          className="h-[1px] md:h-[auto] sm:h-[auto] object-cover rounded-radius9 w-[18px]"
                                          alt="EllipseFortySeven Nineteen"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start mt-[185px] px-[8px] w-[216px]">
                                <div className="bg-white_A700 flex flex-col items-start justify-center w-[192px]">
                                  <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] md:self-stretch sm:self-stretch w-[100%]">
                                    <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <div className="bg-pink_A200 h-[1px] rounded-radius3 w-[8%]"></div>
                                        <Text
                                          className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          Development
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_iconfilecheck_gray_900.svg"
                                          className="h-[1px] w-[14px]"
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
                                          className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm.com
                                        </Text>
                                        <Text
                                          className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                          <Img
                                            src="images/img_icondescription.svg"
                                            className="h-[1px] w-[14px]"
                                            alt="Icondescription One"
                                          />
                                          <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                            <Img
                                              src="images/img_iconmessage.svg"
                                              className="h-[1px] w-[14px]"
                                              alt="IconMessage One"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              12
                                            </Text>
                                          </div>
                                          <List
                                            className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 w-[54%]"
                                            orientation="horizontal"
                                          >
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <Img
                                                src="images/img_iconchecklist3.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconChecklistThree One"
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
                                                src="images/img_iconlink.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconLink One"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                2
                                              </Text>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <Text
                                          className="bg-gray_900_14 font-medium px-[4px] py-[2px] text-gray_900_87 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          Created 3 days ago
                                        </Text>
                                        <Img
                                          src="images/img_ellipse47_18x18.png"
                                          className="h-[1px] md:h-[auto] sm:h-[auto] object-cover rounded-radius9 w-[18px]"
                                          alt="EllipseFortySeven Twenty"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start mt-[308px] px-[8px] w-[216px]">
                                <div className="bg-white_A700 flex flex-col items-start justify-center w-[192px]">
                                  <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] md:self-stretch sm:self-stretch w-[100%]">
                                    <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                      <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                        <div className="bg-pink_A200 h-[1px] rounded-radius3 w-[8%]"></div>
                                        <Text
                                          className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          Development
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-start w-[auto]">
                                        <Img
                                          src="images/img_iconfilecheck_gray_900.svg"
                                          className="h-[1px] w-[14px]"
                                          alt="IconFilecheck Nine"
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
                                          className="bg-orange_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm.com
                                        </Text>
                                        <Text
                                          className="bg-purple_50 font-normal justify-center not-italic pb-[2px] px-[4px] text-gray_900_a2 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          api.contactrm
                                        </Text>
                                      </div>
                                      <div className="flex flex-col items-start justify-center self-stretch w-[100%]">
                                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                          <Img
                                            src="images/img_icondescription.svg"
                                            className="h-[1px] w-[14px]"
                                            alt="Icondescription Two"
                                          />
                                          <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                                            <Img
                                              src="images/img_iconmessage.svg"
                                              className="h-[1px] w-[14px]"
                                              alt="IconMessage Two"
                                            />
                                            <Text
                                              className="font-medium text-gray_900_90 text-left w-[auto]"
                                              variant="body3"
                                            >
                                              12
                                            </Text>
                                          </div>
                                          <List
                                            className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 w-[54%]"
                                            orientation="horizontal"
                                          >
                                            <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                              <Img
                                                src="images/img_iconchecklist3.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconChecklistThree Two"
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
                                                src="images/img_iconlink.svg"
                                                className="h-[1px] w-[14px]"
                                                alt="IconLink Two"
                                              />
                                              <Text
                                                className="font-medium text-gray_900_90 text-left w-[auto]"
                                                variant="body3"
                                              >
                                                2
                                              </Text>
                                            </div>
                                          </List>
                                        </div>
                                      </div>
                                      <div className="flex flex-row items-center justify-between self-stretch w-[100%]">
                                        <Text
                                          className="bg-gray_900_14 font-medium px-[4px] py-[2px] text-gray_900_87 text-left w-[auto]"
                                          variant="body3"
                                        >
                                          Created 3 days ago
                                        </Text>
                                        <Img
                                          src="images/img_ellipse47_18x18.png"
                                          className="h-[1px] md:h-[auto] sm:h-[auto] object-cover rounded-radius9 w-[18px]"
                                          alt="EllipseFortySeven TwentyOne"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Stack>
                      </div>
                      <div className="bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start mb-[133px] py-[8px] rounded-radius8 w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[192px]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="text-gray_900 text-[14px] font-inter">
                                In Review
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
                                alt="menu Nineteen"
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
                                  <div className="flex flex-col justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        AgentBook
                                      </Text>
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
                                      <div className="flex flex-col items-start justify-start w-[14px]">
                                        <Img
                                          src="images/img_menu_gray_900.svg"
                                          className="h-[14px] w-[14px]"
                                          alt="menu Twenty"
                                        />
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
                                        alt="EllipseFortySeven TwentyTwo"
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
                                        src="images/img_search_gray_900.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="search Four"
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
                                          alt="menu TwentyOne"
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
                                        alt="EllipseFortySeven TwentyThree"
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
                                      <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        AgentBook
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-[14px]">
                                      <Img
                                        src="images/img_iconuserstar.svg"
                                        className="h-[14px] w-[14px]"
                                        alt="IconUserstar Three"
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
                                          alt="menu TwentyTwo"
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
                                        alt="EllipseFortySeven TwentyFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start px-[8px] w-[auto]">
                              <div className="bg-white_A700 flex flex-col items-start justify-center rounded-radius8 w-[200px]">
                                <div className="flex flex-col gap-[2px] items-start justify-center p-[8px] rounded-radius8 md:self-stretch sm:self-stretch w-[100%]">
                                  <div className="flex flex-col justify-center self-stretch w-[100%]">
                                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                      <div className="bg-pink_A200 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        ContactRM
                                      </Text>
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
                                          alt="menu TwentyThree"
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
                                        alt="EllipseFortySeven TwentyFive"
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
                                      <div className="bg-orange_400 h-[6px] rounded-radius50 w-[6px]"></div>
                                      <Text
                                        className="font-normal not-italic text-gray_900_90 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        AgentBook
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
                                          alt="menu TwentyFour"
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
                                        alt="EllipseFortySeven TwentySix"
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
                                    alt="plus Two"
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
                      <div className="bg-gray_900_0a flex flex-col gap-[8px] items-center justify-start mb-[667px] py-[8px] rounded-radius8 w-[auto]">
                        <div className="flex flex-row items-center justify-between w-[192px]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-gray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="text-gray_900 text-[14px] font-inter">
                                Completed
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
                                alt="menu TwentyFive"
                              />
                              <Img
                                src="images/img_sort_gray_900.svg"
                                className="h-[14px] w-[14px]"
                                alt="sort Five"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_user_gray_900.svg"
                            className="h-[18px] w-[18px]"
                            alt="user Five"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-[auto]">
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
                                      alt="IconFilecheck Eleven"
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
                                        alt="menu TwentySix"
                                      />
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
                                      alt="EllipseFortySeven TwentySeven"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 border border-gray_900_19 border-solid flex flex-col gap-[16px] items-center justify-start py-[16px] right-[17%] rounded-radius8 top-[6%] w-[32%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row items-center justify-between w-[337px]">
                      <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_save.svg"
                          className="h-[18px] w-[18px]"
                          alt="save"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Views
                        </Text>
                      </div>
                      <Img
                        src="images/img_close.svg"
                        className="h-[16px] w-[16px]"
                        alt="close One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                    <Line className="bg-gray_900_63 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[auto]">
                      <div className="flex flex-row gap-[16px] items-center justify-start px-[15px] py-[10px] w-[367px]">
                        <div className="bg-deep_purple_A201 h-[10px] rounded-radius50 w-[10px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_99 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          My first filter
                        </Text>
                      </div>
                      <div className="bg-gray_900_0a flex flex-col items-start justify-start px-[15px] py-[10px] w-[367px]">
                        <div className="flex flex-col items-start justify-center w-[336px]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                            <div className="bg-pink_A200 h-[10px] rounded-radius50 w-[10px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_99 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Available for me
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-center px-[15px] py-[10px] w-[367px]">
                        <div className="flex flex-row items-center justify-between w-[338px]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                            <div className="bg-teal_A400 h-[10px] rounded-radius50 w-[10px]"></div>
                            <Text
                              className="font-normal not-italic text-gray_900_99 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Current Tasks
                            </Text>
                          </div>
                          <Img
                            src="images/img_trash.svg"
                            className="h-[16px] w-[16px]"
                            alt="trash"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start px-[15px] py-[10px] w-[367px]">
                        <div className="bg-orange_400 h-[10px] rounded-radius50 w-[10px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_99 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Top Project
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[16px] items-center justify-start px-[15px] py-[10px] w-[367px]">
                        <div className="bg-light_blue_A200 h-[10px] rounded-radius50 w-[10px]"></div>
                        <Text
                          className="font-normal not-italic text-gray_900_99 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Favorites
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Stack>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewpopupPage;
