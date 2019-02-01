import dateFns from 'date-fns'

const DateUtils = {
  humanizer: {
    distanceToNow: (date = new Date()) => {
      return dateFns.distanceInWordsToNow(date)
    },

    distanceBetween: (from = new Date(), to = new Date()) => {
      return dateFns.distanceInWords(from, to)
    },
  },
  formatter: {
    time: (date = new Date()) => {
      return dateFns.format(date, 'HH:mm')
    },

    short: (date = new Date()) => {
      return dateFns.format(date, 'DD/MM/YYYY')
    },

    long: (date = new Date()) => {
      return dateFns.format(date, 'DD/MM/YYYY HH:mm')
    },

    verbose: (date = new Date()) => {
      return dateFns.format(date, 'MMMM DD, YYYY')
    },

    custom: (date = new Date(), format) => {
      return dateFns.format(date, format)
    },
  },
}

export default DateUtils
