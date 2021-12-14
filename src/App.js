import React from 'react';
import Header from './components/Header';
import Place from './components/Place';
import Data from './db/Data';

function App() {
  const list=Data.map(item=><Place 
                              key={item.id}
                              title={item.title}
                              description={item.description}
                              startDate={item.startDate}
                              endDate={item.endDate}
                              location={item.location} 
                              imageUrl={item.imageUrl} 
                              googleMapsUrl={item.googleMapsUrl} 
                            />)
  return (
      <div className="app">
        {/* <img src={require("./components/images/christina.jpg")} />  */}
        <Header />
        {list}
      </div>
  );
}

export default App;
