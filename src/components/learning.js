// import React, { useState, useEffect } from 'react'
// import ProjectCard from "../ProjectCard"
// import { useFirestore } from 'react-redux-firebase'

// export default function ProjectList(props) {
//   const { currentUser } = props
//   const firestore = useFirestore();
//   const [data, setdata] = useState([])

//   useEffect(() => {

//     firestore.collection("projects").where("userId", "==", currentUser.uid).get()
//       .then(function (querySnapshot) {
//         let temp = [...data];
//         querySnapshot.forEach(function (doc) {
//           temp = [...temp, { ...doc.data(), id: doc.id }];
//           console.log(doc.id, '==>', doc.data());
//         });
//         setdata(temp);
//       })
//       .catch(function (error) {
//         console.log("Error getting documents: ", error);
//       });
//   }, [])


//   return (
//     <div className="card-container">
//       {data.length === 0 ? <h1>Nothing yet add some!</h1> : data.map(project => <ProjectCard key={project.id} project={project} />)}

//     </div>
//   )


// }



// import React, { useState } from 'react'
// import { message } from "antd"

// import { useFirestore } from 'react-redux-firebase'

// export default function NewProjectForm(props) {
//   const { setform, auth } = props

//   const firestore = useFirestore();
//   const [name, setname] = useState('')
//   const [url, seturl] = useState('')
//   const [desc, setdesc] = useState('')

//   const addProject = () => {
//     setform(false)
//     message.success("Project Added Succesfully!")
//     return firestore.collection('projects').add({ name, url, desc, userId: auth.currentUser.uid, userEmail: auth.currentUser.email, likes: 0, usersLiked: [] })
//   }

//   return (
//     <div>
//       <form >
//         <input onChange={e => setname(e.target.value)} type="text" placeholder="project name" />
//         <input onChange={e => seturl(e.target.value)} type="url" placeholder="project Deploy or Github Url" />
//         <textarea onChange={e => setdesc(e.target.value)} cols="30" rows="10" placeholder="describe your project and tech used" />
//         <button onClick={addProject} >Add!</button>
//       </form>
//     </div>
//   )
// }


// import { useSelector } from 'react-redux'
// import { useFirestoreConnect, isLoaded } from 'react-redux-firebase' //, isEmpty



// function QuizDashboard(props) {

//   useFirestoreConnect([
//     { collection: 'quizzes' }
//   ]);

//   const Quizzes = useSelector(state => state.firestore.ordered.quizzes);


//   if (isLoaded(Quizzes)) {
//     console.log(typeof (Quizzes));
//     console.log(Quizzes);

//     const filteredQuizzes = Object.values(Quizzes).filter((quiz) => {
//       if (quiz.userEmail == props.auth.currentUser.email) {
//         console.log(quiz);
//         return quiz;
//       }
//     })
//     console.log(filteredQuizzes);
//     return (
//       <React.Fragment>

//         {filteredQuizzes.map((quiz) => {
//           console.log(quiz.name);
//           return <Quiz
//             whenQuizClicked={props.onQuizSelection}
//             name={quiz.name}
//             username={quiz.username}
//             // q1={quiz.q1}
//             // q2={quiz.q2}
//             // q3={quiz.q3}
//             // q4={quiz.q4}
//             // q5={quiz.q5}
//             id={quiz.id}
//             key={quiz.id}
//           />
//         }
//         )
//         }


//       </React.Fragment>
//     );
//   } else {
//     return (
//       <React.Fragment>
//         <h3>Loading...</h3>
//       </React.Fragment>
//     )
