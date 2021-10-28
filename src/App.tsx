import React , { useState, ChangeEvent, MouseEvent } from 'react';

import './App.css';


interface Tournament {
  tournamentname: string;
  location: string;
  category: string;
  date: Date | undefined;
  website: string;
  enddate: Date | undefined;
  formValid: boolean;
}

const App: React.FunctionComponent<Tournament> = (props) => {
  const [tournament, setTournament] = useState<Tournament>({
    tournamentname: props.tournamentname,
    location: props.location,
    category: props.category,
    date: props.date,
    website: props.website,
    enddate: props.enddate,
    formValid: false,
  });
  const handletournamentInput = (event: ChangeEvent<HTMLInputElement>) => {
    const elementName = event.target.name;
    // console.log(elementName);
    setTournament({
      ...tournament,
      [elementName]: event.target.value,
    });
  };
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    // setTournament();
    setTournament({
      ...tournament,
      formValid: true,
    });
    showSubmittedData();
    console.log(tournament);
  };

  const showSubmittedData = () => {
    console.log(tournament.formValid);
    if (tournament.formValid) {
      return (
        <div>
          <h4>You Data is:</h4>
          <h3>{tournament.tournamentname}</h3>
          <h3>{tournament.location}</h3>
          <h3>{tournament.category}</h3>
          { ((tournament.enddate !== undefined) && tournament.enddate) < ((tournament.date !== undefined) && tournament.date)
            ? 'Enter Correct Date'
            : 'corretdate'}
        </div>
      );
    }
  };
  return (
    <React.Fragment >
      <div className="login-box">
      <h2 className="entry"> Tournament Data</h2>
      <form>
      
      <div className="user-box">
     
      <input
        type="text"
        name="tournamentname"
        value={tournament.tournamentname}
        onChange={handletournamentInput}
      />
       <label>Name:</label>
      </div>
      
      <div className="user-box">
    
      <input
        type="text"
        name="location"
        value={tournament.location}
        onChange={handletournamentInput}
      />
       <label> Location:</label>
      </div>

      <div className="user-box">
  
      <input
        type="text"
        name="category"
        value={tournament.category}
        onChange={handletournamentInput}
      />
         <label> Category:</label>
    </div>
    <div className="user-box">
   
      <input
        type="date"
        name="date"
        value={tournament.date?.toString()}
        onChange={handletournamentInput}
       
      />
         <label> Start Date:</label>
      </div>
      <div className="user-box">
     
      <input
        type="date"
        name="enddate"
        value={tournament.enddate?.toString()}
        onChange={handletournamentInput}
       
      />
       <label>End Date:</label>
    </div>
    <div className="user-box">
   
      <input
        type="text"
        name="website"
        value={tournament.website}
        onChange={handletournamentInput}
      />
        <label> Website:</label>
      </div>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button onClick={handleSubmit} >
        Submit
      </button>
      </a>
      </form>
      {/* <showSubmittedData /> */}
      <div className="Container">
        <h2>Tournamanet Information  </h2>
        {tournament.formValid ? (
          <div>
            <h2>{tournament.tournamentname}</h2>
            <h2>{tournament.location}</h2>
            {((tournament.enddate !== undefined) && tournament.enddate) < ((tournament.date !== undefined) && tournament.date) ? (
              <h2>Enter correct date</h2>
            ) : (
              <div>
                <h2>{tournament.date}</h2>
                <h2>{tournament.enddate}</h2>
              </div>
            )}
            <h2>{tournament.website}</h2>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
     
    </React.Fragment>
  );
};


export default App;
