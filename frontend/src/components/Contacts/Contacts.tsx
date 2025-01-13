import { useQuery } from "@tanstack/react-query";
import { FunctionComponent, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ContactQueryKeyEnum } from "../../@types/enum";
import { contactUrl, routes } from "../../libs/constructors";
import { Card } from "./components";
import { Container } from "./Contacts.styles";

interface ContactsProps {}

const Contacts: FunctionComponent<ContactsProps> = () => {
  const { isPending, error, data } = useQuery<IContactsResponse>({
    queryKey: [ContactQueryKeyEnum.LIST],
    queryFn: () => fetch(contactUrl).then((res) => res.json()),
  });

  const navigate = useNavigate();

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return error.message;
  }

  const contacts: ICard[] = data.items.map((c) => {
    return {
      id: c.id,
      avatar: c.avatar,
      name: `${c.first_name} ${c.last_name}`,
      phone: c.phone,
    };
  });

  const handleClick = (c: ICard) => {
    return () => {
      navigate(routes.details.url(c.id));
    };
  };

  return (
    <Container>
      {contacts.map((c) => (
        <Card key={c.id} info={c} onClick={handleClick(c)} />
      ))}
    </Container>
  );
};

export default memo(Contacts);
