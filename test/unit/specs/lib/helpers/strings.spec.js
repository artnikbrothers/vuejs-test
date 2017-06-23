import { truncateString } from '@/lib/helpers/strings.js'

describe('Strings', () => {
  const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, libero?'
  const str2 = 'Lorem ipsum dolor sit amet, consectetur. adipisicing elit. Iure, libero?'
  describe('#truncateString()', () => {
    it('should truncate string with ...', () => {
      expect(truncateString(str))
        .to.be.equal('Lorem ipsum dolor sit amet, co...')
      expect(truncateString(str, 40))
        .to.be.equal('Lorem ipsum dolor sit amet, consectetur...')
      expect(truncateString(str2, 40))
        .to.be.equal('Lorem ipsum dolor sit amet, consectetur...')
    })
  })
})
