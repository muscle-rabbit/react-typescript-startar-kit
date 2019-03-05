import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {

}

const Text: React.FC<Props> = ({ children, ...props }) => (
    <StyledP {...props}>{children}</StyledP>
)

const StyledP = styled.p``

export default Text