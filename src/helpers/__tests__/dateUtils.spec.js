import DateUtils from '../dateUtils'

describe('DateUtils', () => {
  describe('humanizer', () => {
    describe('.distanceToNow', () => {
      it('returns the days from the given date to now', () => {
        const tenMinutesAgo = new Date(new Date().getTime() - 10 * 60000)
        const result = DateUtils.humanizer.distanceToNow(tenMinutesAgo)
        const expected = '10 minutes'

        expect(result).toEqual(expected)
      })
    })

    describe('.distanceBetween', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.humanizer.distanceBetween(
          new Date('02/02/1991'),
          new Date('05/02/1991')
        )
        const expected = '3 months'

        expect(result).toEqual(expected)
      })
    })
  })

  describe('formatter', () => {
    const TEST_DATE = new Date('1991/02/05 13:37')

    describe('.time', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.formatter.time(TEST_DATE)
        const expected = '13:37'

        expect(result).toEqual(expected)
      })
    })

    describe('.short', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.formatter.short(TEST_DATE)
        const expected = '05/02/1991'

        expect(result).toEqual(expected)
      })
    })

    describe('.long', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.formatter.long(TEST_DATE)
        const expected = '05/02/1991 13:37'

        expect(result).toEqual(expected)
      })
    })

    describe('.verbose', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.formatter.verbose(TEST_DATE)
        const expected = 'February 05, 1991'

        expect(result).toEqual(expected)
      })
    })

    describe('.custom', () => {
      it('returns the days between the given dates in words', () => {
        const result = DateUtils.formatter.custom(TEST_DATE, 'YYYY')
        const expected = '1991'

        expect(result).toEqual(expected)
      })
    })
  })
})
