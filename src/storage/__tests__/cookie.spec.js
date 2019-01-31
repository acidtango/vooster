import CookieStorage from '../cookie'

describe('CookieStorage', () => {
  beforeEach(() => {
    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: '_name=Rick&Morty; tz=Europe%2FMadrid;',
    })
  })

  describe('.get', () => {
    describe('when the cookie exists', () => {
      it('returns the correct content', () => {
        const result = CookieStorage.get('_name')
        const expected = 'Rick&Morty'

        expect(result).toEqual(expected)
      })
    })

    describe('when the cookie does not exist', () => {
      it('returns undefined', () => {
        const result = CookieStorage.get('_fakenews')

        expect(result).toBeUndefined()
      })
    })
  })

  describe('.set', () => {
    describe('when the name is present', () => {
      it('sets the cookie', () => {
        const value = 'rick_and_morty'

        CookieStorage.set('_test', value)

        expect(document.cookie).toContain(value)
      })
    })

    describe('when name is empty', () => {
      it('returns false', () => {
        const result = CookieStorage.set()

        expect(result).toBe(false)
      })
    })

    describe('when value is empty', () => {
      it('returns false', () => {
        const result = CookieStorage.set('test')

        expect(result).toBe(false)
      })
    })
  })

  describe('.remove', () => {
    it('removes the cookie with the given name', () => {
      const value = 'Rick&Morty'

      expect(document.cookie).toContain(value)

      CookieStorage.remove('_name')

      expect(document.cookie).not.toContain(value)
    })
  })

  describe('.has', () => {
    describe('when the cookie exists', () => {
      it('returns true', () => {
        const result = CookieStorage.has('_name')
        expect(result).toBe(true)
      })
    })

    describe('when the cookie does not exist', () => {
      it('returns false', () => {
        const result = CookieStorage.has('_fake')
        expect(result).toBe(false)
      })
    })
  })

  describe('.all', () => {
    it('returns the cookies in JSON format', () => {
      const result = CookieStorage.all()
      const expected = {
        _name: 'Rick&Morty',
        tz: 'Europe/Madrid;',
      }

      expect(result).toEqual(expected)
    })
  })

  describe('.raw', () => {
    it('returns the cookies in string format', () => {
      const result = CookieStorage.raw()
      const expected = '_name=Rick&Morty; tz=Europe%2FMadrid;'

      expect(result).toEqual(expected)
    })
  })
})
