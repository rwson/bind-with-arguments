## bind-with-arguments

彻底解决`React`事件绑定中`this`和参数的问题

### usage

```powershell
npm install bind-with-arguments --save
```

```jsx
import React, { Component } from 'react';
import bindWithArguments from 'bind-with-arguments';

class Comp extends Component {
  
	async loadDdetail(id) {
		//	fetch
  }

  //	异步函数并且有参数
  @bindWithArguments
  async asyncParams(id) {
    const detail = await this.loadDdetail(id);
    //	...
  }
  
  //	异步函数并且无参数
  @bindWithArguments  
  async asyncNoParams() {
    //	fetch
    this.setState({
      xxx: 'xxx'
    });
  }
  
  //	同步函数并且有参数
  @bindWithArguments
  syncParams(id, name) {
    if (id && name) {
      this.setState({
        xxx: 'xxxx'
      });
    }
  }
  
  //	同步函数并且有参数
  @bindWithArguments
  syncNoParams() {
    const { yyy } = this.state;
    if (yyy === 'zzz') {
      this.setState({
        xxx: 'xxxx'
      });
    }
  }
  
  
  render() {
    const { list } = this.state;

    return (
    	<div className='warapper'>
        {
          list.map((row) => {
            return (
            	<div className='row' key={row.id}>
              	<button onClick={this.asyncParams(row.id)}>异步函数并且有参数</button>
              	<button onClick={this.syncParams(row.id, row.name)}>同步函数并且有参数</button>
              </div>
            );
          })
        }
        <button onClick={this.asyncNoParams}>异步函数并且无参数</button>
        <button onClick={this.syncNoParams}>同步函数并且有参数</button>
      </div>
    )
  }
  
}
```


