import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    level: '1' | '2' | '3' | '4' | '5' | '6'
}

const Heading: React.FC<Props> = ({ level, children, ...props }) => {
    switch (level) {
        case '1':
            return <StyledH1 {...props}>{children}</StyledH1>
        case '2':
            return <StyledH2 {...props}>{children}</StyledH2>
        case '3':
            return <StyledH3 {...props}>{children}</StyledH3>
        case '4':
            return <StyledH4 {...props}>{children}</StyledH4>
        case '5':
            return <StyledH5 {...props}>{children}</StyledH5>
        case '6':
            return <StyledH6 {...props}>{children}</StyledH6>
        default:
            return <StyledH1 {...props}>{children}</StyledH1>
    }
}

export default Heading

const StyledH1 = styled.h1``
const StyledH2 = styled.h2``
const StyledH3 = styled.h3``
const StyledH4 = styled.h4``
const StyledH5 = styled.h5``
const StyledH6 = styled.h6``




