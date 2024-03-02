import { Flex } from "antd";
import { FC, ReactElement } from "react";
import flappyIcon from "../../assets/logo.png";

import styled from "styled-components";

const HoverLink = styled.a`

  :hover {
    filter: drop-shadow(0 0 2em #faad14);
  }

}

`;

export const FlappyEnergy: FC<{}> = ({}): ReactElement => {
  return (
    <Flex
      gap="middle"
      vertical
      justify="center"
      align="center"
      style={{ height: "100vh" }}
    >
      <HoverLink href="flappy/index.html" target="_blank">
        <img src={flappyIcon} alt="Flappy logo" width={"100px"} />
      </HoverLink>
      <h1>Click the Logo</h1>
    </Flex>
  );
};
