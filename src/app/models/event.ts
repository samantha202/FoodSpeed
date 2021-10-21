import { EventInput } from '@fullcalendar/angular';
import {SessionStorageService} from 'ngx-webstorage';
let eventGuid = 0;
let dat;
let hour;

export function createEventId() {
  return String(eventGuid++);
}
export class event{
  constructor(private session:SessionStorageService){
    dat = this.session.retrieve("dat");
    hour = this.session.retrieve("hour");
    const RESERVATION_DATE = new Date(dat).toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
    const INITIAL_EVENTS: EventInput[] = [
        {
          id: createEventId(),
          title: '2021-45',
          start: RESERVATION_DATE
        },
        {
          id: createEventId(),
          title: 'Booking',
          start: RESERVATION_DATE +'T'+hour
        }
    ];
  }
}
