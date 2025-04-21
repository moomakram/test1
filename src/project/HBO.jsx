import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function HBO() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center text-center p-5" style={{ height: '100vh', backgroundColor: '#343a40', color: 'white' }}>
      <motion.div 
        className="p-4 rounded" 
        style={{ maxWidth: '800px', backgroundColor: '#212529', boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)' }}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="display-4 fw-bold">Welcome to your go-to site for the latest movies and TV shows, complete with Arabic subtitles.</h1>
        <motion.p 
          className="lead mt-3"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2, delay: 0.5 }}
        >
          Enjoy a vast selection of high-quality films, from Hollywood hits to acclaimed indie movies and popular series. Our user-friendly interface and advanced search features make it easy to find and stream your favorites. Stay updated with the newest additions and critics' reviews to make informed viewing choices. For a top-notch cinema experience, this is your ideal destination.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default HBO;
