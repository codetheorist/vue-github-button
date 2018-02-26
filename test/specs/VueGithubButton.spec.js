import Vue from 'vue'
import Component from '../../src/VueGithubButton/VueGithubButton'

describe('VueGithubButton.vue', () => {
  const Constructor = Vue.extend(Component)
  const propsData = {text: 'Test text'}

  it('should instance the right component', () => {
    const vm = new Constructor({propsData})
    expect(vm.$options.name).to.equal('vue-github-button')
  })

  it('should render correct content', () => {
    const vm = new Constructor({propsData}).$mount()
    expect(vm.$el.innerHTML).to.equal(propsData.text)
  })
})
