import { abbrNum } from '@/lib/helpers/numbers.js'

describe('Numbers', () => {
  describe('#abbrNum()', () => {
    it('should format number', () => {
      expect(abbrNum(10000)).to.be.equal('10k')
      expect(abbrNum(1000000)).to.be.equal('1m')
      expect(abbrNum(1000000000)).to.be.equal('1b')
      expect(abbrNum(1020000)).to.be.equal('1.02m')
    })
  })
})
