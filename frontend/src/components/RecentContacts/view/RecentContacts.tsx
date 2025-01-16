import { Card, ICard, useCachedContacts } from "components/shared";
import { routes } from "libs/config/constructors";
import { isEmpty } from "lodash";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
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
      {isEmpty(cachedContact) ? "no cache ..." : null}
      {cachedContact.map((c) => (
        <Card info={c} onClick={handleClick(c)} />
      ))}
    </Container>
  );
};

export default RecentContact;
