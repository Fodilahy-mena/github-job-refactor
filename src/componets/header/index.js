
import React from 'react'
import { HeaderElement, Container, Frame, Form, Input, Button } from './styles/header';

export default function Header({children, ...restProps}) {
    return (<HeaderElement {...restProps}>{children}</HeaderElement>);
}

Header.Container = function HeaderContainer({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}
Header.Frame = function HeaderFrame({children, ...restProps}) {
    return (<Frame {...restProps}>{children}</Frame>)
}

Header.Form = function HeaderForm({children, ...restProps}) {
    return (<Form {...restProps}>{children}</Form>)
}

Header.Input = function HeaderInput({children, ...restProps}) {
    return (<Input {...restProps}>{children}</Input>)
}

Header.Button = function HeaderButton({children, ...restProps}) {
    return (<Button {...restProps}>{children}</Button>)
}
