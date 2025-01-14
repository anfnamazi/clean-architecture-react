import { routes } from "libs/config/constructors";
import { withUseCase } from "libs/HOC/withUseCase";
import { useNavigate } from "react-router-dom";
import { ICard } from "../types";
import { useCaseCardContacts } from "../useCases";
import { Card } from "./Card";
import { Container } from "./Contacts.styles";

const Contacts = withUseCase(({ data }) => {
  const navigate = useNavigate();

  const handleClick = (c: ICard) => {
    return () => {
      navigate(routes.details.url(c.id));
    };
  };

  return (
    <Container>
      {data.map((c) => (
        <Card key={c.id} info={c} onClick={handleClick(c)} />
      ))}
    </Container>
  );
}, useCaseCardContacts);

export default Contacts;
