import { ICard } from "components/Contacts/types";
import { FunctionComponent, HTMLAttributes } from "react";
import { Avatar, Container, Info } from "./Card.styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  info: ICard;
}

const Card: FunctionComponent<CardProps> = ({
  info: { name, avatar, phone },
  ...divProps
}) => {
  return (
    <Container {...divProps}>
      <Avatar src={avatar} alt={name} />
      <Info>
        <div>name: {name}</div>
        <div>phone: {phone}</div>
      </Info>
    </Container>
  );
};

export default Card;
