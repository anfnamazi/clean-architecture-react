import { Card, ICard } from "components/shared";
import { routes } from "libs/config/constructors";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useCachedContacts } from "../hooks";
import { Container } from "./RecentContacts.styles";

interface RecentContactProps {}

const RecentContact: FunctionComponent<RecentContactProps> = () => {
  const { cachedContact } = useCachedContacts();
  const navigate = useNavigate();

  const handleClick = (c: ICard) => {
    return () => {
      navigate(routes.details.url(c.id));
    };
  };

  return (
    <Container>
      {cachedContact.map((c) => (
        <Card info={c} onClick={handleClick(c)} />
      ))}
    </Container>
  );
};

export default RecentContact;
