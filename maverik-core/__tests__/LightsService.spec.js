const maverik = require('../index.js')

describe("LightsService", () => {
  let httpClient, spy, service;

  beforeEach(() => {
    httpClient = new maverik.HttpClient()
    spy = jest.spyOn(httpClient, 'post')
    service = new maverik.LightsService(httpClient)
  });

  it("turns on device", () => {
    service.turnOn()

    expect(spy).toHaveBeenCalledWith('http://maverik:4567/enable')
  });

  it("turns off device", () => {
    service.turnOff()

    expect(spy).toHaveBeenCalledWith('http://maverik:4567/disable')
  });
});
