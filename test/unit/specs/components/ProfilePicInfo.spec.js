import Vue from 'vue'
import ProfilePicInfo from '@/components/ProfilePicInfo'

describe('ProfilePicInfo', () => {
  const propsData = {
    profilePic: 'http://via.placehdsdsolder.com/350x150',
    profileName: 'Test name',
    profileNickname: 'Test nickname'
  }

  it('should render text', () => {
    let Ctor = Vue.extend(ProfilePicInfo)
    let vm = new Ctor({ propsData }).$mount()

    expect(vm.$el.querySelector('.profile-pic-info__nickname').innerHTML)
      .to.be.equal('Test nickname')
  })
})
