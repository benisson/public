/**
 * @description
 * 
 * Simples barramentos de eventos.
 * 
 * Baseado no https://github.com/PierfrancescoSoffritti/light-event-bus.js
 * 
 */
function EventBusBanking() 
{
    const subscriptions = { };
  
    this.subscribe = function subscribeCallbackToEvent(eventType, callback) 
    {
    
      const id = Symbol('id');
    
      if (!subscriptions[eventType]) 
      {
        subscriptions[eventType] = { };
      }
      
      subscriptions[eventType][id] = callback;
      
      return {
        unsubscribe: function unsubscribe() {
          delete subscriptions[eventType][id];
          if (Object.getOwnPropertySymbols(subscriptions[eventType]).length === 0) {
            delete subscriptions[eventType];
          }
        },
      };
    };
  
    this.publish = function publishEventWithArgs(eventType, arg) {
      if (!subscriptions[eventType]) return;
  
      Object.getOwnPropertySymbols(subscriptions[eventType])
        .forEach(key => subscriptions[eventType][key](arg));
    };
  }

  const APP_EVENT_BUS = new EventBusBanking();
  
  //export default APP_EVENT_BUS;
;/**
 * Informações compartilhadas entre a aplicação container e os
 * micro frontends.
 * 
 */
function AppSharedData()
{
   this.userData = null; 
}


const APP_SHARED_DATA = new AppSharedData();
;
//# sourceMappingURL=scripts.js.map