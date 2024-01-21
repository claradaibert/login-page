import React from "react";

import * as Style from './styles';

interface IProps {
    children: JSX.Element[];
}

const PageContainer: React.FC<IProps> = ({children}) => {
    return (
        <Style.PageWrap>
            <Style.Container>
                {children}
            </Style.Container>
        </Style.PageWrap>
    )
}

export default PageContainer;