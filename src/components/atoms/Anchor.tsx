import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> { }

const Anchor: React.FC<Props> = ({ children, ...props }) => (
    <StyledAnchor>{children}</StyledAnchor>
)

export default Anchor

const StyledAnchor = styled.a``