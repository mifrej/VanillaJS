export default class CheckForNotification {
  constructor() {
    this.randomTiming = (Math.random() * 18000).toFixed();
    this.listItemRandom = '<a href="#">Random name</a>';
    this.listItemPurchaseOrder = '<a href="#">Purchase Order</a>';
    this.render();
    this.interval = null;
    this.insertNotificaionAfterDelay();
    this.messageArrived = false;
    this.checkIfNotificationPresent();
  }

  removeInterval() {
    if (this.messageArrived) {
      clearInterval(this.interval);
      console.log(this.interval);
      console.log('Message found, test Finished');
    }
  }

  render() {
    this.emptyList = '<ul class="dropdown-content"><li>No messages</li></ul>';
    document.getElementById('app').innerHTML = this.emptyList;
    this.listWrapper = document.querySelector('ul.dropdown-content li');
  }

  insertNotificaionAfterDelay() {
    setTimeout(() => {
      this.listWrapper.innerHTML = this.listItemPurchaseOrder;
    }, this.randomTiming);
  }

  checkIfNotificationPresent() {
    this.interval = setInterval(() => {
      console.log('checking');
      const list = this.listWrapper.querySelectorAll('a');
      if (list.length > 0) {
        const notificationsArray = Array.from(list);
        notificationsArray.find((item) => {
          if (item.innerHTML === 'Purchase Order') {
            this.messageArrived = true;
          }
        });
      }
      this.removeInterval();
    }, 3000);
  }
}
