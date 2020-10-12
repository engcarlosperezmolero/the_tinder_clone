import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);
    // piece of code which runs based on a condition
    useEffect(() => {
      // this is where de code runs...
      const unsubscribe = database.collection('people').onSnapshot(snapshot => (
          setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
          // this is the cleanup... you deattached the listener before sendinf data to de browser
          unsubscribe();
        }
      // this  will run ONCE when the component loads, and never again
    }, []);

    // BAD
    // const people = []
    // people.push('sonny', 'qazi')

    // GOOD (Push to an array in REACT)
    // setPeople([...people, 'sonny', 'qazi'])

    return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
        <TinderCard
          className="swipe"
          key={person.name} // allows REACT to efficiently re render a LIST, gives fastness
          preventSwipe={["up","down"]}
        >
          <div //changing the CSS trough JavaScript
            style={{ backgroundImage: `url(${person.url})`}} // this is called inline style and string interpolation
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
      
    </div>
    )
}

export default TinderCards