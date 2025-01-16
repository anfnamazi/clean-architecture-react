import { personImgPath } from "libs/config/constructors";
import { FunctionComponent, HTMLAttributes } from "react";
import { ICard } from "../types";
import { Avatar, Container, Info } from "./Card.styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  info: ICard;
}

const Card: FunctionComponent<CardProps> = ({
  info: { name, avatar, phone, address },
  ...divProps
}) => {
  return (
    <Container {...divProps}>
      <Avatar src={avatar ?? personImgPath} alt={name} />
      <Info>
        <div>name: {name}</div>
        <div>phone: {phone}</div>
        <div>address: {address ?? "--"}</div>
      </Info>
    </Container>
  );
};

export default Card;
