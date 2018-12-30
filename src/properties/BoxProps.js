const boxProps = {
  content: {
    direction: {
      options: [
        'row',
        'column',
        'row-responsive'
      ],
      value: 'column'
    },
    gap: {
      options: [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'none'
    }, 
    align: {
      options: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ],
      value: 'start'
    },
    alignContent: {
      options: [
        'start',
        'center',
        'end',
        'between',
        'around',
        'stretch',
      ],
      value: 'stretch'
    },
    alignSelf: {
      options: [
        'start',
        'center',
        'end',
        'stretch'
      ],
      value: 'stretch'
    },
    justify: {
      options: [
        'start',
        'center',
        'between',
        'end'
      ],
      value: 'start'
    },
    wrap: {
      options: [
        'true',
        'false'
      ],
      value: 'true'
    },
    flex: {
      options: [
        'grow',
        'shrink',
        'true',
        'false'
      ],
      value: 'true'
    }, 
  },
  styling: {
    animation: {
      options: [
        'fadeIn',
        'fadeOut',
        'jiggle',
        'pulse',
        'slideUp',
        'slideDown',
        'slideLeft',
        'slideRight',
        'zoomIn',
        'zoomOut'
      ],
      value: ''
    },
    elevation: {
      options: [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'none'
    },
    round: {
      options: [
        'true',
        'false',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        'full'
      ],
      value: 'false'
    },
    overflow: {
      options: [
        'auto',
        'hidden',
        'scroll',
        'visible'
      ],
      value: 'auto'
    },
  },
  boxModel: {
    fill: {
      options: [
        'horizontal',
        'vertical',
        'true',
        'false'
      ],
      value: 'false'
    },
    height: {
      options: [
        'auto',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'auto'
    },
    width: {
      options: [
        'auto',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'auto'
    },
    margin: {
      options: [
        'none',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'none'
    },
    pad: {
      options: [
        'none',
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: 'none'
    },
  }
}

export default boxProps;