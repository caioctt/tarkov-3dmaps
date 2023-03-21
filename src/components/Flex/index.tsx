/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type props = React.HTMLAttributes<HTMLElement> & {
  grow?: boolean;
  shrink?: boolean;
  direction?: React.CSSProperties['flexDirection'];
  wrap?: React.CSSProperties['flexWrap'];
  justifyContent?: React.CSSProperties['justifyContent'];
  alignItems?: React.CSSProperties['alignItems'];
  innerRef?: React.Ref<any>;
};

const styles = {
  root: css`
    display: 'flex';
  `,
};

export default function Flex({
  children,
  grow,
  shrink,
  direction,
  wrap,
  justifyContent,
  alignItems,
  innerRef,
  ...rest
}: props) {
  return (
    <div
      {...rest}
      ref={innerRef}
      css={[styles.root, rest.className]}
      style={{
        flexGrow: grow ? 1 : 0,
        flexShrink: shrink || shrink === undefined ? 1 : 0,
        flexDirection: direction ?? 'row',
        flexWrap: wrap ?? 'nowrap',
        justifyContent,
        alignItems,
        ...rest.style,
      }}
    >
      {children}
    </div>
  );
}
