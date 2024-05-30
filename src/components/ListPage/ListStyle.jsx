import styled from "styled-components";

const ListPage = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
  grid-gap: 60px 45px;

  header {
    grid-area: header;
  }
  aside {
    grid-area: aside;
  }
  main {
    grid-area: main;
    width: 892px;
  }
  div:last-child {
    grid-area: footer;
  }
`;

const ListItem = styled.article`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  img {
    margin-right: 24px;

    width: 180px;
    height: 240px;
    background-color: var(--grey2);
  }
  .description {
    width: 407px;
    height: fit-content;

    display: grid;
    grid-template-areas:
      "title title"
      "info info"
      "stock location"
      "lowest price";
    gap: 22px 48px;
  }
  .description > span {
    align-content: center;
    color: var(--black);
    font-size: 16px;
    font-weight: 400;
  }
  .title {
    grid-area: title;

    width: 315px;

    color: var(--black);
    font-size: 20px;
    font-weight: 700;
  }
  .promo {
    display: none;
  }
  .info {
    grid-area: info;
  }
  .stock {
    grid-area: stock;
  }
  .location {
    grid-area: location;
  }
  .lowest {
    grid-area: lowest;
  }
  .price {
    grid-area: price;
  }
  .highlightBlue {
    color: var(--blue3);
    font-size: 16px;
    font-weight: 700;
  }
  .highlightPink {
    color: var(--pink);
    font-size: 16px;
    font-weight: 700;
  }
  .btns {
    margin-left: auto;
    display: flex;
    flex-flow: column nowrap;
    gap: 16px;
  }
`;

export { ListPage, ListItem };
