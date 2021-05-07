import * as React from 'react';
 type AppProps= {
   message:string;
   count:number;
   disabled:false;
  names:string[];

 }

interface MyProps {
    message: string;
}

interface MyState {
    count: number;
}
export class MyForm extends React.Component<MyProps, MyState> {
    state: MyState = {
      // optional second annotation for better type inference
      count: 0,
    };
    render() {
      return (
        <div>
          {this.props.message} {this.state.count}
         
        </div>
      );
    }
  }