// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, {Component} from 'react';
// import {StyleSheet, View, Text, TextInput} from 'react-native';
// export default class App extends Component
// {
//   constructor() {
//     super();
//     this.state = {
//       value: "Type here to add a to do.",
//     };
//     //handlechangeText = this.handlechangeText.bind(this);

//     }
//     handlechangeText(newtext)
//     {
//       this.setState({
//         value: newtext,
//       });
// this.state.customStyles = {
//   color: 'green',
// };
// setInterval(() => {
//   if (this.state.customStyles.color == 'green') {
//     this.setState({
//       customStyles: {
//         color: 'red',
//       },
//     });
//   } else {
//     this.setState({
//       customStyles: {
//         color: 'green',
//       },
//     });
//   }
//   1000;
// });
//   }

//   render() {
//     const todos = this.state.todos.reverse().map((todo, key) =>
//       <View style={{ flexDirection: 'row', marginTop: 20 }}>
//         <TouchableOpacity style={{
//     width: 20,
//     height: 20,
//     borderRadius: 15,
//     borderWidth: 3,
//     borderColor: 'white',
//     margin: 15
//   }}>
//           </TouchableOpacity>
//         <Text style={{ paddingLeft: 5, marginTop:10, fontSize: 28, color: 'white'}}>{todo.title}</Text>
//       </View>
//     );

//     return (
//       <View style={styles.container}>
//         {/* <Text style={[styles.welcome, this.state.customStyles]}>
//           hello world! */}
//         <TextInput

//           defaultValue={this.state.value}
//           onChangeText={this.handlechangeText}
//           placeholder="Type here to add a to do."
//           multiline={true}
//             autoCapitalize="sentences"
//             underlineColorAndroid="transparent"
//             selectionColor={'white'}
//             maxLength={30}
//             returnKeyType="done"
//             autoCorrect={false}
//             blurOnSubmit={true}
//         />
//         <Text>You are writing{this.state.value}</Text>
//         {todo}
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'yellow',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'blue',
//   },
// instructions: {
//   textAlign: 'center',
//   color: '#333333',
//   marginBottom: 5,
// },
// });
// import * as React from 'react';
// import { StatusBar, View, TextInput, Text, FlatList, TouchableOpacity  } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// export default class App extends React.Component {
//   state = {
//     inputValue: '',
//     todos: []
//   };

//   changeText = value => {
//     this.setState({
//       inputValue: value
//     });
//   };

//   addItem = () => {
//     if (this.state.inputValue !== '') {
//       this.setState(prevState => {
//         const newToDo = {
//           title: this.state.inputValue,
//           createdAt: Date.now(),
//         };

//         var todos = this.state.todos.concat(newToDo);

//         this.setState({
//           todos: todos,
//         });
//       });
//     }
//   };

//   render() {
//     const todos = this.state.todos.reverse().map((todo, key) =>
//       <View style={{ flexDirection: 'row', marginTop: 20 }}>
//         <TouchableOpacity style={{
//     width: 20,
//     height: 20,
//     borderRadius: 15,
//     borderWidth: 3,
//     borderColor: 'white',
//     margin: 15
//   }}>
//           </TouchableOpacity>
//         <Text style={{ paddingLeft: 5, marginTop:10, fontSize: 28, color: 'white'}}>{todo.title}</Text>
//       </View>
//     );

//     return (
//       <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
//         <StatusBar barStyle="light-content" />
//         <View>
//           <TextInput
//             style={styles.input}
//             onSubmitEditing={this.addItem}
//             onChangeText={this.changeText}
//             placeholder="Type here to add a to do."
//             value={this.state.inputValue}
//             placeholderTextColor={'#fff'}
//             multiline={true}
//             autoCapitalize="sentences"
//             underlineColorAndroid="transparent"
//             selectionColor={'white'}
//             maxLength={30}
//             returnKeyType="done"
//             autoCorrect={false}
//             blurOnSubmit={true}
//           />
//         </View>
//         <View>
//         {todos}
//         </View>
//       </LinearGradient>
//     );
//   }
// }

// const styles = {
//   input: {
//     marginTop: 30,
//     paddingTop: 10,
//     paddingRight: 15,
//     paddingLeft: 15,
//     fontSize: 34,
//     color: 'white',
//     fontWeight: '500',
//   },
// };

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './Reducers/index.js';
import CounterAction from './Actions/CounterAction';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <CounterAction />
      </Provider>
    );
  }
}
