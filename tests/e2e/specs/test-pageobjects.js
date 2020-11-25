/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-10-22 12:04:48
 * @LastEditTime: 2020-10-22 17:16:06
 * @Descripttion: 模块描述
 */
////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: browser => browser.init(),

  // 'e2e tests using page objects': browser => {
  //   const homepage = browser.page.homepage()

  //   const app = homepage.section.app
  //   app.assert.elementCount('@logo', 1)
  //   app.expect.section('@welcome').to.be.visible
  //   app.expect
  //     .section('@headline')
  //     .text.to.match(/^Welcome to Your Vue\.js (.*)App$/)
  //   browser.end()
  // },

  click: browser => {
    // homepage对象sections - section 相当于dom元素  assert和expect以后的section不能有click和setvalue
    // 必须接检查方法，不然会报错
    const homepage = browser.page.homepage()
    // homepage
    //   .click('.single-ul div:first-child')
    //   .assert.containsText('.select-li', '选择了第1个')
    //   .setValue('input[type=text]', 'hello world')
    //   .assert.containsText('.out-text', 'hello world')
    const singleareaSection = homepage.section.app.section.singlearea
    const inputtextSection = homepage.section.app.section.inputtext
    homepage.moveToElement('.single-area', 0, 0)
    homepage.pause(2000)
    singleareaSection
      .click('.single-ul div:first-child').pause(2000)
      .assert.containsText('.select-li', '选择了第1个')
    inputtextSection
      .setValue('input[type=text]', 'hello world').pause(2000)
      .assert.containsText('.out-text', 'hello world')
  },

  'verify if string "e2e-nightwatch" is within the cli plugin links': browser => {
    const homepage = browser.page.homepage()
    const welcomeSection = homepage.section.app.section.welcome

    welcomeSection.expect
      .element('@cliPluginLinks')
      .text.to.contain('e2e-nightwatch')
  }
}
