import { FunctionComponent, HTMLAttributes } from "react";
import { Avatar, Card, Info } from "./Contact.styles";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  info: IContact;
}

const Contact: FunctionComponent<ContactProps> = ({
  info: { name, avatar, phone },
  ...divProps
}) => {
  return (
    <Card {...divProps}>
      <Avatar src={avatar} alt={name} />
      <Info>
        <div>name: {name}</div>
        <div>phone: {phone}</div>
      </Info>
    </Card>
  );
};

export default Contact;
