import { solaceServer } from "./secret";
var mqtt = require('mqtt')

let eventBroker = {
  session: [],
  callback: ()=>{}
}

export function eventSetCallback(callback) {
  if (typeof callback == 'function') {
    eventBroker.callback = callback
  }
}

export function eventConnect(url=solaceServer.mqttHost, username=solaceServer.userName, password=solaceServer.password) {
  eventBroker.session = mqtt.connect(url, {
    username: username,
    password: password,
  });
  
  eventBroker.session.on('connect', () => {
      console.log("Connected")
  });
  
  eventBroker.session.on('message', (topic, message) => {
      console.log(`Got message ${message} from ${topic}`)
      try {
        let data = JSON.parse(message)
        if (typeof eventBroker.callback == 'function') eventBroker.callback(topic, data)
      } catch (e) {
        console.log(e)
      }
  });
  
  return false;
}

export function eventPublish(topic, message) {
  eventBroker.session.publish(topic, message);
  return false;
}

export function eventSubscribe(topic) {
  eventBroker.session.subscribe(topic);
  return false;
}

export function eventPublishType(topic, type, data, extra) {  
  data = {
    type, 
    data ,
    extra,
  }
  return eventPublish(topic, JSON.stringify(data))
}