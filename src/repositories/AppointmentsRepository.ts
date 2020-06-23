import { EntityRepository, Repository } from 'typeorm';

import Appoinment from '../models/Appoinment';

@EntityRepository(Appoinment)
class AppoinmentRepository extends Repository<Appoinment> {
  public async findByDate(date: Date): Promise<Appoinment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default AppoinmentRepository;
