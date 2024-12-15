import styled from 'styled-components';
import { Button } from './Button';

const SpookyButton = styled(Button)`
  font-family: 'Spooky Halloween Font';

  .btn_contents {
    border: 2px solid black;
    background-color: orange;
    color: black;
  }
`;

export default SpookyButton;
