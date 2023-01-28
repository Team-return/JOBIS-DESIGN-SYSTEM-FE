import React from 'react';
import styled from 'styled-components';
import { font } from '../../styles/theme/font';

export default {
  title: 'Typography/Styles',
};

const HeadingBase = styled.p<{ variant: keyof typeof font }>(
  { marginBottom: 20 },
  (props) => font[props.variant]
);
export const Heading = () => (
  <>
    <HeadingBase variant="Heading1">Heading1</HeadingBase>
    <HeadingBase variant="Heading2">Heading2</HeadingBase>
    <HeadingBase variant="Heading3">Heading3</HeadingBase>
    <HeadingBase variant="Heading4">Heading4</HeadingBase>
    <HeadingBase variant="Heading5">Heading5</HeadingBase>
    <HeadingBase variant="Heading6">Heading6</HeadingBase>
  </>
);

const BodyBase = styled.p<{ variant: keyof typeof font }>(
  { marginBottom: 20 },
  (props) => font[props.variant]
);
export const Body = () => (
  <>
    <BodyBase variant="Body1">Body1</BodyBase>
    <BodyBase variant="Body2">Body2</BodyBase>
    <BodyBase variant="Body3">Body3</BodyBase>
    <BodyBase variant="Body4">Body4</BodyBase>
  </>
);

const CaptionBase = styled.p<{ variant: keyof typeof font }>(
  { marginBottom: 20 },
  (props) => font[props.variant]
);
export const Caption = () => (
  <>
    <CaptionBase variant="Caption">Caption</CaptionBase>
  </>
);
