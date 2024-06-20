let p1 = {
    name : "아이패드",
    price : 200000,
    quantity : 2,
    //함수선언 
    order : function() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    //함수 선언 
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1-rate) * this.price * this.quantity;
        }
        console.log((100*rate) + "% 할인된 금액으로 구매합니다.");
    },
    //화살표 함수를 이용하여 선언 
    order : () => {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },

}
p1.discount(0.2);
p1.order();