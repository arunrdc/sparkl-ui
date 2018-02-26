export class Item {
    itemId: number;
    userName: string;
    channelName: string;
    itemName: string;
    itemDescription: string;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }