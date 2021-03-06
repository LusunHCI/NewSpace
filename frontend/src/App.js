import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Coronavirus from './pages/Coronavirus';
// import ArticlesListPage from './pages/ArticlesListPage';
// import ArticlePage from './pages/ArticlePage';
// import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/Coronavirus" component={Coronavirus} />
              {/* <Route path="/articles-list" component={ArticlesListPage} > */}
              {/* <Route path="/articles-list" component={ArticlesListPage} > */}
              {/* <Route path="/article/:name" component={ArticlePage} />  */}
              {/* <Route component={NotFoundPage} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// const newsItems = [
//   {
//     id: 1,
//     title: "news1",
//     description: "the first news description",
//     completed: false
//   },
//   {
//     id: 2,
//     title: "news2",
//     description: "the second news description",
//     completed: false
//   },
//   {
//     id: 3,
//     title: "news3",
//     description: "the thrid news description",
//     completed: false
//   }
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       newsList: newsItems
//     };
//   }
//   displayCompleted = status => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }
//     return this.setState({ viewCompleted: false });
//   };
//   renderTabList = () => {
//     return (
//       <div className="my-5 tab-list">
//         <span
//           onClick={() => this.displayCompleted(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           Finished
//         </span>
//         <span
//           onClick={() => this.displayCompleted(false)}
//           className={this.state.viewCompleted ? "" : "active"}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };
//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.newsList.filter(
//       item => item.completed == viewCompleted
//     );
//     return newItems.map(item => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2 ${
//             this.state.viewCompleted ? "completed-news" : ""
//           }`}
//           title={item.description}
//         >
//           {item.title}
//           <p>
//             {item.description}
//           </p>
//         </span>
//         <span>
//           <button className="btn btn-secondary mr-2"> Edit </button>
//           <button className="btn btn-danger">Delete </button>
//         </span>
//       </li>
//     ));
//   };
//   render() {
//     return (
//       <main className="content">
//         <h1 className="text-white text-uppercase text-center my-4">Newspace App</h1>
//         <div className="row ">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="">
//                 <button className="btn btn-primary">Next News</button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }
// }
// export default App;
