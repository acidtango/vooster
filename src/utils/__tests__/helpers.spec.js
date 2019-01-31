import Helpers from '../helpers'

describe('Helpers', () => {
  describe('.isObject', () => {
    it('returns true when the value is an object.', () => {
      expect(Helpers.isObject({})).toBe(true)
      expect(Helpers.isObject(Object.create({}))).toBe(true)
      expect(Helpers.isObject(Object.create(Object.prototype))).toBe(true)
      expect(Helpers.isObject(Object.create(null))).toBe(true)
      expect(Helpers.isObject(/foo/)).toBe(true)

      function Foo() {}
      expect(Helpers.isObject(new Foo())).toBe(true)
    })

    it('returns false when the value is not an object.', function() {
      expect(Helpers.isObject('whatever')).toBe(false)
      expect(Helpers.isObject(1)).toBe(false)
      expect(Helpers.isObject(function() {})).toBe(false)
      expect(Helpers.isObject([])).toBe(false)
      expect(Helpers.isObject(['foo', 'bar'])).toBe(false)
      expect(Helpers.isObject()).toBe(false)
      expect(Helpers.isObject(undefined)).toBe(false)
      expect(Helpers.isObject(null)).toBe(false)
    })
  })
})
