import styled from "@emotion/styled";

export const Card = styled.div({
  border: "1px solid black",
  padding: 12,
  borderRadius: 4,
  cursor: "pointer",
  margin: "4px 0",
  display: "flex",
  gap: 8,
  width: 250,
});

export const Avatar = styled.img({
  width: 40,
  height: 40,
  borderRadius: "50%",
});

export const Info = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});
