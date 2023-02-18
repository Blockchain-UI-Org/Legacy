import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "blockchain-ui/theme";

import { Image } from "../image/image";
import { regularIcons } from "../static/images/icons/regular/index";

type NotificationType = "loading" | "positive" | "negative";

type Icon = keyof typeof regularIcons;

const TypeToIcon: { [key in NotificationType]: Icon } = {
  // TO-DO Update with final icons
  loading: "spinner",
  positive: "check",
  negative: "alertWarning",
};

export interface NotificationProps {
  message: string;
  type: NotificationType;
}

export const Notification: FunctionComponent<NotificationProps> = ({
  type,
  message,
}) => {
  const icon = TypeToIcon[type];
  return (
    <NotificationWrapper type={type}>
      <Image height="24px" width="24px" name={icon} />
      <span>{message}</span>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div<{ type: NotificationType }>`
  color: ${withTheme(({ theme }) => theme.palette.common.white)};
  font-size: 16px;
  width: 280px;
  margin: 0 auto;
  background-color: ${withTheme(({ type, theme }) => {
    return css`
      ${type === "loading" && theme.palette.common.white}
      ${type === "negative" && theme.palette.error.color}
      ${type === "positive" && theme.palette.success.color}
    `;
  })};
  color: ${withTheme(({ type, theme }) =>
    type === "loading" ? theme.palette.common.black : theme.palette.common.white
  )};
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
  box-shadow: 0px 4px 16px rgba(58, 78, 88, 0.15);
`;
