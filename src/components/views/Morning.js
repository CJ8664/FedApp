import React from 'react'
import Team from '../Team'
import fire from '../../js/fire'

class Morning extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state={
      morning_projects: []
    }
  }

  componentDidMount(){
    // Initialize Cloud Firestore through Firebase
    var db = fire.firestore();
    var docRef = db.collection("morning_projects");

    var componentRef = this;

    docRef.onSnapshot({includeDocumentMetadataChanges: true}, function (querySnapshot){
      var projects = [];
      querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        projects.push(doc.id);
      })
      projects = projects.sort(function(a, b){ return b - a})
      componentRef.setState({morning_projects: projects})
    })
  }

  render = function() {
    return (
      <div>
        <h1>Morning projects</h1>
        <div className="row">
          <div className="col-lg-3">
            <Team entries={this.state.morning_projects}/>
          </div>
          <div className="col-lg-9">
            <ul className="list-group">
              <li className="list-group-item">First item</li>
              <li className="list-group-item">Second item</li>
              <li className="list-group-item">Third item</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

//

//
// getRealtimeUpdates = function() {
//   docRef.onSnapshot(function (doc){
//     console.log(doc.id + " " , doc)
//     if(this != null){
//       this.state.items.push(doc.id)
//     }
//   })
// };
//
// getRealtimeUpdates()
export default Morning
