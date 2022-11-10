

describe('red remodels website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url('https://www.redremodels.com')
      let mainLogo = $('.u_1816216903.small-12.dmRespCol.large-4.medium-4.has-more-one-widget')
      await expect(mainLogo).toBeExisting()
    })
})