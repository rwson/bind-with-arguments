const functionMap = {
    //	异步并且有参数
  AsyncWith: (excutor, target, ...argus) => {
    return  async () => (await excutor.apply(target, argus));
  },
    //	异步无参数
  AsyncEmpty: async (excutor, target) => {
    return (await excutor.call(target));
  },
    //	同步并且有参数
  SyncWith: (excutor, target, ...argus) => {
    return () => excutor.apply(target, argus);;
  },
    //	同步无参数
  SyncEmpty: (excutor, target) => {
    return excutor.call(target);
  }
};

function bindWithArg(target, name, descriptor) {
    const excutor = target[name];
    const excutorType = {}.toString.call(excutor).slice(8, -1);
    const asyncCall = excutorType === 'AsyncFunction' ? 'Async' : 'Sync';
    const emptyCall = excutor.length === 0 ? 'Empty' : 'With';
    const fnType = `${asyncCall}${emptyCall}`;

    return Object.assign(target, descriptor, {
        value: functionMap[fnType].bind(null, excutor, target)
    });
}