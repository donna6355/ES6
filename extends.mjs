import Coupon from './classes.mjs'
// (node:2776) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

class FlashCoupon extends Coupon{
    constructor(price, expiration){
        super(price); //부모 클래스 생성자 호출. 그대로 상속
        this.expiration = expiration || '2시간' //변경 사항 발생
    }
    getExpirationMessage(){
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`
    }//현재 현재 클래스에 메서드가 있는지 먼저 확인 후 없으면 상위 클래스 확인
    isRewardsEligible(user){
        return super.isRewardsEligible(user) && this.price > 20;
    }
    getRewards(user0{
        if(this.isRewardsEligible(user)){
            this.price = this.price * 0.8;
        }
    })
};

const flash = new FlashCoupon(10);
console.log(flash.price);
console.log(flash.expiration);
console.log(flash.getExpirationMessage());