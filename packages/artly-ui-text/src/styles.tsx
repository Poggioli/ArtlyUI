import { CSS, styled } from '@artly-ui/core';
import { auxiliary, body1, body2, caption, lead1, lead2 } from '@artly-ui/tokens';

const defaultAlignCSS: CSS = {
  width: '100%',
  display: 'inline-block'
};

const StyledText = styled('span', {
  margin: 0,
  padding: 0,

  '& > strong': {
    fontWeight: '$5'
  },

  variants: {
    variant: {
      lead1: {
        ...lead1
      },
      lead2: {
        ...lead2
      },
      body1: {
        ...body1
      },
      body2: {
        ...body2
      },
      auxiliary: {
        ...auxiliary
      },
      caption: {
        ...caption
      }
    },
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        ...defaultAlignCSS,
        textAlign: 'center'
      },
      right: {
        ...defaultAlignCSS,
        textAlign: 'right'
      }
    }
  },

  defaultVariants: {
    variant: 'body1',
    align: 'left'
  }
});

export { StyledText };
