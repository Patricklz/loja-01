import { all } from 'redux-saga/effects';

import cart from './cart/saga-cart';

export default function* rootSaga() {
    return yield all([cart]);
}
