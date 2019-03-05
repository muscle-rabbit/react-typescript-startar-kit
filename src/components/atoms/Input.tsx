import * as React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLAttributes<Props> {

}
const Input: React.FC<Props> = (props: Props) => (
    <StyledInput type="text" />
)

export default Input

const StyledInput = styled.input`
width:100%;
height:100%;
`