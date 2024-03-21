import styled from 'styled-components';

// Note: adding 1rem to the minimum font size to ensure font is resizable
const typeFluidity = {
  default: '1rem', // 16px
  body: 'clamp(1rem, 4vw + 1rem, 2rem)', // 16px, 4% of vw + 16px, 32px
  header: 'clamp(2rem, 5vw + 1rem, 4rem)', // 32px, 5% of vw + 16px, 64px
};

export default function FluidText(
  type: 'default' | 'body' | 'header' = 'default'
) {
  const fontSize = typeFluidity[type];

  //   TODO: Use semantic tags for better accessibility, (e.g. <h1>, <h2>, <p>, <a>, etc.)
  //   Can return different tags based on the type prop
  return (
    <Wrapper style={{ '--fluid-font-size': fontSize } as React.CSSProperties}>
      FluidText
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: var(--fluid-font-size);

  /* Note: In Safari as of March 21, 2024, the font (vw in clamp) won't resize unless another property (with vw or vh)
  needs to be recalculated. This is a temporary fix with minimal impact */
  min-height: 0vh;
`;
