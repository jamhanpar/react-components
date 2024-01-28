import styled from 'styled-components';

// Note:
// Import Nunito Sans font from Google Fonts, available in fonts.scss

export default function Text({
  color = '#666666',
  content,
  link,
  linkLabel,
}: {
  color?: string;
  content: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <Wrapper color={color}>
      {`${content} `}
      <Link href={link}>{linkLabel}</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ color }: any) => color};
  margin-top: 2rem;
`;

const Link = styled.a`
  display: inline-block;
  color: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: -webkit-transform 150ms ease-out, color 150ms ease-out;
  transition: transform 150ms ease-out, color 150ms ease-out;

  &:hover {
    color: #0297f5;
    cursor: pointer;
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;
