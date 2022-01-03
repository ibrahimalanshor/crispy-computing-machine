const plugin = require('tailwindcss/plugin')
const { spacing, screens } = require('tailwindcss/defaultTheme')

module.exports = plugin(function ({ addUtilities, theme }) {
  const gaps = [1,2,3,4]

  const row = {
    '.row': {
      display: 'flex',
      flexWrap: 'wrap'
    },
  }

  const col = {
    '.col': {
      flexShrink: '0',
      flexWrap: '0'
    },
    '.col-fill': {
      flexShrink: '1',
      flexGrow: '1',
    }
  }

  const rowGap = gaps.map(gap => ({
    [`.row.row-gap-${gap}`]: {
      marginLeft: `-${spacing[gap]}`,
      marginRight: `-${spacing[gap]}`,
    },
    [`.row-gap-${gap} > .col, .row-gap-${gap} > .col-fill`]: {
      paddingLeft: `${spacing[gap]}`,
      paddingRight: `${spacing[gap]}`,
    }
  }))

  const rowAlign = {
    '.row-center': {
      display: 'flex',
      justifyContent: 'center'
    },
    '.row-end': {
      display: 'flex',
      justifyContent: 'end'
    },
    '.row-between': {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '.row-middle': {
      display: 'flex',
      alignItems: 'center'
    }
  }

  const wrapper = {
    '.wrapper': {
      maxWidth: '100%',
      paddingLeft: spacing[4],
      paddingRight: spacing[4],
      marginLeft: 'auto',
      marginRight: 'auto',
      overflow: 'hidden'
    },
    [`@media(min-width: ${screens.sm})`]: {
      '.wrapper:not(.wrapper-full)': {
        maxWidth: screens.sm
      }
    },
    [`@media(min-width: ${screens.md})`]: {
      '.wrapper:not(.wrapper-full):not(.wrapper-sm)': {
        maxWidth: screens.md
      }
    },
    [`@media(min-width: ${screens.lg})`]: {
      '.wrapper:not(.wrapper-full):not(.wrapper-sm):not(.wrapper-md)': {
        maxWidth: screens.lg
      }
    },
    [`@media(min-width: ${screens.xl})`]: {
      '.wrapper:not(.wrapper-full):not(.wrapper-sm):not(.wrapper-md):not(.wrapper-lg)': {
        maxWidth: screens.xl
      }
    }
  }

  addUtilities([row, col, ...rowGap, rowAlign, wrapper ])
})