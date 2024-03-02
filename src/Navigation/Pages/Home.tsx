import { Flex } from "antd";
import { FC, ReactElement } from "react";
import garethBot from "../../assets/gareth_bot.png";

export const Home: FC<{}> = ({}): ReactElement => {
  return (
    <Flex
      gap="middle"
      vertical
      justify="center"
      align="center"
      style={{ height: "100vh" }}
    >
      <img src={garethBot} alt="Gareth logo" width={"200px"} />
    </Flex>
  );
};
