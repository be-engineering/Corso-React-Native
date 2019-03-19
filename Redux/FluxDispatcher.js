// Questo è un Dispatcher modificato da me ma di poco, a partire da quello utilizzato da Facebook in Flux //
// deve servire solo come esempio al fine di capire l architettura Redux, che migliora quella Flux, ma sempre molto simili //
// la differenza sta negli store dove in Redux è uno solo //
// Flux Dispatcher Originale: https://github.com/facebook/flux/blob/master/src/Dispatcher.js
/* eslint-disable no-continue */

const invariant = require('invariant');

export type Token = string;

const _prefix = 'ID_';

/**
 * // Esempi da docuemntazione Fb 
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */
class Dispatcher<Payload> {
  cb: {[key: Token]: (payload: Payload) => void};
  isDispatching: boolean;
  isHandled: {[key: Token]: boolean};
  isPending: {[key: Token]: boolean};
  lastID: number;
  pendingPayload: Payload;

  constructor() {
    this.cb = {};
    this.isDispatching = false;
    this.isHandled = {};
    this.isPending = {};
    this.lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */
  register(callback: (payload: Payload) => void): Token {
    const id = _prefix + this.lastID++;
    this.cb[id] = callback;
    return id;
  }

  /**
   * Removes a callback based on its token.
   */
  unregister(id: Token): void {
    invariant(
      this.cb[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.cb[id];
  }

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */
  waitFor(ids: Array<Token>): void {
    invariant(
      this.isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (let ii = 0; ii < ids.length; ii += 1) {
      const id = ids[ii];
      if (this.isPending[id]) {
        invariant(
          this.isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.cb[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.invokeCb(id);
    }
  }

  /**
   * Dispatches a payload to all registered callbacks.
   */
  dispatch(payload: Payload): void {
    invariant(
      !this.isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.startDispatching(payload);
    try {
      for (const id in this.cb) {
        if (this.isPending[id]) {
          continue;
        }
        this.invokeCb(id);
      }
    } finally {
      this.stopDispatching();
    }
  }

  /**
   * Is this Dispatcher currently dispatching.
   */
  isDispatching(): boolean {
    return this.isDispatching;
  }

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */
  invokeCb(id: Token): void {
    this.isPending[id] = true;
    this.cb[id](this.pendingPayload);
    this.isHandled[id] = true;
  }

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */
  startDispatching(payload: Payload): void {
    for (const id in this.cb) {
      if (id) {
        this.isPending[id] = false;
        this.isHandled[id] = false;
      }
    }
    this.pendingPayload = payload;
    this.isDispatching = true;
  }

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  stopDispatching(): void {
    delete this.pendingPayload;
    this.isDispatching = false;
  }
}

export default Dispatcher;
