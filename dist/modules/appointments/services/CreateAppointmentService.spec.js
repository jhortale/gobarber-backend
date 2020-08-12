"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeNotificationsRepository = _interopRequireDefault(require("../../notifications/repositories/fakes/FakeNotificationsRepository"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeAppointmentsRepository = _interopRequireDefault(require("../repositories/fakes/FakeAppointmentsRepository"));

var _CreateAppointmentService = _interopRequireDefault(require("./CreateAppointmentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeNotificatopnsRepository;
let fakeCacheProvider;
let fakeAppointmentsRepository;
let createAppointment;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeNotificatopnsRepository = new _FakeNotificationsRepository.default();
    fakeAppointmentsRepository = new _FakeAppointmentsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    createAppointment = new _CreateAppointmentService.default(fakeAppointmentsRepository, fakeNotificatopnsRepository, fakeCacheProvider);
  });
  it('should be able to create a new apppointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      user_id: '345345',
      provider_id: '123123'
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });
  it('should not be able to create two apppointments on the same date', async () => {
    const date = new Date(2020, 9, 10, 11);
    await createAppointment.execute({
      date,
      user_id: '345345',
      provider_id: '123123'
    });
    await expect(createAppointment.execute({
      date,
      user_id: '345345',
      provider_id: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an appointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 10, 11),
      user_id: '345345',
      provider_id: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an appointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 10, 13),
      user_id: '123123',
      provider_id: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an appointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 4, 11, 18),
      user_id: '345345',
      provider_id: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});