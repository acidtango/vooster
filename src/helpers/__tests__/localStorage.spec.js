import LocalStorage from '../localStorage'

describe('LocalStorage', () => {
  beforeEach(() => {
    localStorage.setItem('vooster-name', 'Rick&Morty')
  })

  describe('.get', () => {
    describe('when the item exists', () => {
      it('returns the correct content', () => {
        const result = LocalStorage.get('name')
        const expected = 'Rick&Morty'

        expect(result).toEqual(expected)
      })
    })

    describe('when the item does not exist', () => {
      it('returns undefined', () => {
        const result = LocalStorage.get('_fakenews')

        expect(result).toBeNull()
      })
    })
  })

  describe('.set', () => {
    describe('when the name is present', () => {
      it('sets the item', () => {
        const value = 'rick_and_morty'
        LocalStorage.set('name', value)

        const result = localStorage.getItem('vooster-name')
        const expected = value

        expect(result).toEqual(expected)
      })
    })

    describe('when name is empty', () => {
      it('returns false', () => {
        const result = LocalStorage.set()

        expect(result).toBe(false)
      })
    })

    describe('when value is empty', () => {
      it('returns false', () => {
        const result = LocalStorage.set('test')

        expect(result).toBe(false)
      })
    })
  })

  describe('.remove', () => {
    it('removes the item with the given name', () => {
      expect(localStorage.getItem('vooster-name')).toBeDefined()

      LocalStorage.remove('name')

      expect(localStorage.getItem('vooster-name')).toBeNull()
    })
  })

  describe('.has', () => {
    describe('when the item exists', () => {
      it('returns true', () => {
        const result = LocalStorage.has('name')
        expect(result).toBe(true)
      })
    })

    describe('when the item does not exist', () => {
      it('returns false', () => {
        const result = LocalStorage.has('fake')
        expect(result).toBe(false)
      })
    })
  })
})
