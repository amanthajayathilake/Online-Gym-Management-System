import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";

import { getWorkouts } from "./actions/workouts";
import Workouts from "./components/Workouts/Workouts";
import WorkoutsDisplayMember from "./components/Workouts/WorkoutsDisplayMember";
import WorkoutDetails from "./components/WorkoutDetails/WorkoutDetails";
import Form from "./components/Form/Form";

//shehan imports
import AllprogramsMemer from "./components/WorkoutProgramsMember/AllPrograms/member-programs";
import workoutprogramcard from "./components/WorkoutProgramsMember/AllPrograms/workoutprogram-card";
import AllProgramsAdmin from "./components/AllProgramsAdmin";
import CreateProgramAdmin from "./components/CreateProgramAdmin";
import EditProgramAdmin from "./components/EditProgramAdmin";
import ProgramDetailsAdmin from "./components/ProgramDetailsAdmin";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import LandingPage from "./Screens/LandingPage/LandingPage";
import HomePage from "./Screens/HomePage/HomePage";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

//Dulshan QandA section
import { QandA } from "./components/QAndASection/QandA";
import { CreateQuestion } from "./components/QAndASection/CreateQuestion";
import { UpdateQuestion } from "./components/QAndASection/UpdateQuestion";
import { DeleteQuestion } from "./components/QAndASection/DeleteQuestion";
import { OtherQuestions } from "./components/QAndASection/OtherQuestions";
import { CreateAnswer } from "./components/QAndASection/CreateAnswer";
import { MyAnswers } from "./components/QAndASection/MyAnswers";
import { UpdateAnswer } from "./components/QAndASection/UpdateAnswer";
import { DeleteAnswer } from "./components/QAndASection/DeleteAnswer";

//  Manushika ClientRequest
import CreatePost from "./components/ClientRequest/CreatePost";
import Home from "./components/ClientRequest/Home";
import EditPost from "./components/ClientRequest/EditPost";
import PostDetails from "./components/ClientRequest/PostDetails";
import ptEdit from "./components/ClientRequest/ptEdit";

//Lakshan Receptionist
import viewMembers from "./Receptionist/viewMembers";
import editMember from "./Receptionist/editMember";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWorkouts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Redirect to="/member" />} />
      <Route path="/member" component={Header} />
      <div className="container-fluid">
        <Route
          path="/workouts"
          exact
          component={() => <Workouts setCurrentId={setCurrentId} />}
        ></Route>
      </div>
      <Route
        path="/trainer/workouts/add"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route
        path="/trainer/workouts/update/:id"
        exact
        component={() => (
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        )}
      ></Route>
      <Route path="/workouts/:id" component={WorkoutDetails} />
      <Route path="/member/workouts" component={WorkoutsDisplayMember} />
      <Route
        exact
        path="/trainer/workouts"
        component={() => <Redirect to="/workouts" />}
      />
      {/* manu*/}
      <div className="container">
        <Route
          path="/member/memberPTRequest/home"
          exact
          component={Home}
        ></Route>
        <Route
          path="/employee/memberPTRequest/ptEdit"
          exact
          component={ptEdit}
        ></Route>

        <Route
          path="/member/memberPTRequest/add"
          component={CreatePost}
        ></Route>
        <Route
          path="/employee/memberPTRequest/edit/:id"
          component={EditPost}
        ></Route>
        <Route
          path="/member/memberPTRequest/post/:id"
          component={PostDetails}
        ></Route>
      </div>
      <main>
        <Route path="/member" component={LandingPage} exact />
        <Route path="/member/login" component={LoginScreen} />
        <Route path="/member/profile" component={ProfileScreen} />
        <Route path="/member/register" component={RegisterScreen} />
        <Route path="/member/Home" component={() => <HomePage />} />

        <Route path="/employee/memberDetails" component={viewMembers}></Route>
        <Route path="/employee/editDetails/:id" component={editMember}></Route>

        <Route
          path="/member/workout-programs"
          component={AllprogramsMemer}
        ></Route>
        <Route path="/admin-card" component={workoutprogramcard}></Route>
        <Route path="/admin-programs" component={AllProgramsAdmin}></Route>
        <Route path="/admin-add-program" component={CreateProgramAdmin}></Route>
        <Route
          path="/admin-edit-program/:id"
          component={EditProgramAdmin}
        ></Route>
        <Route
          path="/admin-expand-program/:id"
          component={ProgramDetailsAdmin}
        ></Route>

        <Route exact path="/QandA/:mUsername" component={QandA} />
        <Route exact path="/q/createQ/:mUsername" component={CreateQuestion} />
        <Route exact path="/updateQ/:id" component={UpdateQuestion} />
        <Route exact path="/deleteQ/:id" component={DeleteQuestion} />
        <Route exact path="/otherQ/" component={OtherQuestions} />
        <Route exact path="/a/createA/:id" component={CreateAnswer} />
        <Route exact path="/myAnswers/:mUsername" component={MyAnswers} />
        <Route exact path="/updateA/:id" component={UpdateAnswer} />
        <Route exact path="/deleteA/:id" component={DeleteAnswer} />
      </main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
