import { Flex, Typography } from "antd";
import { FC, ReactElement } from "react";
import flappyIcon from "../../assets/logo.png";

import styled from "styled-components";

const HoverLink = styled.a`
  :hover {
    filter: drop-shadow(0 0 2em #faad14);
  }
`;

export const FlappyEnergy: FC<{}> = ({}): ReactElement => {
  return (
    <Flex gap="middle" vertical align="center">
      <Typography.Title>Click the Logo to start</Typography.Title>
      <HoverLink href="flappy/index.html" target="_blank">
        <img src={flappyIcon} alt="Flappy logo" width={"100px"} />
      </HoverLink>

      <Typography.Paragraph>
        Fly as close to the loadfactor profile as you can to get a better score.
      </Typography.Paragraph>
      <Typography.Paragraph>
        Left Click,Left button or S for a small flap. Right Click, Right Button
        or W for a big flap.
      </Typography.Paragraph>
    </Flex>
  );
};
