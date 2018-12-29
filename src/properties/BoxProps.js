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
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge'
      ],
      value: ''
    }, 
    align: {
      options: [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ],
      value: ''
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
      value: ''
    },
    justify: {
      options: [
        'start',
        'center',
        'between',
        'end'
      ],
      value: ''
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
      value: ''
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
      value: ''
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
      value: ''
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