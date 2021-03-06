//  # START:pushProblem
const cart = [
	{
		name: 'The Foundation Triology',
		price: 19.99,
		discount: true
	},
	{
		name: 'Godel, Escher, Bach',
		price: 15.99,
		discount: false
	},
	{
		name: 'Red Mars',
		price: 5.99,
		discount: false
	}
];

const reward = {
	name: 'Guide to Science Fiction',
	discount: true,
	price: 0
};

function addFreeGift(cart) {
	if (cart.length > 2) {
		cart.push(reward);
		return cart;
	}
	return cart;
}

function summarizeCart(cart) {
	const discountable = cart.filter(item => item.discount);
    console.log(discountable);
	if (discountable.length > 1) {
		return {
			error: '할인 상품은 하나만 주문할 수 있습니다.'
		};
	}
	const cartWithReward = addFreeGift(cart);
	return {
		discounts: discountable.length,
		items: cartWithReward.length,
		cart: cartWithReward
	};
}
// console.log(summarizeCart(cart));
//  # END:pushProblem

//  # START:pushProblemUpdated
function summarizeCartUpdated(cart) {
    const cartWithReward = addFreeGift(cart);
    console.log(`리워드 추가로 cart ${cartWithReward}, cart = ${cart}`);
    console.log(cartWithReward);
	const discountable = cart.filter(item => item.discount);
    console.log(discountable);
	if (discountable.length > 1) {
		return {
			error: '할인 상품은 하나만 주문할 수 있습니다.'
		};
	}
	return {
		discounts: discountable.length,
		items: cartWithReward.length,
		cart: cartWithReward
	};
}
console.log(summarizeCartUpdated(cart));
//  # END:pushProblemUpdated

//  # START:spread
function addGift(cart) {
	if (cart.length > 2) {
		return [...cart, reward];
	}
	return cart;
}

function summarizeCartSpread(cart) {
	const cartWithReward = addGift(cart);
	const discountable = cart.filter(item => item.discount);
	if (discountable.length > 1) {
		return {
			error: '할인 상품은 하나만 주문할 수 있습니다.'
		};
	}
	return {
		discounts: discountable.length,
		items: cartWithReward.length,
		cart: cartWithReward
	};
}
//  # END:spread

function addWithPush() {
	//  # START:titles
	const titles = ['Moby Dick', 'White Teeth'];
	const moreTitles = [...titles, 'The Conscious Mind'];
	// ['Moby Dick', 'White Teeth', 'The Conscious Mind'];
	//  # END:titles
}

function forgetting() {
	//  # START:forgetting
	// 배열의 앞에 추가하기
	const titles = ['Moby Dick', 'White Teeth'];
	titles.shift('The Conscious Mind');

	const moreTitles = ['Moby Dick', 'White Teeth'];
	const evenMoreTitles = ['The Conscious Mind', ...moreTitles];

	// 복사하기
	const toCopy = ['Moby Dick', 'White Teeth'];
	const copied = toCopy.slice();

	const moreCopies = ['Moby Dick', 'White Teeth'];
	const moreCopied = [...moreCopies];
	//  # END:forgetting
}
