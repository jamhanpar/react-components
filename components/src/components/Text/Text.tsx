import styled from 'styled-components';

// Note:
// Import Nunito Sans font from Google Fonts, available in fonts.scss

const fonts: {
  [key: string]: string;
} = {
  asap: 'Asap',
  nunitoSans: 'Nunito Sans',
  roboto: 'Roboto',
};

export default function Text({
  content,
  color = '#666666',
  linkHoverColor = '#0297f5',
  link,
  linkLabel,
  fontFamily = 'asap',
}: {
  content: string;
  color?: string;
  link?: string;
  linkLabel?: string;
  linkHoverColor?: string;
  fontFamily?: keyof typeof fonts; // Update the type of 'fontFamily' to be one of the keys of the 'fonts' object
}) {
  return (
    <Wrapper color={color} linkHoverColor={linkHoverColor} fontFamily={fonts[fontFamily]}>
      {`${content} `}
      <Link href={link}>{linkLabel}</Link>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color?: string; linkHoverColor?: string; fontFamily?: string }>`
  font-family: ${({fontFamily}: any) => `${fontFamily}, Nunito Sans, sans-serif`};
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
    color: ${({ linkHoverColor }: any) => linkHoverColor};
    cursor: pointer;
    -webkit-transform: translateY(-1px);
    -moz-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
  }
`;
