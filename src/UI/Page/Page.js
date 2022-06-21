import { Content, Container, Header } from "rsuite";

import "./Page.css"

export const Page = ({ header, children }) => {
  return (
    <Container className={'container-padding'}>
        <Header className={'header-content'}>{header}</Header>
        <Content className={'content'}>{children}</Content>
    </Container>
  )
}
