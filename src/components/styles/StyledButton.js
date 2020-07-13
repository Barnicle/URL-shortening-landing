import styled from 'styled-components';

const StyledButton = styled.button`
background: ${props => props.theme.cyan};
border-radius: ${props => props.radius};
border: 1px solid transparent;
padding: 5px;
color: white;
font-weight: 700;
`

export default StyledButton;