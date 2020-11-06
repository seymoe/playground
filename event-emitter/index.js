class EventEmitter {
  constructor() {
    this.eventMap = {};
  }

  // 监听
  on(event, handler) {
    if (!(handler instanceof Function)) {
      throw new Error("handler should be a function.");
    }
    if (!this.eventMap[event]) {
      // 一个事件对应多个事件处理函数
      this.eventMap[event] = [];
    }
    this.eventMap[event].push(handler);
  }

  // 触发
  emit(event, params) {
    const handlers = this.eventMap[event];
    if (Array.isArray(handlers)) {
      handlers.forEach((handler) => {
        handler(params);
      });
    }
  }

  // 卸载
  off(event, handler) {
    const handlers = this.eventMap[event];
    if (Array.isArray(handlers)) {
      handlers.splice(handlers.indexOf(handler), 1);
    }
  }
}

// 验证

const event = new EventEmitter();
const testHandler = function (params) {
  console.log("test event success be emit!", params);
};
const helloHandler = function (params) {
  console.log("hello event success be emit!", params);
};

event.on("", testHandler);
event.on("test", helloHandler);

event.emit("", "haha!");

// event.off("test", helloHandler);

console.log(event.eventMap);
