import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlQBYPPxSvMxxfWMsOJ5iZlmg08F8AVNs",
  authDomain: "resume-builder-3bd2b.firebaseapp.com",
  projectId: "resume-builder-3bd2b",
  storageBucket: "resume-builder-3bd2b.appspot.com",
  messagingSenderId: "854110524541",
  appId: "1:854110524541:web:1024774e7cbbf0ebf1cd14"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore()

const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)))




ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config = {firebaseConfig}
      dispatch = {reduxStore.dispatch}
      createFirestoreInstance = {createFirestoreInstance}>
    <App />
    </ReactReduxFirebaseProvider>

      
    </Provider>
  
    </BrowserRouter>
,
  document.getElementById('root')
);