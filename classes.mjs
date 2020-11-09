class Coupon {
    constructor(price, expiration){
        this.price = price;
        this.expiration = expiration || '2주';
    }
    getPriceText(){
        return `${this.price}원`
    }
    getExpirationMessage(){
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`
    }
    isRewardsEligible(user){
        return user.isRewardsEligible && user.active;
    }
    getRewards(user){
        if(this.isRewardsEligible(user)){
            this.price = this.price * 0.9
        }
    }
}

const coupon = new Coupon(5);
// console.log(coupon.expiration); //2주
// console.log(coupon.getPriceText());

export default Coupon;