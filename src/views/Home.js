import React, { useState, useEffect } from 'react';
import { Header, Footer, ListItem, Preloader } from '../components';
import { getTopTracks } from '../api/tracks';

export default function Home() {
  const [ tracks, setTracks ] = useState([]);
  const [ loading, setLoading ] = useState([]);

  async function fetchTopTracks() {
    try {
      setLoading(true);
      const response = await getTopTracks();
      setTracks(response.data.tracks.track)
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchTopTracks();
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <>
      <Header />
      <main>
        <div className="row">
          {tracks.map((track, index) => 
            <ListItem key={ index } track={ track } /> 
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

