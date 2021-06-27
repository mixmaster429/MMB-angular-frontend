import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TicketPrice } from '../../types/ticket-price.model';

@Component({
  selector: 'mmb-web-app-event-ticket-price',
  templateUrl: './event-ticket-price.component.html',
  styleUrls: ['./event-ticket-price.component.scss']
})
export class EventTicketPriceComponent implements OnInit {
  ticketPrices: TicketPrice[] = [{}];
  isSearching: boolean;
  @Output() ticketPricesUpdated: EventEmitter<TicketPrice[]> = new EventEmitter<TicketPrice[]>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Adds a row
   */
  onAddRow() {
    this.ticketPrices.push({});
  }

  /** 
   * Removes row from array
  */
  onRemoveRow(index: number) {
    if (this.ticketPrices.length === 1) {
      return;
    }
    this.ticketPrices.splice(index, 1);
  }

  /**
   * Ticket prices updated
   */
  onTicketPricesUpdated(ticketPrices: TicketPrice, index: number) {
    this.ticketPrices[index].currency = ticketPrices.currency && (<any>ticketPrices.currency).id ? (<any>ticketPrices.currency).id : ticketPrices.currency;
    this.ticketPrices[index].price = ticketPrices.price;
    this.ticketPrices[index].label = ticketPrices.label;
    this.ticketPricesUpdated.emit(this.ticketPrices);
  }
}
