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
  }
    dat = this.session.retrieve("dat");
    hour = this.session.retrieve("hour");
    RESERVATION_DATE = new Date(dat).toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
    INITIAL_EVENTS: EventInput[] = [
        {
          id: createEventId(),
          title: '2021-45',
          start: this.RESERVATION_DATE
        },
        {
          id: createEventId(),
          title: 'Booking',
          start: this.RESERVATION_DATE +'T'+hour
        }
    ];
}
